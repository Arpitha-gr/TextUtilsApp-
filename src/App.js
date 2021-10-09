// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('white');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },3000);
  }
  
  const removeBodyClasses = ()=>{
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-danger');
  }
  // whether dark mode is enabled or not
  const toggleMode = (cls)=>{
    removeBodyClasses();
    document.body.classList.add('bg-'+cls)
    if(mode==='white'){
      setMode('black');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark mode has been enabled", "success");
      document.title = "dark"
    }
    else{
      setMode('white')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = "light"
    }
  }
  return (
    // this is JSX which is a HTML file with JS
    // <> 
/* The above line is JSX fragment */
    // </>
   
   <> 
{/* <Router> */}
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
  <Alert alert={alert}/>
<div className="container my-3">
      {/* <Switch> */}
        {/* /users --> Component1 */}
        {/* /users/home --> Component2 */}
          {/* <Route exact path="/about"> */}
              {/* <About /> */}
          {/* </Route> */}
          {/* <Route exact path="/"> */}
              <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>
          {/* </Route> */}
      {/* </Switch> */}
</div>
      {/* </Router> */}
</>
);
}

export default App;
