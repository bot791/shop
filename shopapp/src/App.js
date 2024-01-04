import Header from "./components/Header";
import Footer from "./components/Footer";
import Homescreen from "./screens/Homescreen";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Productscreen from "./screens/Productscreen";
import Cartscreen from "./screens/Cartscreen";

function App() {
  return (
    <div className=" relative">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Homescreen />}></Route>
          <Route path="/product/:id" element={<Productscreen />}></Route>
          <Route path="/cart/:id?" element={<Cartscreen />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
