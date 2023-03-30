import React from 'react';
import '../forms.css';
import Myfooter from './Myfooter';
import { Form, Button } from 'semantic-ui-react';
import { useForm } from "react-hook-form";

function Register() {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  }
  return (
    <div>
      <div className='container'>
        <div className='app-wrapper'>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <h1>CREATE ACCOUNT</h1>
            <label>Enter your name:
              <input id='form1'
                type="text"
                {...register("name", { required: true, maxLength: 10 })}
              />
            </label><br></br>
            <div className='error'>
            {errors.name && <p>Please check the  Name</p>}
            </div>
            

            <label>Enter your Email:
              <input id='form1'
                type="email"
                {...register("email",
                  {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
                  })}

              />
            </label><br></br>
            <div className='error'>{errors.email && <p>Please check the Email</p>}</div>
            

            <label>Enter your Contact:
              <input id='form1'
                type="contact"
                {...register("contact", { required: true, maxLength: 10 })}
              
              />
            </label><br></br>
            <div className='error'>{errors.contact && <p>Please check the contact</p>}</div>
            

            <label>Enter your User-Type:
              <input id='form1'
                type="usertype"
                {...register("usertype", { required: true, maxLength: 10 })}
              />
            </label><br></br>
            <div className='error'>{errors.usertype && <p>Please check the User-Type</p>}</div>
            
            <label>Enter your password:
              <input id='form1'
                type="password"
                {...register("password", {
                  required: true,
                  pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/
              })}
              />
            </label><br></br>
            <div className='error'>{errors.password && <p>Please check the password</p>}</div>
            <br></br>
            <Button className='submit'>SIGN UP</Button>
          </Form>

        </div>
      </div>
      <div><Myfooter /></div>

    </div>


  )
}

export default Register
