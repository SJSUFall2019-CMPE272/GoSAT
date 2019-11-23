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

    # Load model from S3 bucket
    model_s3 = S3.get_object(Bucket=BUCKET_NAME, Key=MODEL_FILE_NAME)

    # Load pickle model
    model_str = model_s3['Body'].read()
    model = pickle.loads(model_str)

    # Load encoder from S3 bucket
    encoder_s3 = S3.get_object(Bucket=BUCKET_NAME, Key=ENCODER_FILE_NAME)

    # Load pickle model
    encoder_str = encoder_s3['Body'].read()
    encoder = pickle.loads(encoder_str)

    categorical_cols = ['ethnicity', 'gender', 'school', 'transfer', 'fall term']
    categorical = [[value for key, value in data.items() if key in categorical_cols]]

    feature_cols = ['gpa', 'sat', 'act']
    intermediate = [[value for key, value in data.items() if key in feature_cols]]

    categoricl_transformed = encoder.fit_transform(categorical).toarray()
    X = np.hstack((intermediate, categoricl_transformed))

    # Make prediction 
    # prediction = model.predict(data).tolist()
    # Respond with prediction result
    # result = {'prediction': prediction}

    result = {
        'statusCode': 200,
        'probability': random.uniform(0, 1),
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