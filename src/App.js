import "./App.css";
import Menu from "./Components/Navbar/Menu";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Footer from "./Pages/Shared/Footer";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Menu></Menu>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;
