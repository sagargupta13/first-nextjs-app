'use client'

import React from "react";
import Link from "next/link";
import {useRouter} from 'next/navigation'


const Login = () => {
  const router = useRouter()
  const navigate =(name)=>{
    router.push(name)
  }
  return (
    <div>
      <p>Home Page</p>

      <div>
        <Link href="/login">LOGIN</Link><br></br>
        <Link href="/about">ABOUT US</Link> <br></br>
        <button onClick={()=>router.push("/login")}>Login</button><br/>   {/*without using function  */}
         <button onClick={()=>navigate("/about")}>About</button>  {/* With using function  */}
      </div>
    </div>
  );
};

export default Login;
