import React,{useState,useEffect} from 'react'
import './Navbar.css'
import {AiOutlineUser } from  'react-icons/ai'
const NavBar = () => {
 const [handleShow, sethandleShow] = useState(false)
 useEffect(()=>{
  window.addEventListener("scroll", ()=>{
   if (window.scrollY > 100){
    sethandleShow(true);
   }else sethandleShow(false)
  });
  return ()=>{
   window.removeEventListener("scroll");
  }
 },[])
 return (
  <div className={`nav ${handleShow && "nav_black"}`}>
   <h1 className="Title">JestFlix</h1>
   <h1 className="Avatar"><AiOutlineUser/></h1>
  </div >
 )
}

export default NavBar
