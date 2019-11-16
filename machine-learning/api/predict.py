import json
import random

def handler(event, context):
    print('Getting your predictions...')

    result = {
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

    print (json.dumps(result))

    return
    {
        'statusCode': 200,
        'body': json.dumps(result)
    }

if __name__ == "__main__":
    handler('', '')