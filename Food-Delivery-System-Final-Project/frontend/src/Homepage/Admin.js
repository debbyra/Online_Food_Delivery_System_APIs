import React from "react";
import "../forms.css";
import Myfooter from "./Myfooter";
import { Form, Button } from "semantic-ui-react";
import { useForm } from "react-hook-form";
import { Outlet, Link } from "react-router-dom";
import { Navbar } from "./Mynavbar";
import { useEffect, useState } from "react";

function Admin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  //fetching the APIs
  const [users, setUsers] = useState([]);
  console.log("Users: ", users);

  const fetchAllUsers = () => {
    fetch("http://127.0.0.1:5000/users/user/5")
      .then((response) => response.json())
      .then((data) => setUsers(data.users));
  };
  useEffect(() => {
    fetchAllUsers();
  }, []);
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="container2">
        <div className="app-wrapper2">
          <Form onSubmit={handleSubmit(onSubmit)}>
            <h1>Admin LogIn</h1>
            <label>
              Enter your Admin pin:
              <input
                id="form1"
                type="password"
                {...register("pin", {
                  required: true,
                  pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/,
                })}
              />
            </label>
            <br></br>
            <div className="error">
              {errors.pin && <p>Please check the pin</p>}
            </div>
            <br></br>
            <Button className="submit">LOGIN</Button>
            <Link to="/maindash">
              <div className="sign">
                <h4>Go to Dashboard</h4>
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

export default Admin;
