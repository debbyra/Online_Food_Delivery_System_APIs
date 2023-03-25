from backend.db import db

class SubCategory(db.Model):
   __tablename__ = "sub_categories"
   id = db.Column(db.Integer, primary_key = True)
   name = db.Column(db.String(100))
   image = db.Column(db.String(255), nullable = True)
   categories_id = db.Column(db.Integer, db.ForeignKey('categories.id'))
   #relationship
   fooditems = db.relationship('FoodItem', backref= 'sub_category')
   discounts = db.relationship('Discount', backref = 'sub_category')
   

   def __init__(self,name, image,categories_id):
      self.name = name    
      self.image = image
      self.categories_id = categories_id
      
