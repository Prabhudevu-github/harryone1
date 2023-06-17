
import './App.css';
import Navbar from './components/Navbar';
 import TextArea from './components/TextArea';
import { useState } from 'react';
 //import Theme from './components/Theme';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";



function App() {
  const [mode, setMode]= useState("light");
  const [alert, setAlert] = useState(null);
  const [pallete, setPallete] = useState(null);

  const settingAlert = (message,type) =>{
    setAlert({
      msg:message,
      type:type
    })
   setTimeout(() => {
    setAlert(null)
   }, 2000);
  }

const toggleMode= () =>{
  if(mode==="light"){
    setMode('dark');
    // setPallete(null);
    document.title="textutils dark"
    setTimeout(() => {
      document.title="Text Utils"
    },2000);
    document.body.style.background = '#0c0c35'
    settingAlert("Dark mode is enabled","success");
  }
  else{
    setMode("light")
    setPallete(null); 
    document.body.style.background = 'white'
    settingAlert("Light mode is enabled","success");
  }
}

const makeRed = () =>{
  document.body.style.background = 'red'
  setPallete('red');
  setMode(null);
  console.log(pallete);
  settingAlert("Red Pallete is enabled","success");
}

const makeGreen =() =>{
  document.body.style.background = 'green'
  setMode(null);
  setPallete('green');
  settingAlert("Green Pallete is enabled","success");
}

  return (
    <>
    {/* <Router>
     
      <div className="container my-3">
     <Routes>
          <Route exact path="/theme" element={<Theme mode={mode}/>}/> 
          <Route exact path="/" element={}>
          </Route>
      </Routes>
       
      </div>
      </Router> */}
      <Navbar  mode={mode} toggleMode={toggleMode} makeGreen={makeGreen} makeRed={makeRed}/>
      <Alert alert={alert} />
      <TextArea title="summary " mode={mode} settingAlert={settingAlert} pallete={pallete} makeGreen={makeGreen} makeRed={makeRed}/>
     
    </>
  );
}

export default App;
