from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from sqlalchemy.orm import validates
from sqlalchemy_serializer import SerializerMixin

convention = {
    "ix": "ix_%(column_0_label)s",
    "uq": "uq_%(table_name)s_%(column_0_name)s",
    "ck": "ck_%(table_name)s_%(constraint_name)s",
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
    "pk": "pk_%(table_name)s"
}

metadata = MetaData(naming_convention=convention)

db = SQLAlchemy(metadata=metadata)

class User(db.Model, SerializerMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String)
    last_name = db.Column(db.String)
    phone_number = db.Column(db.String, unique = True)
    email = db.Column(db.String, unique = True)
    password = db.Column(db.String, nullable = False)
    appointments = db.relationship('Appointment', cascade = 'all,delete',backref = 'user')
    serialize_rules=('-appointments.user',)
<<<<<<< HEAD


=======
    # @validates('first_name')
    # def validate_first_name(self, key, first_name):
    #     if len(first_name) <= 1:
    #         raise ValueError('names must be more than 1 character')
    #     return first_name
    # @validates('last_name')
    # def validate_first_name(self, key, last_name):
    #     if len(last_name) <= 1:
    #         raise ValueError('names must be more than 1 character')
    #     return last_name
    # @validates('password')
    # def validate_first_name(self, key, password):
    #     if len(password) <= 1:
    #         raise ValueError('password must be more than 1 character')
    #     return password
>>>>>>> origin/main
class Car(db.Model, SerializerMixin):
    __tablename__ = 'cars'

    id = db.Column(db.Integer, primary_key=True)
    make = db.Column(db.String)
    model = db.Column(db.String)
    year = db.Column(db.String)
    engine = db.Column(db.String)
    plate_number = db.Column(db.String, unique = True)
    appointments = db.relationship('Appointment',cascade = 'all,delete',backref='car')
    serialize_rules=('-appointments.car',)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))


class Appointment(db.Model, SerializerMixin):
    __tablename__ = 'appointments'

    id = db.Column(db.Integer, primary_key=True)
    date = db.Column(db.String)
    time = db.Column(db.String)
    payment = db.Column(db.String)
    type_of_service = db.Column(db.String)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    car_id = db.Column(db.Integer, db.ForeignKey('cars.id'))
    serialize_rules = ('-car.appointments', '-user.appointments',)

