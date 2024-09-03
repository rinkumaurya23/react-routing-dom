import React from 'react'
import { useParams,useLocation} from 'react-router-dom';

function User() {
  const location= useLocation();
  console.log(location)

    const params = useParams()
    const {name}=params;
    
  return (
    <div>
      <h1>This is {name}'s Page</h1>
    </div>
  )
}

export default User;
