import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './components/Home';
import Details from './components/Details';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [showData, setShowData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    const getShowData = async () => {
      const response = await axios.get("https://api.tvmaze.com/search/shows?q=girls");
      setShowData(response.data);
      setLoading(true);
    }
    getShowData();
  }, []);
console.log("data received",showData);
if(!isLoading){
  return <h2>Loading...</h2>;
}
  return (
    <div className="App">
      <BrowserRouter>
        
        <Routes>
          <Route path="/" element={<Home showData={showData} />}></Route>
          <Route path="/details/:name" element={<Details showData={showData} />}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
