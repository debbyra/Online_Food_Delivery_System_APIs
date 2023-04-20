import React, { useState } from "react";
import "../forms.css";
import Myfooter from "./Myfooter";
import { Navbar } from "./Mynavbar";
import { Form, Button } from "semantic-ui-react";
// import { useForm } from "react-hook-form";
import { Outlet, Link } from "react-router-dom";

function LogIn() {
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm();
  // const onSubmit = (data) => {
  //   console.log(data);
  // };
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const {
    handleSubmit,
  } = async (event) => {
    event.preventDefault();

    const response = await fetch("http://127.0.0.1:5000/auth/login", {
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
      <div className="container2">
        <div className="app-wrapper2">
          <Form onSubmit={handleSubmit}>
            <h1>User LogIn</h1>

            <label>
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
                onChange={handleChange}
                required
              />
            </label>
            <br></br>
            {/* <div className="error">
              {errors.email && <p>Please check the Email</p>}
            </div> */}

            <label>
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
                onChange={handleChange}
                required
              />
            </label>
            <br></br>
            {/* <div className="error">
              {errors.password && <p>Please check the password</p>}
            </div>
            <br></br> */}

            <Button className="submit" type="submit">
              LOGIN
            </Button>
            <br></br>

            <div className="sign">
              <h4>
                Don't have an account? <Link to="/Register">SignUp</Link>
              </h4>
            </div>

            <br></br>

            <Link to="/Admin">
              <div className="sign">
                <h4>Only Admin Login Here</h4>
              </div>
            </Link>
          </Form>
        </div>
      </div>
      <div>
        <Myfooter />
      </div>
      <Outlet />
    </div>
  );
}

export default LogIn;
