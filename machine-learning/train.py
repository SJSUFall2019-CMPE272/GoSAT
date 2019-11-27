import boto3
import logging
import numpy as np
import pandas as pd
import pickle

from botocore.exceptions import ClientError
from sklearn.datasets import make_classification
from sklearn.ensemble import RandomForestRegressor
from sklearn import preprocessing
from StringIO import StringIO

def transform_input(df):
    # lowercase all strings
    df.applymap(lambda s: s.lower() if type(s) == str else s)

    encoder = preprocessing.OneHotEncoder(handle_unknown='ignore')
    categorical_cols = ['Ethnicity', 'Gender', 'County', 'Campus']
    categorical = df[categorical_cols].values

    non_categorical_cols = ['GPA', 'ACT', 'AvgScrRead', 'AvgScrMath', 'AvgScrWrit']
    intermediate = df[non_categorical_cols]

    categoricl_transformed = encoder.fit_transform(categorical).toarray()
    features = np.hstack((intermediate.values, categoricl_transformed))

    return encoder, features

def main():
    # Assign these values before running the program
    test_bucket_name = 'gosat-data'
    test_object_name = 'sample-data.csv'
    S3 = boto3.client('s3', region_name='eu-central-1')

    # Load data
    response = S3.get_object(Bucket=test_bucket_name, Key=test_object_name)
    data = response['Body'].read().decode('utf-8')
    df = pd.read_csv(StringIO(data))

    # transform the data for the model
    encoder, X = transform_input(df)
    y = df['ProbabilityOfAcceptance']

    # train model
    clf = RandomForestRegressor(n_estimators=100, max_depth=2, random_state=0)
    clf.fit(X, y)

    # upload data to AWS
    pickle.dump(clf, open('models/gosat_random_forest', 'w'))
    pickle.dump(encoder, open('models/gosat_random_forest_encoder', 'w'))
    S3.upload_file('models/gosat_random_forest', 'gosat-models', 'gosat_random_forest')
    S3.upload_file('models/gosat_random_forest_encoder', 'gosat-models', 'gosat_random_forest_encoder')

if __name__ == '__main__':
    main()