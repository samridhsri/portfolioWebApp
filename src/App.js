import 'primeicons/primeicons.css';
import Navbar from "./components/navbar";
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          
          <Route path="/" element={<Home />} />
       </Routes>


  </BrowserRouter>
    </div>
  );
}

export default App;
