from backend.db import db
from dataclasses import dataclass

@dataclass
class User(db.Model):
   __tablename__ = "users"
   id:int
   name:str
   email:str
   password:str
   contact:int
   user_type:str
   id = db.Column(db.Integer, primary_key = True)
   name = db.Column(db.String(100))
   password = db.Column(db.String(10),unique = True)
   email = db.Column(db.String(30),unique = True)
   contact = db.Column(db.Integer,unique = True)
   user_type = db.Column(db.String(25))
   #relationships
   orders = db.relationship('Order', backref= 'user')
   addresses = db.relationship('Address', backref = 'user')
   

   def __init__(self,name,password,contact,email,user_type):
      self.name = name
      self.password = password
      self.email = email
      self.user_type = user_type
      self.contact = contact
      

   


