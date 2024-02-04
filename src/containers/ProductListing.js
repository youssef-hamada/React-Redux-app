import { useEffect } from 'react'
import React from 'react'
import ProductComponent from './ProductComponent'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import {setProducts} from '../redux/actions/productActions'

const ProductListing = () => {

    const products = useSelector( (state) => state )

    const dispatch = useDispatch()



    const fetchProducts = async () => {
        const res = await axios
        .get("https://fakestoreapi.com/products")
        .catch((err) => {
            console.log("Error", err)
        })
        dispatch(setProducts(res.data))
        
    }


    useEffect( () => {
        fetchProducts()
    },[] )

    // console.log("products: ",products)
    
  return (
    <div className='ui grid container'>
      <ProductComponent/>
    </div>
  )
}

export default ProductListing
