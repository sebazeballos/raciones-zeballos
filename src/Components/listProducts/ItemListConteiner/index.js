import React, { useEffect } from 'react'
import { products } from '../../../assets/productos'
import { customFetch } from '../../../utils/customFetch'
import { ItemCount } from  '../ItemCount'
import { useState } from 'react'
import { Typography, ImageList, ImageListItem} from '@mui/material'

const ItemListContainer = ({categoria}) => {
  const [listProducts, setListProducts] = useState([])

  useEffect(() => {
    customFetch(products)
    .then(res => setListProducts(res))
  })
  
  return (
    <>
    <ImageList sx={{ width: 1000, height: 350 }} >
      {listProducts.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=161&fit=crop&auto=format`}
            srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
          />
          <Typography variant="overline" size="15" display="block" gutterBottom>
            ${item.price}
          </Typography>
          <ItemCount initial={1} stock={item.stock} onAdd={() => {}}/>
        </ImageListItem>
      ))}
    </ImageList>
    
    </>
    
  )
}

export default ItemListContainer