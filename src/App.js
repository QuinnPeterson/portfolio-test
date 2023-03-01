import React, { useState, useEffect, Component } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Resume from "./components/ResumeNew";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useLocation } from "react-router-dom";

function Pre(props) {
  return <div id={props.load ? "preloader" : "preloader-none"}></div>;
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const [load, upadateLoad] = useState(true);
 

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Pre load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/" exact element={<Home />} />
          <Route path="/resume" exact element={<Resume />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
