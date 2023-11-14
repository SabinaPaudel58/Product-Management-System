import {useState} from 'react'
import Navbar from '../../Components/Navbar'
import './AddProduct.css'
import axios from 'axios'
 const AddProduct =()=>{
  //first approach
  const [productImage,setProductImage] =useState("")
  const [productName,setProductName] = useState("")
  const [productDescription,setProductDescription] =useState("")
 
  const addproduct = async(e)=>{
    e.preventDefault()
      const response = await axios.post(" https://653142f74d4c2e3f333cc097.mockapi.io/product",{
      productname : productName,
      productImage : productImage,
      productDescription :productDescription
    })
    console.log(response)
  }
  return (
    <>
    <Navbar />
    <div class="product-form">
    <h2>Product Details</h2>
    <form onSubmit={addproduct}>
    <label htmlFor="product-image">Product Image:</label>
        <input type="text" id="productImage" name="productImage" onChange={(e)=>setProductImage(e.target.value)}  />


        <label  htmlFor="product-name">Product Name:</label>
        <input type="text" id="product-name" name="productname" onChange={(e)=>setProductName(e.target.value)} />

        <label htmlFor="product-description">Product Description:</label>
        <textarea id="product-description" name="productDescription" rows="4" onChange={(e)=>setProductDescription(e.target.value)}> </textarea>

        <button type="submit">Submit</button>
    </form>
</div>
    </>
  )
  }

export default AddProduct