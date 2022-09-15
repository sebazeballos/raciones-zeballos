import React, { useEffect } from 'react'
import { products } from '../../assets/productos'
import { customFetch } from '../../utils/customFetch'
import { useState } from 'react'
import { ItemList } from './ItemListConteiner'
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
        <ItemList listProducts={listProducts} /> 
    </>
    
  )
}

export default ItemListContainer