import { useState } from 'react';
import './App.css';
import MainNav from './Components/MainNav';
import MainNavbar from './Components/MainNavbar';
import Navbar from './Components/Navbar';
// import { LoginContext } from './Contexts/LoginContext';

function App() {

  // const [showForm, setShowForm] = useState(false);
  // const [increase, setIncrease] = useState(0);

  return (
   <div className='mainbody'>
   <Navbar />
   <MainNav />
   {/* <LoginContext.Provider value={{showForm,increase,setIncrease,setShowForm}}>
   <Navbar /> */}
   {/* <MainNavbar /> */}
   {/* <MainNav />
      {setShowForm?showForm:!showForm}
   </LoginContext.Provider> */}
   </div>
  );
}

export default App;
