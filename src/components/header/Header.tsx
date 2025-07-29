"use client"
import Link from "next/link";
import { GrTechnology } from "react-icons/gr";
import style from "./header.module.css"
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
const Header=()=>{
    const [toggle,setToggle]=useState(false);
   
    return(
       <header className={style.header}>
        <nav className={style.navbar}>
            <div>
                <Link href="/" className={style.logo}>
                Cloud 
                <GrTechnology/>
                HOSTING
                </Link>
                <div className={style.menu}>
                    {toggle ?(<IoMdClose onClick={()=>setToggle(prev=>!prev)}/>):(<AiOutlineMenu onClick={()=>setToggle(prev=>!prev)}/>)}
                </div>
            </div>
            <div className={style.navLinkWrapper}
            style={{
clipPath:toggle && " polygon(0 0,100% 0,100% 100%,0 100%)"||""
            }}>

            <ul className={style.navLinks}>
                <Link onClick={()=>setToggle(false)} className={style.navLink} href="/">Home</Link>
                <Link onClick={()=>setToggle(false)} className={style.navLink} href="/articles">Articles</Link>
                <Link onClick={()=>setToggle(false)} className={style.navLink} href="/about">About</Link>
                <Link onClick={()=>setToggle(false)} className={style.navLink} href="/admin">Admin Dashboard</Link>
               
            </ul>
            </div>
        </nav>
        <div className={style.right}>
            <Link  className={style.btn}href="/login">Login</Link>
            <Link className={style.btn}href="/register">Register</Link>
        </div>
       </header>
    )
}
export default Header;