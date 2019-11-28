"""
https://medium.com/@patrickmichelberger/how-to-deploy-a-serverless-machine-learning-microservice-with-aws-lambda-aws-api-gateway-and-d5b8cbead846
"""

from flask import Flask, request, json
import boto3
import pickle
import numpy as np
import random

from sklearn import preprocessing

BUCKET_NAME = 'gosat-models'
MODEL_FILE_NAME = 'gosat_random_forest'
ENCODER_FILE_NAME = 'gosat_random_forest_encoder'

app = Flask(__name__)
S3 = boto3.client('s3', region_name='eu-central-1')

@app.route('/', methods=['POST'])

def index():    
    # Parse request body for model input 
    body_dict = request.get_json(silent=True)    
    data = body_dict['data']

    print("Received request {0}".format(data))

    # Load model from S3 bucket
    model_s3 = S3.get_object(Bucket=BUCKET_NAME, Key=MODEL_FILE_NAME)

    # Load pickle model
    model_str = model_s3['Body'].read()
    model = pickle.loads(model_str)

    print ("Loaded model")

    # Load encoder from S3 bucket
    encoder_s3 = S3.get_object(Bucket=BUCKET_NAME, Key=ENCODER_FILE_NAME)

    # Load pickle model
    encoder_str = encoder_s3['Body'].read()
    encoder = pickle.loads(encoder_str)

    print ("Loaded encoder")

    categorical_values = [[
     data['ethnicity'].encode("utf-8").lower(), 
     data['gender'].encode("utf-8").lower(),
     data['county'].encode("utf-8").lower(),
     data['campus'].encode("utf-8").lower()
    ]]

    non_categorical_values = [[
     data['gpa'],
     data['act'],
     data['scrRead'],
     data['scrMath'],
     data['scrWrit']
    ]]

    categoricl_features = encoder.transform(categorical_values).toarray()

    print ("Transformed categorical features {0}".format(categoricl_features.shape))
    X = np.hstack((non_categorical_values, categoricl_features))
    print ("Transformed final feature set {0}".format(X.shape))

    prediction = model.predict(X)[0]
    print ("Predicted {0}".format(prediction))

    result = {
        'statusCode': 200,
        'probability': prediction,
        'feature_importances': {
            'gender': 0.14205973,
            'school': 0.76664038,
            'ethnicity': 0.0282433,
            'gpa': 0.06305659,
            'transfer': 0.05810283,
            'sat': 0.39012123,
            'act': 0.11294921129
        }
    }
   
    return json.dumps(result)

if __name__ == '__main__':    
    # listen on all IPs 
    app.run(host='0.0.0.0')