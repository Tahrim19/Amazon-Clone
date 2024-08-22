import React, { useEffect , useContext} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Login from "./components/Login";
// import { auth } from './Firebase'
import firebase from './Firebase' 
import { StateContext } from './components/StateProvider';

export default function App() {
  const [{}, dispatch] = useContext(StateContext);
  useEffect(() => {
    firebase.auth.onAuthStateChanged((authUser) => { // Fixed function name
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

  }, [dispatch]);

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<> <Header /><Home /> </>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </Router>
    </div>
  );
}
