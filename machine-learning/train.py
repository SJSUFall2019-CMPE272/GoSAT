import boto3
import logging
import pandas as pd
import pickle

from botocore.exceptions import ClientError
from sklearn.datasets import make_classification
from sklearn.ensemble import RandomForestClassifier
from StringIO import StringIO

# TODO: transform categorical columns
# TODO: write method to transform data for predictions
# TODO: upload model to S3 bucket
def main():
    # Assign these values before running the program
    test_bucket_name = 'gosat-sample-data'
    test_object_name = 'sample-data.csv'
    S3 = boto3.client('s3', region_name='eu-central-1')

    # Load data
    response = S3.get_object(Bucket=test_bucket_name, Key=test_object_name)
    data = response['Body'].read().decode('utf-8')
    df = pd.read_csv(StringIO(data))

    feature_cols = ['Ethnicity', 'Gender', 'Fall Term', 'Transfer', 'GPA', 'SAT', 'ACT']
    features = df[feature_cols]

    X, y = make_classification(n_samples=1000, n_features=4, n_informative=2,
    	                       n_redundant=0, random_state=0, shuffle=False)

    clf = RandomForestClassifier(n_estimators=100, max_depth=2, random_state=0)

    clf.fit(X, y)
    pickle.dump(clf, open('models/gosat_random_forest', 'w'))


if __name__ == '__main__':
    main()


test_bucket_name = 'gosat-sample-data'
test_object_name = 'sample-data.csv'
S3 = boto3.client('s3', region_name='eu-central-1')
response = S3.get_object(Bucket=test_bucket_name, Key=test_object_name)
data = response['Body'].read().decode('utf-8')