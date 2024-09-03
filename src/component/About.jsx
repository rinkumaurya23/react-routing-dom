import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div>
      <h1>About Component</h1>
      <p>This is a home page our awesome APP</p>
      <p>AndLink we are learning About Router</p>
      <Link to ='/'>got to Home Page </Link>

        <li><Link to="/user/rinku" state={{name:'rinku maurya',age:23}}>Rinku</Link></li>
        <li><Link to="/user/peter">Peter</Link></li>
        <li><Link to="/user/shashi">shashi</Link></li>
        <li><Link to="/user/adk"> adk</Link></li>
       
   
    </div>
  )
}

export default About;
