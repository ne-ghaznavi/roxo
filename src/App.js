import React from "react";
import { Routes, Route } from "react-router-dom";

// pages
import Register from "./pages/Register";

// components
import { Header } from "./components";


function App() {
  return (
    <div className="App font-IRANSansWeb">
      <Header/>
      <Routes>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </div>
  );
}

export default App;
