import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard"

import { Routes, Route } from "react-router-dom"

import './App.css';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/dashboard" element={[<Dashboard />]} />
        <Route path="/" element={[<Home />]} />
      </Routes>
    </div>
  );
}

export default App;
