import React from "react";
import Navbar from "./Components/Navbar/Navbar"
import ItemListContainer from "./Components/listProducts/ItemListConteiner";
//import  ChakraProvider  from '@chakra-ui/react';



const App = () => {

  const mensaje = "Adulto"

  return (
    
    <>
      <Navbar />
      
      <ItemListContainer
      categoria={mensaje}/>
      
   
    </>
  )
}

export default App