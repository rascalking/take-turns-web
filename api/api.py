#!/usr/bin/env python

import functools
import os

from flask import Flask, jsonify, request
from flask.ext.sqlalchemy import SQLAlchemy
from flask_restful import Resource, Api
from flask_restful.utils import cors
from sqlalchemy.dialects.postgresql import JSON
from sqlalchemy.orm.exc import MultipleResultsFound, NoResultFound


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
    @cors.crossdomain(origin='*', headers='Content-Type')
    def get(self):
        return jsonify(User.query.filter_by(email='dbonner@gmail.com')
                           .first().arguments)

    @cors.crossdomain(origin='*', headers='Content-Type')
    def post(self):
        user = User.query.filter_by(email='dbonner@gmail.com').first()
        user.arguments = request.get_json()
        db.session.commit()
        return jsonify(user.arguments)

    @cors.crossdomain(origin='*', headers='Content-Type')
    def options(self):
        return super(Arguments, self).options()

api.add_resource(Arguments, '/')


def init_db():
    db.create_all()
    try:
        db.session.query(User).filter(
            User.email=='dbonner@gmail.com').one()
    except (MultipleResultsFound, NoResultFound) as e:
        user = User('dbonner@gmail.com', {})
        db.session.add(user)
        db.session.commit()


if __name__ == '__main__':
    init_db()
    app.run('0.0.0.0', debug=True)
