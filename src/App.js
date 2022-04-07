import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./context/notes/NoteState";
import Alert from "./components/Alert";
import Login from "./components/Login";
import Signup from "./components/Signup";
import {useState} from "react"

function App() {
  const [alert,setalert] =useState(null);
  const showalert =(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(
      ()=>{
        setalert(null);
      },1600
    );
  }
  return (
    <>
      <NoteState>
        <Router>
          <NavBar />
          <Alert alert={alert}/>
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home showalert={showalert}/>} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/login" element={<Login showalert={showalert}/>} />
              <Route exact path="/signup" element={<Signup showalert={showalert}/>} />
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
