import React, { useState } from 'react';

function login() {
 
  return (
    <div>
      <h1>Login</h1>

      <form action='/login'>
      
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter Email"
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter Password"
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default login;
