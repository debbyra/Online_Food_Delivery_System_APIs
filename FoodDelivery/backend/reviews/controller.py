#importing libraries
from flask import jsonify, request, Blueprint
from backend.reviews.review import Review
from flask_jwt_extended import jwt_required
from backend.db import db

#creating a blue print of the reviews
all_reviews = Blueprint('reviews', __name__,url_prefix='/reviews') 

#create the reviews endpoints
@all_reviews.route('/', methods =['GET'])
def reviews():
    
     reviews= Review.query.all()
     results = [
            {
                "food_rev":review.food_rev,
                "orders_id":review.orders_id,
            }for review in reviews]
        
     return {"count":len(reviews), "reviews":results} 


@all_reviews.route('/create', methods =['POST','GET'])
@jwt_required()
def new_review():
    
    food_rev = request.json['food_rev']
    orders_id = request.json['orders_id']

    #validations
    if not food_rev:
       return jsonify({'error':"food_rev is required"}), 400
    

    #storing the new reviews data
    new_review = Review( food_rev=food_rev, orders_id=orders_id)

    #add the new review
    db.session.add(new_review)
    db.session.commit()
    return jsonify({'success':True, 'message':'You have successfully registered'}), 201


#reading
@all_reviews.route('/review/<int:id>', methods = ['GET'])
def get_review(id):
    review = Review.query.get_or_404(id)

    response = {
            "id":review.id,
            "food_rev":review.food_rev,
            "orders_id":review.orders_id
        } 
    db.session.add(review)
    db.session.commit()
    return jsonify({'message':'successful ', 'review':response})

#updating
@all_reviews.route('/update/<int:id>', methods = ['PATCH'])
def update_user(id):
     review = Review.query.get_or_404(id)
     name = request.json['name']
     review.name = name

     db.session.add(review)
     db.session.commit()
     return jsonify({'message':'successfully patched'})

#deleting
@all_reviews.route('/delete/<int:id>',methods = ['DELETE'])
def delete_review(id):
     review = Review.query.get_or_404(id)
     db.session.delete(review)
     db.session.commit()
     return jsonify({'message':f'{review.name} successfully deleted'})
