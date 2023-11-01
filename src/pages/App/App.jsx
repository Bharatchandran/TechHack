import { useEffect, useState } from "react";
import { supabase } from "../../../supabaseAuth/supabaseClient";
import NavBar from "../../components/NavBar/NavBar";
import Header from "../../components/Header/Header";
import Container from "../../components/Container/Container";
import "./App.css"
function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getCountries();
  }, []);

  async function getCountries() {
    const { data } = await supabase.from("countries").select();
    setCountries(data);
  }

  return (
    <div className="app">
      <NavBar />
      <Header />
      <div style={{display:"flex", margin:"20px", justifyContent:"space-around"}}>

      <Container />
      <Container />
      </div>
    <ul>
      {countries.map((country) => (
        <li key={country.name}>{country.name}</li>
      ))}
    </ul>
    </div>
  );
}

export default App;