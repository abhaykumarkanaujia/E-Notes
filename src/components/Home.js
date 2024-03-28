import React, { useEffect } from 'react';
// import CreateNote from './CreateNote';
import Notes from './Notes';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if(!localStorage.getItem('token')){
      navigate('/login');
    }
  }, [navigate])
  
  return (
    <>
      {/* <CreateNote/> */}
      <Notes/>
    </>
  )
}

export default Home;