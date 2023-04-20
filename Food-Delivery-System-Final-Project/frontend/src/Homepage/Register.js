import React, { useState } from "react";
import "../forms.css";
import Myfooter from "./Myfooter";
import { Navbar } from "./Mynavbar";
import { Form, Button } from "semantic-ui-react";
// import { useForm } from "react-hook-form";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    user_type: "",
    password: "",
  });

  const {
    handleSubmit,
  } = async (event) => {
    event.preventDefault();

    

    const response = await fetch("http://127.0.0.1:5000/users/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      const data = await response.json();
      console.log("Registration successful!", data);
    } else {
      console.log("Registration failed.");
    }
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
   

    <div>
      <div>
        <Navbar />
      </div>
      <div className="container">
        <div className="app-wrapper">
          <Form onSubmit={handleSubmit}>
            <h1>CREATE ACCOUNT</h1>
            <label htmlFor="name">
              Enter your name:
              <input
                className="form2"
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange} required
              />
            </label>
            <br></br>
            {/* <div className="error">
              {errors.name && <p>Please check the Name</p>}
            </div> */}

            <label htmlFor="email">
              Enter your Email:
              <input
                className="form2"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                // {...register("email", {
                //   required: true,
                //   pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                // })}
                onChange={handleChange} required
              />
            </label>
            <br></br>
            {/* <div className="error">
              {errors.email && <p>Please check the Email</p>}
            </div> */}

            <label htmlFor="contact">
              Enter your Contact:
              <input
                className="form2"
                type="contact"
                id="contact"
                name="contact"
                value={formData.contact}
                // {...register("contact", { required: true, maxLength: 10 })}
                onChange={handleChange} required
              />
            </label>
            <br></br>
            {/* <div className="error">
              {errors.contact && <p>Please check the contact</p>}
            </div> */}

            <label htmlFor="user_type">
              Enter your User-Type:
              <input
                className="form2"
                type="user_type"
                id="user_type"
                name="user_type"
                value={formData.user_type}
                // {...register("usertype", { required: true, maxLength: 10 })}
                onChange={handleChange} required
              />
            </label>
            <br></br>
            {/* <div className="error">
              {errors.usertype && <p>Please check the User-Type</p>}
            </div> */}

            <label htmlFor="password">
              Enter your password:
              <input
                className="form2"
                type="password"
                id="password"
                name="password"
                value={formData.password}
                // {...register("password", {
                //   required: true,
                //   pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/,
                // })}
                onChange={handleChange} required
              />
            </label>
            <br></br>
            {/* <div className="error">
              {errors.password && <p>Please check the password</p>}
            </div> */}
            <br></br>
            <Button className="submit" type="submit">
              SIGN UP
            </Button>
          </Form>
        </div>
      </div>
      <div>
        <Myfooter />
      </div>
    </div>
  );
}

export default Register;
