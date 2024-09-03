import React from 'react';
import './App.css'
import Home from './component/Home'

import Navbar from './component/Navbar';



import { BrowserRouter, Route, Routes,Navigate} from 'react-router-dom';
import User from './component/User';
import Services from './component/Services';
import Contact from './component/Contact';
import Filter from './component/Filter';
import Channel from './component/Channel';
import About from './component/About';
import Procted from './component/Procted';


import Other from './component/other';
import Login from './component/Login';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
     <Navbar/>
      <Routes>
      <Route path='/'element={<Procted Component={Home}/>}/>
      <Route path='/services'element={<Services/>}/>
      
      <Route path='/filter'element={<Procted Component={Filter}/>}/>


      <Route path='/user/:name'element={<User/>}/>
      <Route path='/*'element={<Navigate to="/"/>}/>
      <Route path='/contact'element={<Procted Component={Contact}/>}/>
      <Route path='/about'element={<About/>}/>
      <Route path='/channel'element={<Channel/>}/>
      <Route path='/other'element={<Procted Component={Other}/>}/> 
      <Route path='/login'element={<Login/>}/> 

      
     </Routes>
      </BrowserRouter>
 
     
    </div>
  )
}

export default App;
