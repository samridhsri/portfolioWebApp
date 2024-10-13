import 'primeicons/primeicons.css';
import Navbar from "./components/navbar";
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';

function App() {
  return (
    <div className="App">
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      <BrowserRouter>
      <Routes>
          
          <Route path="/" element={<Home />} />
       </Routes>


  </BrowserRouter>
    </div>
  );
}

export default App;
