"use client"
import { useRouter } from "next/navigation"
const Login=()=>{
    const router=useRouter();
    return (
        <div className="heading">
            <h1> Login Page</h1>
            <button onClick={()=>router.push("/")}> go to home page</button>
            <br/>
            <br/>
            <button onClick={()=>router.push("/login/loginAdmin")}> Go to admin login</button>
            <br/>
            <br/>
            <button onClick={()=>router.push("/login/loginUser")}> Go to user login</button>
        </div>
    )
}
export default Login 