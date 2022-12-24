import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './Pages/Home'
import ContentContronl from './ContentControl'
import { Route, Routes } from 'react-router-dom';
import Error from './Pages/Error';
import MyAds from './Pages/MyAds';
import Chats from './Pages/Chats';
import Sell from './Pages/Sell';
import Item from './Pages/Item';

function App() {
  const [showScrlUp, setScrlUp] = useState(false)
  const [clkdLogin, setClkdLogin] = useState(false)
  const [mobMenuAct, setmobMenuAct] = useState(false)
  const [pageName, setpageName] = useState('')
  function listenScrollEvent() {
    if (window.scrollY >= 300) {
      setScrlUp(true)
    } else {
      setScrlUp(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent)
  }, [])
  return (
    <div>
      <ContentContronl.Provider value={{ showScrlUp: showScrlUp, clkdLogin: clkdLogin, setClkdLogin: setClkdLogin, mobMenuAct: mobMenuAct, setmobMenuAct: setmobMenuAct, pageName: pageName, setpageName: setpageName }}>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/myads' element={<MyAds />} />
          <Route path='/chats' element={<Chats/>} />
          <Route path='/post/attributes' element={<Sell/>} />
          <Route path='/item' element={<Item/>} />
          <Route path='*' element={<Error />} />
        </Routes>
      </ContentContronl.Provider>
    </div>
  );
}

export default App;
