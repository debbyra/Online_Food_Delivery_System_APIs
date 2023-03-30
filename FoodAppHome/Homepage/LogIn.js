import React from 'react';
import '../forms.css';
import Myfooter from './Myfooter';
import { Form, Button } from 'semantic-ui-react';
import { useForm } from "react-hook-form";
import { Outlet, Link } from "react-router-dom";

function LogIn() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    console.log(data);

  }
  return (
    <div>
      <div className='container2'>
      

        <div className='app-wrapper2'>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <h1>User LogIn</h1>

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
            
            <Button className='submit'>LoGIN</Button><br></br>
            <Link to="/Register"><div className='sign'><h4>User Register Here</h4></div></Link><br></br>

            <Link to="/Admin"><div className='sign'><h4>Only Admin Login Here</h4></div></Link>

            
          </Form>
          

        </div>
      </div>
      <div><Myfooter /></div>
      <Outlet/>

    </div>
  )
}

export default LogIn