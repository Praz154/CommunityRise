import React from "react";
import { Link } from "react-router-dom";
import "./register.css";

function SignUp() {
  const validateForm = (e) => {
    e.preventDefault();
    const emailInput = document.getElementById("email").value;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const emailError = document.getElementById("email_error");
    const password = document.getElementById("password").value;
    const passwordError = document.getElementById("password_error");

    let isValid = true;

    if (!emailRegex.test(emailInput)) {
      emailError.innerText = "*invalid email";
      isValid = false;
    } else {
      emailError.innerText = "";
    }

    if (password === "") {
      passwordError.innerText = "*enter password";
      isValid = false;
    } else {
      passwordError.innerText = "";
    }

    if (isValid) {
      alert("Form is valid and ready for submission");
    }
  };

  return (
    <div className="wrapper-register">
      <div className="register">
        <div className="title">
          <h1>Sign Up</h1>
        </div>
        <div className="in-register">
          <form onSubmit={validateForm}>
            <div className="email">
              <input type="email" id="email" placeholder="username or email" />
              <span style={{ color: "red" }} id="email_error"></span>
            </div>
            <div className="password">
              <input type="password" id="password" placeholder="password" />
              <span style={{ color: "red" }} id="password_error"></span>
            </div>
            <div className="submit">
              <button type="submit">Submit</button>
            </div>
          </form>
          <div className="alrhaveacc">
            <p>Already have an account? </p>&nbsp;
            <Link to="/register">Register</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
