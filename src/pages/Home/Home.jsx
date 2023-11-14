
import { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar'
import './Home.css'
import axios from 'axios'


const Home = () => {
  const [products,setProducts]= useState([])
  const fetchProducts = async ()=>{
     const response = await axios.get("https://653142f74d4c2e3f333cc097.mockapi.io/product")
    setProducts (response.data)
  }


  useEffect(()=>{
     fetchProducts ()
  },[])
  console.log(products)
  return (
    <>
    <Navbar />
    <div className='card-container'>
       {
      products.map((product) =>{
        return(
          <div key={product.id} className ="product-card">
    <img src={product.productImage} alt="Product Image" />
    <div className="product-details">
        <h2 className="product-name">{product.productName}</h2>
        <p className ="product-description">{product.productDescription}</p>
       </div>
             </div>
   
    
        )
      })
    }
      
      </div>
    
</>
    
   
  )
}

export default Home