import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CategoryDetails from './Pages/CategoryDetails';
import ProductDetails from './Pages/ProductDetails';

function App() {
  return (
    <div className="">
      {/* <h1 className="text-primary">Hello World</h1> */}
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route path="/categorydetails/:id" element={<CategoryDetails />} />
          <Route path="/productdetails/:id" element={<ProductDetails />} />
        </Routes>
      </Router>

      {/* <Home /> */}
    </div>
  );
}

export default App;
