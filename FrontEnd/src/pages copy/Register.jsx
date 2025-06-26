import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [data, setData] = useState({
    name: '',
    email: '',
    pass: ''
  });

  const Display = (e) => {
    e.preventDefault(); // Form reload se bachaata hai
    setData({
      name: name,
      email: email,
      pass: password
    });
    navigator('/login')
  };

  return (
    <div>
      <h1>Registration</h1>
      <form action='/login'>
        <input
          type="text"
          name="name"
          id="name"
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Name"
        />
        <input
          type="email"
          name="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Email"
        />
        <input
          type="password"
          name="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Password"
        />
        <input onClick={Display} type="submit" value="Submit" />
      </form>

      <h3>Submitted Data:</h3>
      <p>Name: {data.name}</p>
      <p>Email: {data.email}</p>
      <p>Password: {data.pass}</p>
    </div>
  );
}

export default Register;
