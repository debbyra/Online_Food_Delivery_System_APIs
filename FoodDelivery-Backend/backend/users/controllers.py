
# #register a new user
# from flask import  jsonify, request, Blueprint
# from backend.users.model import User
# from flask_jwt_extended import create_access_token
# from backend.db import db
# from werkzeug.security import  check_password_hash,generate_password_hash


# users = Blueprint('users', __name__, url_prefix='/users')

# #get all users
# @users.route("/")
# def all_users():
#     users= User.query.all()
#     return jsonify({
#             "success":True,
#             "data":users,
#             "total":len(users)
#         }),200

# #user registration
# @users.route('/register',methods=['GET','POST'])
# def create_user():
#     data = request.get_json()
    
#     if request.method == "POST":
          
#       name = data['name']
#       email = data['email']
#       contact = data['contact']
#       user_type = data['user_type']
#       password = data['password']


  
#       #validations
#       if not contact:
#               return jsonify({'error':"Please enter all fields"})
      
#       if not name:
#               return jsonify({'error':"First name is required"})
      

#       if len(password) < 6:
#             return jsonify({'error': "Password is too short"}), 400



#       if User.query.filter_by(email=email).first() is not None:
#         return jsonify({'error': "Email is already in use"}), 409 

    
#       if User.query.filter_by(contact=contact).first() is not None:
#         return jsonify({'error': "Phone number is already in use"}),409
       

#       #creating a hashed password in the database
#       hashed_password = generate_password_hash(password,method="sha256")
#       new_user = User(name=name,email=email,contact=contact,user_type=user_type,password=hashed_password) 
      
#       #inserting values
#       db.session.add(new_user)
#       db.session.commit()
#       return jsonify({'message':'New user created sucessfully','data':new_user}),200
          
   
#     elif request.method == "GET":
#         users= User.query.all()
#         return jsonify({
#             "success":True,
#             "data":users,
#             "total":len(users)
#         })
        



# #user login
# @users.route("/login", methods=["POST"])
# def login():
#     email = request.json.get("email")
#     password = request.json.get("password")
#     user=User.query.filter_by(email=email).first()


#     if not email or not password:
#         return jsonify({"message":"Both email and password are required"})
    
#     if not user:
#         return jsonify({"message":"The email doesnot exist"}),404
#     else:
#         is_valid_password =check_password_hash(user.password,password)
        
#         if is_valid_password:
#           access_token = create_access_token(identity=user.id)
#           return jsonify({"Msg":"You have successfully logged in","Token":access_token,"success":False,"user":user}),200
#         else:
#             return jsonify({"msg":"invalid password"})

   
    
        

   
# @users.route('/user/<user_id>', methods=['GET', 'PUT', 'DELETE'])
# def handle_user(user_id):
#     user = User.query.get_or_404(user_id)

#     if request.method == 'GET':
#         response = {
#             "id":user.id,
#             "name": user.name,
#             "user_type":user.user_type,
#             "email": user.email,
#             "contact": user.contact
#         }
#         return jsonify({"success": True, "user": response,"message":"User details retrieved"})

#     elif request.method == 'PUT':
#         data = request.get_json()

#         if not data['name']:
#             return jsonify({"message":"Your name is required"})
        
#         if not data['email']:
#             return jsonify({"message":"Your email address is required"})
        
#         if not data['contact']:
#             return jsonify({"message":"Your contact is required"})
        
#         if not data['password'] or len(data['password'])<6:
#             return jsonify({"message":"Your password is required and must be greater than 6 characters"})
        
#         user.name = data['name']
#         user.email = data['email']
#         user.contact = data['contact']
#         user.password = generate_password_hash(data['password'])
#         # user.updated_at = datetime.utcnow()
#         db.session.add(user)
#         db.session.commit()
#         return jsonify({"message": f"User details of {user.name} updated successfully"})

#     elif request.method == 'DELETE':
#         db.session.delete(user)
#         db.session.commit()
#         return jsonify({"message": f"User {user.name} successfully deleted."})   
    


#importing libraries
from flask import jsonify, request, Blueprint
from werkzeug.security import check_password_hash, generate_password_hash
from backend.users.model import User
from backend.db import db
import datetime

#creating a blue print of the users
all_users = Blueprint('users', __name__,url_prefix='/users') 

#create the users endpoints
@all_users.route('/')
def users():   
     users= User.query.all()
     results = [
            {
               "name":user.name,
               "password":user.password,
               "email":user.email,
               "user_type":user.user_type,
               "contact":user.contact
            }for user in users]
        
     return {"count":len(users), "users":results} 

#creating
@all_users.route('/create', methods =['GET','POST'])
def new_user():
    name = request.json['name']
    email = request.json['email']
    password = request.json['password']
    user_type = request.json['user_type']
    contact = request.json['contact']
   


    #validations
    if not name:
       return jsonify({'error':"name is required"}), 400
    
    if not password:
        return jsonify({'error':"password is required"})
    
    if len(password) < 6:
        return jsonify({'password should be longer than 6 characters'})
    
    if not email:
        return jsonify({'error':'email is required'})
    
    if not user_type:
        return jsonify({'error':'user_type is required'})

    
    #constraints    
    if User.query.filter_by(password = password).first():
        return jsonify({'message':'This password is already in use'}),409

    if User.query.filter_by(email = email).first():
        return jsonify({'message':'This email has already been taken'}),409

    #storing the new reviews data
     #creating a hashed password for the database
    hashed_password = generate_password_hash(password,method='sha256')
    new_user = User(name=name, password=hashed_password, email=email, user_type=user_type, contact=contact)

    #add the new review
    db.session.add(new_user)
    db.session.commit()
    return jsonify({'success':True, 'message':'You have successfully registered'}), 201

#reading 
@all_users.route('/user/<int:id>', methods = ['GET'])
def get_user(id):
    user = User.query.get_or_404(id)

    response = {
            "id":user.id,
            "name":user.name,
            "user_type":user.user_type,
            "email":user.email,
            "contact":user.contact,
            "password":user.password
        } 

    db.session.add(user)
    db.session.commit() 
    return jsonify({'success': True, 'user': response, 'message':'success'})

#updating
@all_users.route('/update/<int:id>', methods = ['PATCH'])
def update_user(id):
     user = User.query.get_or_404(id)
     user.password = request.json['password']
    #  name = request.json['name']
    #  user.name = name

     db.session.add(user)
     db.session.commit()
     return jsonify({'message':'successfully patched'})

#deleting
@all_users.route('/delete/<int:id>',methods = ['DELETE'])
def delete_user(id):
     user = User.query.get_or_404(id)
     db.session.delete(user)
     db.session.commit()
     return jsonify({'message':f'{user.name} successfully deleted'})