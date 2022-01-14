import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import AllPosts from "./components/AllPosts.js";
import OnePost from "./components/OnePost.js";
import Navbar from "./components/Navbar.js";
import Home from "./components/Home.js";
import AllProjects from "./components/AllProjects.js";




function App() {
  return (
    //no idea what <> does.... but needed apparently
  <> 
  
    <HashRouter>
    <Navbar
    ></Navbar>
      <Routes>
        <Route path="/" exact element={<Home />}/>
        <Route  path="/blog" exact element={<AllPosts />}/>
        <Route  path="/blog/:slug" element={<OnePost />}/>
        <Route  path="/projects" exact element={<AllProjects />}/>
        <Route  path="/projects/:slug" element={<OnePost />}/>
      </Routes>
    </HashRouter>
  </>
  );
}
export default App;


