import boto3
import logging
import pickle

from botocore.exceptions import ClientError
from sklearn.datasets import make_classification
from sklearn.ensemble import RandomForestClassifier

"""
To upload to S3 via CLI: aws s3 cp filename s3://bucket-name
"""

def get_object(bucket_name, object_name):
    """Retrieve an object from an Amazon S3 bucket

    :param bucket_name: string
    :param object_name: string
    :return: botocore.response.StreamingBody object. If error, return None.
    """

    # Retrieve the object
    s3 = boto3.client('s3')
    try:
        response = s3.get_object(Bucket=bucket_name, Key=object_name)
    except ClientError as e:
        # AllAccessDisabled error == bucket or object not found
        logging.error(e)
        return None
    # Return an open StreamingBody object
    return response['Body']

def main():
    """Exercise get_object()"""

    # Assign these values before running the program
    test_bucket_name = 'gosat-sample-data'
    test_object_name = 'sample-data.csv'

    X, y = make_classification(n_samples=1000, n_features=4, n_informative=2,
    	                       n_redundant=0, random_state=0, shuffle=False)

    clf = RandomForestClassifier(n_estimators=100, max_depth=2, random_state=0)

    clf.fit(X, y)
    pickle.dump(clf, open('models/gosat_random_forest', 'w'))


if __name__ == '__main__':
    main()