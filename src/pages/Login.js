import React, { useState } from "react";
import Nav from "../components/Nav";
import "../styles/login.css";
import { GoPerson } from "react-icons/go";
import { RiLockPasswordFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

function Login() {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (setInputValue) {
      navigate(`/card-scan/${"LOGIN"}`);
    } else if (inputValue) {
      alert("Invalid username or password");
    }
  };
  return (
    <section>
      <Nav />
      <section className="relative-container">
        <div className="login-square">
          <GoPerson />
          <h3>Log In</h3>
        </div>
        <div className="center" onSubmit={handleSubmit}>
          <form method="post">
            <div className="txt_field">
              <div className="cont-profile-icon">
                <GoPerson className="profile-icon" />
              </div>

              <input type="text" required />
              <span></span>
              <label htmlFor="">Username</label>
            </div>
            <div className="txt_field">
              <div className="cont-profile-icon">
                <RiLockPasswordFill className="profile-icon" />
              </div>

              <input type="password" required />
              <span></span>
              <label htmlFor="">Password</label>
            </div>
            <div className="Detial-login">
              <input type="submit" value={"LOGIN"} className="" />
              <div className="texts">
                <h5>
                  <a href="https://portal.esut.edu.ng/index.aspx">
                    Need an account?
                  </a>
                  <span>
                    <a href="https://portal.esut.edu.ng/index.aspx">
                      Verify Your Registration Number
                    </a>
                  </span>
                </h5>

                <small>
                  Forgot Password?
                  <span>
                    <a href="https://portal.esut.edu.ng/ForgotPassword.aspx">
                      Click here
                    </a>
                  </span>
                </small>
              </div>
            </div>
          </form>
        </div>
      </section>
    </section>
  );
}

export default Login;
