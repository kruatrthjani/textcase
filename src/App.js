import './App.css';
import react,{useState} from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/Textform';
import About from './components/About';
import Alert from'./components/Alert';
import {BrowserRouter as Router,
Routes,
Route,
Link
} from "react-router-dom";


function App() {
  const [mode,setMode]=useState('light');
  const [alert,setalert]=useState(null);
  const [navth,setNavth]=useState('light');

  const showAlert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setalert(null);
    },2000);
  }
  const removeBodyClasses=()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-info')
    document.body.classList.remove('bg-warning')
  }
  function setTheme(cls){
    removeBodyClasses();
    document.body.classList.add('bg-'+cls);

  /*  if(navth==='light'){
      setNavth('dark');      
      showAlert("dark Mode is been enabled","success");
      document.title="Dark Mode";
    }
    
    if(navth==='dark'){
      setNavth('light');
      showAlert("light Mode is been enabled","success");
      document.title="Light Mode"
      */

  }
  function setN(){
    if(navth==='light'){
      setNavth('dark');      
      showAlert("dark Mode is been enabled","success");
      document.title="Dark Mode";
    }
    
    if(navth==='dark'){
      setNavth('light');
      showAlert("light Mode is been enabled","success");
      document.title="Light Mode"
  }
}
  return (
    <>
    <Router>
    <Navbar title="TextUtils" about="About" changetheme={setTheme} values={mode}  naval={setN} navs={navth}/>
    <Alert alert={alert}/>
  <div className="container">    
  <Routes>
    
    <Route exact path="/about" element={<About values={mode}/>} />          
    <Route excat path="/" element={<TextForm heading="Enter text to handle" values={mode}  show={showAlert}/>}/>      
    </Routes>            
  
  </div>
  </Router>

</>
  );
}

export default App;
