
import React, {  useState } from "react";


import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [userType, setUserType] = useState("user");
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();


  const handleLogin = () => {
    // the fetch request will return only users that match all three parameters,
    //  and the matchingUsers variable will be an array of users that match. The 
    //  if statement will check if there are any matching users, and if so, log in the
    //   first matching user. If there are no matching users, the else statement will 
    //   trigger the "Invalid login details" alert



          window.location.href = "./userDetails";


    fetch(`http://localhost:8978/${userType}s?email=${email}&password=${password}`)
      .then(response => response.json())
      .then(data => {
        const matchingUsers = data?.filter(user => user.email === email && user.password === password );
        if (matchingUsers.length > 0) {
          setLoggedIn(true);
          if (userType === "user") {
            navigate("/user", { state: { email } });
          } else if (userType === "admin") {
            navigate("/admin", { state: { email } });
          }
        } else {
          alert("Invalid login details");

        }
      })
      .catch(error => {
        console.error(error);
        alert("An error occurred while logging in");
      });
  };
  
  

  const handleSubmit = (event) => {
    event.preventDefault();
    handleLogin();
  };


  return (
    <div className="auth-wrapper container">
      <div className="auth-inner">
        <form onSubmit={handleSubmit}>
          <h3>Sign In</h3>

          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label style={{ marginRight: "10px" }}>
              Login As:
              <select
                value={userType}
                onChange={(e) => setUserType(e.target.value)}
                style={{ marginLeft: "5px" }}
              >
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
            </label>
          </div>
          <div className="mb-3">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />

              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="forgot-password text-right">
            <a href="/sign-up">Sign Up</a>
          </p>
        </form>
      </div>
    </div>
  );
}