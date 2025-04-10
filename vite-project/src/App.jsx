import { useState } from 'react';
import Navbar from "./Navbar"; 
import Alert from './Alert';
import Textform from './Textform';
import About from './About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'gray';
      document.body.style.color = 'white';
      showAlert('Success! Dark mode has been Enabled', 'success');
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert('Success! Light mode has been Enabled', 'success');
    }
  };

  return (
    <Router>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <div className='container'>
        <Alert alert={alert} />
        <Routes>
          <Route
            path="/"
            element={<Textform showAlert={showAlert} heading="Enter the text below to analyze" mode={mode} />}
          />
          <Route
            path="/about"
            element={<About />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
