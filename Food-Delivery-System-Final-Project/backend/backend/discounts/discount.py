from backend.db import db

class Discount(db.Model):
   __tablename__ = "discounts"
   id = db.Column(db.Integer, primary_key = True)
   description = db.Column(db.String(255))
   status = db.Column(db.String(20))
   foodsubtypes_id = db.Column(db.Integer, db.ForeignKey('sub_categories.id'))

   def __init__(self,description,status,foodsubtypes_id):
      self.description = description
      self.status = status
      self.foodsubtypes_id = foodsubtypes_id