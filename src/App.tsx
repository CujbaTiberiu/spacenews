import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Homepage from './components/Homepage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ArticleDetail from './components/ArticleCard';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Homepage/>}/> 
      <Route path='/details/:id' element={<ArticleDetail/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
