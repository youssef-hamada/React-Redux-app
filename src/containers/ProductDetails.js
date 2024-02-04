import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {

    const products = useSelector((state) => state )
    const data = products.allproducts.products
    console.log("data:",data)

    const {productId} = useParams()
    // console.log(productId)

    const Selected_product = data.filter((product) => {
        return product.id == productId 
         
    } )

    console.log(Selected_product[0])
  return (
    <div className='four wide column '>
    
    
        <div className="ui link cards">
            <div className="card">
                    <div className=" image-card">
                        <img src={Selected_product[0].image} alt="" className='image-card' />
                    </div>
                <div className="content">
                    
                    <div className="header">{Selected_product[0].title}</div>
                    <div className="price meta ">$ {Selected_product[0].price}</div>
                    <div className="meta">{Selected_product[0].category}</div>
                </div>
            </div>
        </div>
    
    </div>
  )
}

export default ProductDetails
