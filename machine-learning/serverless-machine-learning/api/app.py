"""
https://medium.com/@patrickmichelberger/how-to-deploy-a-serverless-machine-learning-microservice-with-aws-lambda-aws-api-gateway-and-d5b8cbead846
"""

from flask import Flask, request, json
import io
import logic

app = Flask(__name__)

@app.route('/', methods=['POST'])

def index():
    # Parse request body for model input 
    body_dict = request.get_json(silent=True)    
    data = body_dict['data']

    print("Received request {0}".format(data))

    gpa = data['gpa']
    actE = data['actE']
    actC = data['actC']
    satW = data['satW']
    satM = data['satM']
    satE = data['satE']
    agc = data['agc']
    hc = data['hc']

    logic.main_process(gpa, actE, actC, satW, satM, satE, agc, hc)
    result = logic.main_process(gpa, actE, actC, satW, satM, satE, agc, hc)
    return json.dumps(result)

if __name__ == '__main__':    
    # listen on all IPs 
    app.run(host='0.0.0.0')