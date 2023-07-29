import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Components/Home.jsx";
import AboutUs from "./Pages/Aboutus/AboutUs.jsx";
import Categories from "./Pages/Categories/Categories.jsx";
// import Categories from "./pages/Categories/Categories.jsx";

import Navbar from "./Components/Navbar/Navbar.jsx"
import Footer from "./Components/Footer/Footer.jsx"

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Aboutus" element={<AboutUs />} />
          <Route exact path="/Categories" element={<Categories />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
