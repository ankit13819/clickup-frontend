import React from "react";
import "./Login.css";
const Login = () => {
  return (
    <div className="login-page-new">
      <div className="login-page-new__main">
        <div className="login-page-new__main-bg "></div>
        <div className="login-page-new__main-container">
          <div className="login-page-new__main-form">
            <div className="login-page-new__main-form-title-brand">
              <h1 className="login-page-new__main-form-title">Welcome Back!</h1>
              <div className="login-page-new__main-form-router-outlet login-page-new__main-form-login">
                <form>
                  <div className="login-page-new__main-form-row">
                    <label className="login-page-new__main-form-row-label">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="Enter Your Email
                    "
                    />
                    <div className="login-page-new__main-form-row-icon">
                      <img src="https://app.clickup.com/map.44f9e6cba501ed75ba37f30439219108.svg" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
