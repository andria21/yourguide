<<<<<<< HEAD
import React from 'react';
=======
import React, { useEffect} from 'react';
>>>>>>> 5a2e7914dc77f576d1507b077035104f240e1285
import './App.css';
import {Routes , Route } from 'react-router-dom'
import { Home } from './components/routes/home/home.component';
import SignInForm from './components/sign-in/sign-in.component';
// import { addCollectionAndDocuments } from './utils/firebase.utils';

// import TOUR_DATA from './shop-data';

function App() {

  //  useEffect(() => {
  // }, [])
  return (
    <Routes>
       
       <Route path="/" element={<Home/>}/>
       <Route path='sign-in' element={<SignInForm />} />

         
    </Routes>
    
  );
}

export default App;
