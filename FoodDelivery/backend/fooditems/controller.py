#importing libraries
from flask import jsonify, request, Blueprint
from backend.fooditems.foodItem import FoodItem
from flask_jwt_extended import jwt_required
from backend.db import db

#creating a blue print of the addresses

all_fooditems = Blueprint('fooditems', __name__,url_prefix='/fooditems') 


#create the addresses endpoints
@all_fooditems.route('/')
def fooditems():
    
     fooditems= FoodItem.query.all()
     results = [
            {
                
                "name":fooditem.name,
                "price":fooditem.price,
                "image":fooditem.image,
                "foodsubtypes_id":fooditem.foodsubtypes_id  
            }for fooditem in fooditems ]
        
     return {"count":len(fooditems), "fooditems":results} 

#creating
@all_fooditems.route('/create', methods =['POST','GET'])
@jwt_required()
def new_fooditem():
    name = request.json['name']
    price = request.json['price']
    image = request.json['image']
    foodsubtypes_id = request.json['foodsubtypes_id']

    #validations
    if not name:
       return jsonify({'error':"name is required"}), 400
    
    if not price:
        return jsonify({'error':'please add price'}),400
    
    if not foodsubtypes_id:
        return jsonify({'error':"sub_categories_id is required!"}),400

    #storing the address data
    new_fooditem = FoodItem( name=name,price=price, image=image, foodsubtypes_id=foodsubtypes_id)

    #add the new address
    db.session.add(new_fooditem)
    db.session.commit()
    return jsonify({'success':True, 'message':'You have successfully registered'}), 201


#update the fooditems table
@all_fooditems.route('/update/<int:id>', methods = ['PATCH'])
def update_fooditems(id): 
     fooditem = FoodItem.query.get_or_404(id)
     name = request.json['name']

     fooditem.name = name
     #or region.name = request.json['name'] 
     return jsonify({'message':'successfully added'})

#deleting
@all_fooditems.route('/delete/<int:id>',methods = ['DELETE'])
def delete_fooditems(id):
     fooditem = FoodItem.query.get_or_404(id)
     db.session.delete(fooditem)
     db.session.commit()
     return jsonify({'message':f'{fooditem.name} successfully deleted'})

#reading a specific id
@all_fooditems.route('/fooditem/<int:id>',methods = ['GET'])
def get_fooditems(id):
     fooditem = FoodItem.query.get_or_404(id)

     response = {
            "id":fooditem.id,
            "name":fooditem.name,
            "price":fooditem.price,
            "foodsubtypes_id":fooditem.foodsubtypes_id
        } 
     db.session.add(fooditem)
     db.session.commit()
     return jsonify({'message':'success', 'fooditem':response})
