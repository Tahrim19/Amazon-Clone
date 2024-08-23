import React, { useEffect, useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Login from "./components/Login";
import { auth } from './Firebase'; 
import { StateContext } from './components/StateProvider';
import Checkout from "./components/Checkout";

export default function App() {
  const [{}, dispatch] = useContext(StateContext);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
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

    return () => unsubscribe(); // Cleanup on unmount
  }, [dispatch]);

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<> <Header /><Home /> </>} />
          <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={<> <Header /><Checkout /> </>} /> 
        </Routes>
      </Router>
    </div>
  );
}
