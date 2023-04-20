from backend.db import db

class Region(db.Model):
   __tablename__ = "regions"
   id = db.Column(db.Integer, primary_key = True)
   name = db.Column(db.String(100))
   #relationship
   districts = db.relationship('District', backref= 'region')


   def __init__(self,name):

      self.name = name

   
