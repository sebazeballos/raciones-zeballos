import React from 'react'
import { Item } from './Item'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

const ItemList = ({listProducts}) => {
  console.log(listProducts)
  return(
    <>
    <ImageList sx={{ width: 1000, height: 350 }} >
      {listProducts.map((prod, i) => <Item key={`${prod.product} - ${i}`} product={prod}/>)}
    </ImageList>
    
    </>
  )
}
export{ItemList}

/*import React, { useEffect } from 'react'
import { products } from '../../../assets/productos'
import { customFetch } from '../../../utils/customFetch'
import { ItemCount } from  '../ItemCount'
import { useState } from 'react'
import { Typography} from '@mui/material'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

const ItemListContainer = ({categoria}) => {
  const [listProducts, setListProducts] = useState([])

  useEffect(() => {
    customFetch(products)
    .then(res => setListProducts(res))
  },[])
  console.log(listProducts);
  
  return (
    <>
    <ImageList sx={{ width: 1000, height: 350 }} >
      {listProducts.map((item) => (
        <ImageListItem key={item.id}>
          <img
            src={`${item.img}?w=161&fit=crop&auto=format`}
            srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
            alt={"producto"}
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

export default ItemListContainer*/