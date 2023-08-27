from models import db, User, Car, Appointment
from flask_restful import Api, Resource
from flask_migrate import Migrate
from flask import Flask, make_response, jsonify, request, render_template, redirect, session
from flask_session import Session
import os

BASE_DIR = os.path.abspath(os.path.dirname(__file__))
DATABASE = os.environ.get(
    "DB_URI", f"sqlite:///{os.path.join(BASE_DIR, 'app.db')}")


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = DATABASE
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False
app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"
Session(app)

migrate = Migrate(app, db)

db.init_app(app)
api=Api(app)

@app.route('/')
def home():
    return 'HELLO WORLD'

class Users(Resource):
    def get(self):
        users = User.query.all()
        users_ser = [user.to_dict() for user in users]
        return make_response(users_ser, 200)
api.add_resource(Users,'/users')

class Cars(Resource):
    def get(self):
        cars = Car.query.all()
        cars_ser =[car.to_dict() for car in cars]
        return make_response(cars_ser, 200)
api.add_resource(Cars, '/cars')

class Register(Resource):
    def post(self):
        data = request.get_json()
        user = User()
        try:
            for attr in data:
                setattr(user, attr, data[attr])
            db.session.add(user)
            db.session.commit()
            return make_response(user.to_dict(), 200)
        except ValueError as error:
            new_error = make_response({'error': str(error)}, 200)
            return new_error
api.add_resource(Register, '/register')

class Login(Resource):
    def post(self):
        data = request.get_json()
        email = data["email"]
        password = data["password"]

        user = User.query.filter(User.email == email).first()
        if not user:
            return make_response({'error':'No user found with email'}, 401)
        if user.password != password:
            return make_response({"error":"Invalid email or password"})
        if user.password == password and user.email == email:
            session['user.id'] = request.form.get("user.id")
            return make_response({
                "id":user.id,
                "email":user.email
            },200) and redirect("/")
        

api.add_resource(Login, '/login')
class Appointments(Resource):
    def post(self):
        data = request.get_json()
        new_appt = Appointment(
            date = data['date'],
            time = data['time'],
            payment = data['payment'],
            type_of_service=data['type_of_service'],
            
        )
    # date = db.Column(db.String)
    # time = db.Column(db.Integer)
    # payment = db.Column(db.Integer)
    # type_of_service = db.Column(db.String)
    # user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    # car_id = db.Column(db.Integer, db.ForeignKey('cars.id'))
api.add_resource(Appointments, '/appointments')


if __name__ == "__main__":
    app.run(port=5555, debug = True )