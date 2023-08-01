'use client'
import { useState } from 'react'
import styles from './page.module.css'
import { useRouter } from 'next/navigation';
export default function Home() {
  const router=useRouter();
  const [name,setName]=useState("Yo");
  const apple=()=>{
    setName("lol2")
  }
  const navigate=(name)=>{
    router.push(name);
  }
  return (
    <main>
      <h1> events, functions, and state {name}</h1>
      <button onClick={()=>apple(setName)}>click me</button>
      <br/>
      <br/>
      <button onClick={()=>navigate("/about")}> Go to about page</button>
      <br/>
      <br/>
      <button onClick={()=>navigate("/login")}> Go to login page</button>
    </main>
  )
}
