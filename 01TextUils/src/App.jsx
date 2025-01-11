import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import Textform from './components/Textform';
import  About  from "./components/About";
import { BrowserRouter } from "react-router";

function App() {
  const [Mode, setMode] = useState('light'); // Dark mode state
  const [alert, setAlert] = useState({ msg: '', type: '' }); // Default alert state

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => setAlert({ msg: '', type: '' }), 2000); // Hide alert after 2 sec
  };

  const toggleMode = () => {
    if (Mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'gray';
      showAlert('Dark mode has been enabled', 'success');
      document.title = 'TextUils - Dark Mode';

    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'success');
      document.title = 'TextUils - Light Mode';
    }
  };

  return (
    <>
      <Navbar title="TextUtils" aboutText="About us" mode={Mode} toggleMode={toggleMode} />
      {alert.msg && <Alert alert={alert} />}
      <div className="container my-3">
        {/* <Textform heading="Enter the text to analyze below" mode={Mode} showAlert={showAlert} /> */}
        <About/>
      </div>
    </>
  );
}

export default App;
