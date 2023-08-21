'use client'

import React from "react";
import Link from "next/link";
import {useRouter} from 'next/navigation'
const Login = () => {
    const router = useRouter()
  return (
    <div>
    <h1>Login</h1>
    <Link href={"/"}>Home</Link> <br/>
    <button onClick={()=>router.push("/")}>Home</button>  {/* With using function  */}
</div>
  )
}

export default Login