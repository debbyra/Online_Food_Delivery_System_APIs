#import the db instance
from backend.db import db

#creating the model class
class Address(db.Model):
   __tablename__ = "addresses"
   id = db.Column(db.Integer, primary_key = True)
   description = db.Column(db.String(255))
   user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
   district_id = db.Column(db.Integer, db.ForeignKey('districts.id'))

   #defining the function 
   def __init__(self,description,user_id,district_id):
      self.description = description
      self.user_id = user_id
      self.district_id = district_id

   #to call what you want to see when you call the function
   #function representation
   def __repr__(self):
    return f"<Address {self.description}>"
   
   