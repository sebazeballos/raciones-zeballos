import React from "react";
import Navbar from "./Components/Navbar/Navbar"
import ItemListConteiner from "./Components/ItemListConteiner"


const App = () => {

  const mensaje = "Tercer y segunda entrega"

  return (
    <>
      <Navbar />
      <ItemListConteiner
      greeting={mensaje}/>
    </>
  )
}

export default App