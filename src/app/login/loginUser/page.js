"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import Login from "../page";
const LoginUser=()=>{
    const router= useRouter();
    return (
        <div>
            
            <h1>Login Admin</h1>
            <button onClick={()=>router.push("/login")}> Go to login </button>
            {/* <Link href="/login"> Go to login</Link> */}
        </div>
    )
}
export default LoginUser