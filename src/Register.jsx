import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./register.css";

function Register() {
  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
    repassword: "",
  });

  const handleValidation = (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const emailInput = document.getElementById("email").value;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const password = document.getElementById("password").value;
    const repassword = document.getElementById("repassword").value;

    let isValid = true;
    const newErrors = {
      username: "",
      email: "",
      password: "",
      repassword: "",
    };

    if (username === "") {
      newErrors.username = "*enter username";
      isValid = false;
    }

    if (!emailRegex.test(emailInput)) {
      newErrors.email = "*invalid email";
      isValid = false;
    }

    if (password === "") {
      newErrors.password = "*enter password";
      isValid = false;
    }

    if (repassword !== password) {
      newErrors.repassword = "*passwords do not match";
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid) {
      alert("Form is valid and ready for submission");
    }
  };

  return (
    <div className="wrapper-register">
      <div className="register">
        <div className="title">
          <h1>Register</h1>
        </div>
        <div className="in-register">
          <form onSubmit={handleValidation}>
            <div className="username">
              <input type="text" placeholder="username" id="username" />
              <span style={{ color: "red" }}>{errors.username}</span>
            </div>
            <div className="email">
              <input type="email" id="email" placeholder="email" />
              <span style={{ color: "red" }}>{errors.email}</span>
            </div>
            <div className="password">
              <input type="password" id="password" placeholder="password" />
              <span style={{ color: "red" }}>{errors.password}</span>
            </div>
            <div className="repassword">
              <input
                type="password"
                id="repassword"
                placeholder="confirm password"
              />
              <span style={{ color: "red" }}>{errors.repassword}</span>
            </div>
            <br />
            <div className="submit">
              <button type="submit">Submit</button>
            </div>
          </form>
          <div className="alrhaveacc">
            <p>Already have an account? </p>&nbsp;
            <Link to="/signup">signup</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
