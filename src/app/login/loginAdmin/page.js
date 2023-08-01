"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
const LoginAdmin=()=>{
    const router= useRouter();
    return (
        <div>
            
            <h1>login</h1>
            <button onClick={()=>router.push("/login")}> Go to login </button>
        </div>
    )
}
export default LoginAdmin