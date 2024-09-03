import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
  const login=()=>{
    localStorage.setItem('login',true)
    navigate('/')
  }
  const navigate= useNavigate()
  
  useEffect(()=>{
    let login = localStorage.getItem('login')
    if(!login){
      navigate('/')
    }
   });
  return (
    <div>
      <h1>Login Page</h1>
      Name:-
      <input type='text' /> <br/><br/>
      Password:-
      <input type='text' /><br/><br/>
      <button onClick={login}>Login</button>
    </div>
  )
}

export default Login;
