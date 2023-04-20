#importing libraries
from flask import jsonify, request, Blueprint
from backend.category.category import Category
from flask_jwt_extended import jwt_required
from backend.db import db

#creating a blue print of the foodtypes
all_categories = Blueprint('categories', __name__,url_prefix='/categories') 

#create the foodtypes endpoints
#getting all
@all_categories.route('/')
def categories():
    
     categories = Category.query.all()
     results = [
            {
                "name":category.name,
                "image":category.image
            }for category in categories ]
        
     return {"count":len(categories), "categories":results} 

#creating
@all_categories.route('/create', methods =['POST'])
@jwt_required()
def new_foodtype():
    name = request.json['name']
    image = request.json['image']
#validations
    if not name:
       return jsonify({'error':"name is required"}), 400
    

#storing the foodtypes data

    new_category = Category( name=name, image=image)
 
#add the new foodtypes
    db.session.add(new_category)
    db.session.commit()
    return jsonify({'success':True, 'message':'new category successfully registered'}), 201

#reading 
@all_categories.route('/category/<int:id>', methods = ['GET'])
def get_foodtype(id):
    category = Category.query.get_or_404(id)

    response = {
            "id":category.id,
            "name":category.name,
            "image":category.image
        } 
    db.session.add(category)
    db.session.commit()
    return jsonify({'message':'successful ' , 'category':response})

#updating
@all_categories.route('/update/<int:id>', methods = ['PATCH'])
def update_category(id):
     category = Category.query.get_or_404(id)

     name = request.json['name']
     category.name = name

     db.session.add(category)
     db.session.commit()
     return jsonify({'message':'successfully patched'})

#deleting
@all_categories.route('/delete/<int:id>',methods = ['DELETE'])
def delete_category(id):
     category = Category.query.get_or_404(id)
     db.session.delete(category)
     db.session.commit()
     return jsonify({'message':f'{category.name} successfully deleted'})