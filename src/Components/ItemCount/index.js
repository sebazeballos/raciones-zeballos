//import { HStack,Button,Text } from "@chakra-ui/react";
import React from "react";
import {useState} from 'react'
import Button from '@mui/material/Button';

const ItemCount = ({initial, stock, onAdd}) => {

    const [count, setCount] = useState(initial)

    const  increse = () => count < stock && setCount(count + 1)
    const  decrese = () => count > initial && setCount(count - 1)

    return(
        //<HStack>
        <>
            <Button variant="outlined"onClick={decrese}>-</Button>
            <h1>{count}</h1>
            <Button variant="outlined"onClick={increse}>+</Button>
            <Button variant="outlined">Agregar al carrito</Button> 
            </>
       // </HStack>
        
    )
}
export{ ItemCount }