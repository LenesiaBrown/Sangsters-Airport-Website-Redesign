import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Arrivals from "./pages/Arrivals";


export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/arrivals" element={<Arrivals />} />
        {/* Add more routes as needed */}
      </Routes>
      <Footer />
    </Router>
  );
}















