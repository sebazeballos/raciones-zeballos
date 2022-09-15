//import { HStack,Button,Text } from "@chakra-ui/react";
import React from "react";
import {useState} from 'react'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup'
import Typography from '@mui/material/Typography';

const ItemCount = ({initial, stock, onAdd}) => {

    const [count, setCount] = useState(initial)

    const  increse = () => count < stock && setCount(count + 1)
    const  decrese = () => count > initial && setCount(count - 1)

    return(
        //<HStack>
        <>
            <ButtonGroup size="small" aria-label="small button group">
                {   <>
                        <Button variant="outlined"onClick={decrese}>-</Button>
                        <Typography variant="overline" size="15" display="block" gutterBottom>
                            {count}
                        </Typography>
                        <Button variant="outlined"onClick={increse}>+</Button>
                        <Button variant="outlined">Agregar al carrito</Button> 
                    </>
                }
            </ButtonGroup>
            </>
       // </HStack>
        
    )
}
export{ ItemCount }