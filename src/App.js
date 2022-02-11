import { useState } from 'react';
import './App.css';
// import About from './componenets/About';
import Navbar from './componenets/Navbar';
import TextForm from './componenets/TextForm';

function App() {
  const [mode, setMode] = useState('light')

  const toggleMode = () =>{
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor='#042743';
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white';
    }
  }
  return (
    <>
      <Navbar title="TextUtils" mode = {mode} toggleMode = {toggleMode}/>
      <div className="container my-3">
        <TextForm heading = "Enter the text below to analyze" mode = {mode}/>
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
