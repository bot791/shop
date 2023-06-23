import Header from "./components/Header";
import Footer from "./components/Footer";
import Homescreen from "./screens/Homescreen";
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'

function App() {
  return (
    <div className="h-screen ">
      <Router>
      <Header/>
      <Routes>
    <Route exact path='/' element={<Homescreen/>}></Route>
    </Routes>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
