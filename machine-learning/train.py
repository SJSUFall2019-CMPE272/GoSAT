import boto3
import logging
import numpy as np
import pandas as pd
import pickle

from botocore.exceptions import ClientError
from sklearn.datasets import make_classification
from sklearn.ensemble import RandomForestClassifier
from sklearn import preprocessing
from StringIO import StringIO

def transform_input(df):
    enc = preprocessing.OneHotEncoder()
    categorical_cols = ['Ethnicity', 'Gender', 'School', 'Transfer']
    categorical = df[categorical_cols]

    non_feature_cols = ['Unnamed: 0', 'NumStudentsAccepted',
     'TotalStudentsAcceptedInTerm', 'ProbabilityOfAcceptance']
    intermediate = df[['Fall Term', 'GPA', 'ACT', 'SAT']]

    categoricl_transformed = enc.fit_transform(categorical).toarray()
    features = np.hstack((intermediate.values, categoricl_transformed))
return features

def main():
    # Assign these values before running the program
    test_bucket_name = 'gosat-sample-data'
    test_object_name = 'sample-data.csv'
    S3 = boto3.client('s3', region_name='eu-central-1')

    # Load data
    response = S3.get_object(Bucket=test_bucket_name, Key=test_object_name)
    data = response['Body'].read().decode('utf-8')
    df = pd.read_csv(StringIO(data))

    X = transform_input(df)
    y = y = [0, 1, 0, 1, 0]

    clf = RandomForestClassifier(n_estimators=100, max_depth=2, random_state=0)

    clf.fit(X, y)
    pickle.dump(clf, open('models/gosat_random_forest', 'w'))
    S3.upload_file('models/gosat_random_forest', 'gosat-models', 'gosat_random_forest')


if __name__ == '__main__':
    main()