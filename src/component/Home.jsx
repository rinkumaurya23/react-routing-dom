import React from 'react'
import { Link} from 'react-router-dom'

function Home() {

  return (
    <div >
      <h1>Home Component !!</h1>
      <p>This is a home page our awesome APP</p>
      <p>And we are learning About Router</p>
      <Link to="About">GO to About Page </Link>
  

  
    </div>
  )
}

export default Home
