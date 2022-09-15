import React from 'react'
import { ItemCount } from '../../ItemCount';
import { useState } from 'react'
import { Typography} from '@mui/material'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

const Item = ({ product }) => {
    console.log(product)
    return(
        <>
        <ImageListItem key={product.id}>
          <img
            src={`${product.img}?w=161&fit=crop&auto=format`}
            srcSet={`${product.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
            alt={"producto"}
          />
          <Typography variant="overline" size="15" display="block" gutterBottom>
            ${product.price}
          </Typography>
          <ItemCount initial={1} stock={product.stock} onAdd={() => {}}/>
        </ImageListItem>
        </>
    )
}
export {Item}