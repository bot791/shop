import Header from "./components/Header";
import Footer from "./components/Footer";
import Homescreen from "./screens/Homescreen";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Productscreen from "./screens/Productscreen";
import Cartscreen from "./screens/Cartscreen";
import Loginscreen from "./screens/Loginscreen";
import Registerscreen from "./screens/Registerscreen";

function App() {
  return (
    <div className=" relative">
      <Router>
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Header />
        <Routes>
          <Route path="/login" element={<Loginscreen />}></Route>
          <Route path="/register" element={<Registerscreen />}></Route>
          <Route path="/product/:id" element={<Productscreen />}></Route>
          <Route path="/cart/:id?" element={<Cartscreen />}></Route>
          <Route exact path="/" element={<Homescreen />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
