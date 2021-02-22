import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import './LoginModal.css';

function LoginForm() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };

  return (
    <div className="modal-form">
      <h1 className="form-header">Please sign in</h1>
      <div className="form-wrapper">
        <form onSubmit={handleSubmit}>
          <ul>
            {errors.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))}
          </ul>
          <input
            className="form-input"
            type="text"
            value={credential}
            onChange={(e) => setCredential(e.target.value)}
            placeholder="Email"
            required
          />
          <input
            className="form-input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <button className="red-button" type="submit">Sign In</button>
        </form>
      </div>
      <p className="form-footer">
        New to OpenEats?
        <a>Create an account</a>
      </p>
    </div>
  );
}

export default LoginForm;