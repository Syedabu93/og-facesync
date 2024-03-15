import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import Banner from "./components/banner";
import Matrices from "./components/matrices";
import Footer from "./components/footer";
import Works from "./components/how it works";
import { Routes, Route } from "react-router-dom";
import Treasures from "./components/treasures";
import Events from "./components/events";
import Features from "./components/features";
import Contact from "./components/contact";
import Topnav from "./components/topnav";
import Blog from "./components/blog";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Topnav/>
      <Navbar />

      <Routes>
        <Route
          path="/"
          exact
          element={
            <div>
              {" "}
              <Banner />
              <Matrices />
              <Events />
              <Works />
              <Features />{" "}
            </div>
          }
        ></Route>
      
        <Route path="/Features" element={<Features />}></Route>
        <Route path="/Contact" element={<Contact/>}></Route>
        <Route path="/Works" element={<Works />}></Route>
        <Route path="/blog" element={< Blog/>}></Route>
        <Route path="/About" element={<About/>}></Route>
      </Routes>
      <Treasures />
      <Footer />
    </div>
  );
}

export default App;
