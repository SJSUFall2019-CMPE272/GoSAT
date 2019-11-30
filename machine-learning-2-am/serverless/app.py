import logic

from flask import Flask, request
from flask_restful import Resource, Api

app = Flask(__name__)
api = Api(app)

class perRecomend(Resource):
    def get(self, gpa, actE, actC, satW, satM, satE, agc, hc):
        return {'data': logic.main_process(gpa, actE, actC, satW, satM, satE, agc, hc)}

api.add_resource(perRecomend, '/main_process/<gpa>/<actE>/<actC>/<satW>/<satM>/<satE>/<agc>/<hc>')

if __name__ == '__main__':
     app.run()

#main_process/10/60 
