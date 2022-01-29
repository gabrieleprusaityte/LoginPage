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
    const [getError, setError] = useState(null)
    const [getUserArr, setUserArr] = useState([])
    const [getPostArr, setPostArr] = useState([])
    const [getUser, setUser] = useState("")
    const [getButton, setButton] = useState(0)
    const [getInput, setInput] = useState(0)
    const [getComment, setComment] = useState("")
    const [getSend, setSend] = useState(0)
    const [getCommentArr, setCommentArr] = useState([])
    const [getCommentBox, setCommentBox] = useState(0)

  return (
    <div className="App">

      <mainContext.Provider value={{getPage, setPage, getError, setError, getUserArr, setUserArr, getPostArr, setPostArr, getUser, setUser, getButton, setButton, getInput, setInput, getComment, setComment, getCommentArr, setCommentArr, getCommentBox, setCommentBox, getSend, setSend}}>

        <BrowserRouter>
            <Toolbar user={getUser}/>
          <Routes>

            <Route path="/" element={<HomePage />}/>
              <Route path="/register" element={<RegistrationPage />}/>
              <Route path="/login" element={<LoginPage />}/>
              <Route path="/createPost" element={<CreatePostPage />}/>
              <Route path="/main" element={<MainPage user={getUser} />}/>

          </Routes>

        </BrowserRouter>

      </mainContext.Provider>

    </div>
  );
}

export default App;
