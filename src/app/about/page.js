import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
    <div>
        <h1>About Us Page</h1>
        <Link href={"/"}>Home</Link> <br/><br/>
        <Link href={"/about/aboutstudent"}>About Students</Link> <br/> <br/>
        <Link href={"/about/aboutCollege"}>About College</Link> <br/>

    </div>
  )
}

export default About