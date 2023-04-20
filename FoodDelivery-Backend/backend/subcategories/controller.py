#importing libraries
from flask import jsonify, request, Blueprint
from backend.subcategories.subType import SubCategory
from flask_jwt_extended import jwt_required
from backend.db import db

#creating a blue print of the foodsubtypes
all_subcategories = Blueprint('subcategories', __name__,url_prefix='/subcategories') 

#create the foodsubtypes endpoints
#getting
@all_subcategories.route('/')
def subcategories():
    
     subcategories= SubCategory.query.all()
     results = [
            {
                "name":subcategory.name,
                "image":subcategory.image,
                "categories_id":subcategory.categories_id
            }for subcategory in subcategories ]
        
     return {"count":len(subcategories), "subcategories":results} 

#creating or posting
@all_subcategories.route('/create', methods =['POST'])
@jwt_required()
def new_foodtype():
    name = request.json['name']
    image = request.json['image']
    categories_id = request.json['categories_id']

    #validations
    if not name:
       return jsonify({'error':"name is required"}), 400
    

    #storing the foodsubtypes data
    new_subcategory = SubCategory( name=name, image=image, categories_id=categories_id)
    #add the new foodsubtypes
    db.session.add(new_subcategory)
    db.session.commit()
    return jsonify({'success':True, 'message':'new sub_category successfully registered'}), 201

#reading 
@all_subcategories.route('/subcategory/<int:id>', methods = ['GET'])
def get_subcategory(id):
    subcategory = SubCategory.query.get_or_404(id)

    response = {
            "id":subcategory.id,
            "name":subcategory.name,
            "image":subcategory.image,
            "categories_id":subcategory.categories_id
        } 
    db.session.add(subcategory)
    db.session.commit()
    return jsonify({'message':'successful', 'subcategory':response})

#updating
@all_subcategories.route('/<int:id>', methods = ['PUT'])
def update_subcategory(id):
     subcategory = SubCategory.query.get_or_404(id)

     name = request.json['name']
     subcategory.name = name

     db.session.add(subcategory)
     db.session.commit()
     return jsonify({'message':'successfully patched'})

#deleting
@all_subcategories.route('/delete/<int:id>',methods = ['DELETE'])
def delete_subcategory(id):
     subcategory = SubCategory.query.get_or_404(id)
     db.session.delete(subcategory)
     db.session.commit()
     return jsonify({'message':f'{subcategory.name} successfully deleted'})