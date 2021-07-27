import axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import logo from "./img/deliveroo-logo.png";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import MainContent from "./components/MainContent";
library.add(faStar);

function App() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://back-deliveroo.herokuapp.com/"
        );
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <p>Chargement de la page</p>
  ) : (
    <div className="App">
      <div className="wrapper">
        <div className="containerHeader">
          <Header logo={logo} />
          <Hero restaurant={data.restaurant} />
        </div>
        <MainContent categories={data.categories} />
      </div>
    </div>
  );
}

export default App;
