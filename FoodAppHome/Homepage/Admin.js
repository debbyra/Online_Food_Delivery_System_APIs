import React from 'react';
import '../forms.css';
import Myfooter from './Myfooter';
import { Form, Button } from 'semantic-ui-react';
import { useForm } from "react-hook-form";


function Admin() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    console.log(data);

  }
  return (
    <div>
      <div className='container2'>
        <div className='app-wrapper2'>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <h1>Admin LogIn</h1>
            <label>Enter your Amin pin:
              <input id='form1'
                type="password"
                {...register("pin", {
                    required: true,
                    pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/
                })}
              />
            </label><br></br>
            <div className='error'>
            {errors.pin && <p>Please check the pin</p>}
            </div>
            <br></br>
            <Button className='submit'>LOGIN</Button>
            <div className='sign'><h4>Go to Dashboard</h4></div>
          </Form>

        </div>
        
      </div>
      <div><Myfooter /></div>
  

    </div>
  )
}

export default Admin