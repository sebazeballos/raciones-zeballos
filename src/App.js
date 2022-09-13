import React from "react";
import Navbar from "./Components/Navbar/Navbar"
import ItemListConteiner from "./Components/ItemListConteiner"
//import  ChakraProvider  from '@chakra-ui/react';



const App = () => {

  const mensaje = "Cuarta Entrega"

  return (
    
    <>
      <Navbar />
      
      <ItemListConteiner
      greeting={mensaje}/>
      
   
    </>
  )
}

export default App