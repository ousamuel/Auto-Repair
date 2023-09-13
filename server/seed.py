from app import app
from models import db, User, Car, Appointment

if __name__ == '__main__':
    with app.app_context():
        print("Clearing db...")
        User.query.delete()
        Car.query.delete()
        Appointment.query.delete()

        print("Seeding users...")
        sam = User(first_name="Sam", last_name="Ou", phone_number="119", email="Sam@hotmail.com", password ='YoungKing')
        mark = User(first_name="Mark", last_name="Tocino", phone_number="911", email="Mark@gmail.com", password ='King')
        users=[sam,mark]
        db.session.add_all(users)
        db.session.commit()
        
        print("Seeding cars...")
        accord = Car(make='Honda', model='Accord', year="2022", engine='252-hp turbocharged 2.0-liter four-cylinder',plate_number = 'TNGM07', user_id =mark.id)
        forester = Car(make='Subaru', model='Forester', year="2022", engine='182-hp 2.5-liter flat-four-cylinder',plate_number = 'SAMOUT1', user_id = sam.id)
        cars=[accord,forester]
        db.session.add_all(cars)
        db.session.commit()

        print("Seeding appointments...")
        
        samfor = Appointment(date='2023-10-01', time="11:00 AM", type_of_service='Glass Cleaning', user_id=sam.id, car_id = forester.id)
        markacc = Appointment(date='2023-10-14', time="01:00 PM", type_of_service='Exterior Hand Wash', user_id=mark.id, car_id =accord.id)
        appts =[markacc, samfor]
        db.session.add_all(appts)
        
        db.session.commit()

        print("Done seeding!")

#pipenv install & pipenv shell
