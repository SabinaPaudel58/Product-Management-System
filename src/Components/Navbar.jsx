

import { Link } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className="navbar">
    <a href="#Home">Home</a>
    <Link to ="/addProduct">Add Product</Link>
    {/* <a href ="/addProduct">Add Product</a> */}
    <a class="icon" onclick="myFunction()">&#9776;</a></div> 
  )
}

export default Navbar