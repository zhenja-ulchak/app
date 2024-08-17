import React, { useState } from 'react';
// import { GetLogin } from '../api/ApiProvaider';
import { useNavigate } from "react-router-dom";


const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const respons = 'lsw'
      if(respons){
     
          navigate("/");

      }
      alert('Registration successful!');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
