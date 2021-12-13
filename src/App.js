import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import { useState } from 'react';
import Alert from './Components/Alert';
import About from './Components/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() =>{
      setAlert(null)
    },3000)
  }


  const [navDark, setnavDark] = useState("light");

  const toggleDark = () => {
    if (navDark === "dark") {
      setnavDark("light")
      showAlert("Light Mode has been Enabled", "success")
      document.title = "Light Mode"
    } else {
      setnavDark("dark")
      showAlert("Dark Mode has been Enabled", "success")
      document.title = "Dark Mode"
    }
  }

  const [darkMode, setDarkMode] = useState({
    backgroundColor: 'white'
  })

  const [btnText, setbtnText] = useState("Dark Mode");

  const darkModee = () => {
    if (darkMode.backgroundColor === 'white') {
      setDarkMode({
        backgroundColor: 'black',
        color: 'white'
      })
      setbtnText("Light Mode");
      showAlert("Dark Mode has been Enabled", "success")
    }
    else {
      setDarkMode({
        backgroundColor: 'white'
      })
      setbtnText("dark Mode")
      showAlert("Light Mode has been Enabled", "success")
    }
  }
  return (
    <>
    <Router>
      <div className="main" style={darkMode}>
        <Navbar title={"The Text Transformer"} mode={navDark} toggledark={toggleDark} />
        <button type="button" class="btn btn-dark m-2" onClick={darkModee}>{btnText}</button>
        <Alert alert={alert} />
        <Routes>
        <Route path="about" element={<About/>} />
        <Route path="/" element={<TextForm showAlert={showAlert} heading={"Enter the Text to Analyze"} />} />
        
        </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
