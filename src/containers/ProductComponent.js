import React from 'react'
import { useSelector } from 'react-redux'
import "./productComponent.css"
import { Link } from 'react-router-dom'


const ProductComponent = () => {
    const products = useSelector((state) => state.allproducts.products )
    console.log(products,"after update the state")

    // const {id, title, image,price,category} = product

    // const renderList = products.map( (product) => {
    //     <div className='four column wide'>
    //         <div className="ui link cards">
    //             <div className="card">
    //                     <div className="image">
    //                         <img src={product.image} alt="" />
    //                     </div>
    //                 <div className="content">
                        
    //                     <div className="header">{product.title}</div>
    //                     <div className="meta price">$ {product.price}</div>
    //                     <div className="meta">{product.category}</div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // } )
    




  return (
    <>
        {products.map((product) => {
            return (
            <div className='four wide column '>
                <Link to={`/product/${product.id}`}>
                
                    <div className="ui link cards">
                        <div className="card">
                                <div className=" image-card">
                                    <img src={product.image} alt="" className='image-card' />
                                </div>
                            <div className="content">
                                
                                <div className="header">{product.title}</div>
                                <div className="price meta ">$ {product.price}</div>
                                <div className="meta">{product.category}</div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>)
        } )}
    </>
  )
}

export default ProductComponent
