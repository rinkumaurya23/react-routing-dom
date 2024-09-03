import React from 'react'
import { Link,Outlet } from 'react-router-dom';

function Contact() {
  return (
    <div>
      <h1> Contact component</h1>
      <Link to ="channel">channel</Link> <br/>
      <br/>
      <Link to ="about">About</Link>
      <br/><br/>
      <Link to ="other">other</Link>
      <Outlet/>

    </div>
  )
}

export default Contact;
