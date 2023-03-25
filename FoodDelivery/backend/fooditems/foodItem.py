from backend.db import db

class FoodItem(db.Model):
   __tablename__ = "food_items"
   id = db.Column(db.Integer, primary_key = True)
   name = db.Column(db.String(100))
   price = db.Column(db.String(50))
   image = db.Column(db.String(255), nullable = True)
   foodsubtypes_id = db.Column(db.Integer, db.ForeignKey('sub_categories.id'))
   #relationships
   orders = db.relationship('Order', backref= 'food_item')

   def __init__(self,name,price,image,foodsubtypes_id):
      self.name = name
      self.price = price
      self.image = image
      self.foodsubtypes_id = foodsubtypes_id
     
   
