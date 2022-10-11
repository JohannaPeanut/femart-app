import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import WorkList from "./pages/WorkList";
import WorkView from "./pages/WorkView";

const App = () => {
  return (
    <div>
          <Header />
          <div className="container">
            <main className="main">
              
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<WorkList />} />
                   
                  <Route path="/workview/:id" element={<WorkView />} />
                
                  </Routes>
              </BrowserRouter>
            </main>
          </div>
     
    </div>
  )
}

export default App