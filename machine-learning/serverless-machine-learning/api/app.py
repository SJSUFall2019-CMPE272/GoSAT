"""
https://medium.com/@patrickmichelberger/how-to-deploy-a-serverless-machine-learning-microservice-with-aws-lambda-aws-api-gateway-and-d5b8cbead846
"""

from flask import Flask, request, json
from flask_cors import CORS
import boto3
import pickle
import numpy as np
import random

from sklearn import preprocessing

BUCKET_NAME = 'gosat-models'
MODEL_FILE_NAME = 'gosat_logistic_regression'
ENCODER_FILE_NAME = 'gosat_logistic_encoder'
LABEL_MAPPING = 'gosat_label_mapping.json'

app = Flask(__name__)
S3 = boto3.client('s3', region_name='eu-central-1')

CORS(app)
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

    # Load label encoding from S3
    labels_s3 = S3.get_object(Bucket=BUCKET_NAME, Key=LABEL_MAPPING)
    labels_str = labels_s3['Body'].read()
    mapping = json.loads(labels_str)

    print ("Loaded label mapping {0}".format(mapping))

    categorical_values = [[
     data['ethnicity'].encode("utf-8").lower(), 
     data['gender'].encode("utf-8").lower(),
     data['county'].encode("utf-8").lower()
    ]]

    non_categorical_values = [[
     float(data['gpa']),
     int(data['scrRead']),
     int(data['scrMath']),
     int(data['scrWrit'])
    ]]

    categoricl_features = encoder.transform(categorical_values).toarray()

    print ("Transformed categorical features {0}".format(categoricl_features.shape))
    X = np.hstack((non_categorical_values, categoricl_features))
    print ("Transformed final feature set {0}".format(X.shape))

    prediction = [round(pred, 2) * 100 for pred in model.predict_proba(X)[0]]

    result = {}
    for pred, label in zip(prediction, model.classes_):
        result[mapping[str(label)].replace(" ", "")] = pred

    return json.dumps(result)

if __name__ == '__main__':    
    # listen on all IPs 
    app.run(host='0.0.0.0')