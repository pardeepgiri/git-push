import '../App.css'
import React from 'react'

function Productlist({product,addtocart}) {
  return (
    <div className='flex product-image'>
        {
            product.map((productitem,productIndex)=>{
                return(
                    <div >
                       <div>
                        <img src={productitem.url} className="img"></img>
                        <p>{productitem.name}</p>
                        <p>{productitem.seller}</p>
                        <p>RS.{productitem.price}/-</p>
                        <button onClick={()=>addtocart(productitem)}>Add to Cart</button>
                       </div>
                
                    </div>

                )
            })
        }
    </div>
  )
}

export default Productlist;