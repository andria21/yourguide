import './App.css';
import {Routes , Route } from 'react-router-dom'
import { Home } from './components/routes/home/home.component';
import SignInForm from './components/sign-in/sign-in.component';



function App() {
  return (
    <Routes>
       
       <Route path="/" element={<Home/>}/>
       <Route path='sign-in' element={<SignInForm />} />
         
    </Routes>
    
  );
}

export default App;
