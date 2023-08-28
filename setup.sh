#!/bin/bash
if ! command -v pipenv &> /dev/null; then
    pip install pipenv
fi
pipenv install
pipenv shell

pip install sqlalchemy_serializer
pip install flask_restful
pip install flask_migrate
pip install flask_sqlalchemy
pip install flask_session
pip install axios