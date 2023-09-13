#!/bin/bash
if ! command -v pipenv &> /dev/null; then
    pip install pipenv
fi
pipenv install

pip install next
pip install sqlalchemy_serializer
pip install flask_restful
pip install flask_migrate
pip install flask_sqlalchemy
pip install cors
pip install flask_cors
npm install formik --save
