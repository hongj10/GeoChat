import './App.css';
import React from 'react';
import Header from './componets/header/header';
import MapContext from './componets/map/mapcontext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useContext } from 'react';
const App = () => {
  const { map } = useContext(MapContext);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}></Route>
        </Routes>
        <Routes>
          <Route path="/" element={<div id="map" style={{ width: '100%', height: '800px' }}></div>}></Route>
        </Routes>
      </BrowserRouter>      
    </>
  );
}

export default App;

