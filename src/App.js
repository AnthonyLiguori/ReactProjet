import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Navbar from "./components/nav/navbar";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
function App() {
  useEffect(() => {console.log("charger")},[])
  return (
    <div className="App">
      <Navbar />
      <Routes>
        {" "}
        <Route
          path="/"
          element={
            // Utiliser motion.div comme conteneur d'animation pour chaque route

            <Home />
          }
        />
        <Route
          path="/contact"
          element={
            // Utiliser motion.div comme conteneur d'animation pour chaque route

            <Contact />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
