import './App.css';
import mainContext from "./context/mainContext";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {useContext, useState} from "react";
import HomePage from "./pages/HomePage";
import RegistrationPage from "./pages/RegistrationPage";
import LoginPage from "./pages/LoginPage";
import CreatePostPage from "./pages/CreatePostPage";
import MainPage from "./pages/MainPage";
import Toolbar from "./components/Toolbar";

function App() {

    const [getPage, setPage] = useState("")
    const [getUser, setUser] = useState("Jonas")
    const [getError, setError] = useState(null)
    const [getUserArr, setUserArr] = useState([])
    const [getPostArr, setPostArr] = useState([])

  return (
    <div className="App">

      <mainContext.Provider value={{getPage, setPage, getUser, setUser, getError, setError, getUserArr, setUserArr, getPostArr, setPostArr}}>

        <BrowserRouter>
            <Toolbar />
          <Routes>

            <Route path="/" element={<HomePage />}/>
              <Route path="/register" element={<RegistrationPage />}/>
              <Route path="/login" element={<LoginPage />}/>
              <Route path="/createPost" element={<CreatePostPage />}/>
              <Route path="/main" element={<MainPage />}/>

          </Routes>

        </BrowserRouter>

      </mainContext.Provider>

    </div>
  );
}

export default App;
