#!/usr/bin/env python

import os

from flask import Flask, request
from flask.ext.sqlalchemy import SQLAlchemy
from flask_restful import Resource, Api
from sqlalchemy.dialects.postgresql import JSON


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ['DATABASE_URL']

api = Api(app)
db = SQLAlchemy(app)


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True)
    arguments = db.Column(JSON)

    def __init__(self, email, arguments):
        self.email = email
        self.arguments = arguments


class Arguments(Resource):
    def get(self):
        return User.query.filter_by(email='dbonner@gmail.com').first().arguments

    def post(self):
        user = User.query.filter_by(email='dbonner@gmail.com').first()
        user.arguments = request.get_json()
        db.session.commit()
        return user.arguments

api.add_resource(Arguments, '/')


def init_db():
    db.create_all()
    user = User('dbonner@gmail.com', {'show': ['juliet', 'cole', 'eve']})
    db.session.add(user)
    db.session.commit()


if __name__ == '__main__':
    app.run('0.0.0.0', debug=True)
