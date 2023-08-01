"use client"
import { useRouter } from "next/navigation";
const About=()=>{
    const router= useRouter();
    return (
        <div>
            <h1>
                About
            </h1>
            <button onClick={()=>router.push("/")}> home </button>
            <br/>
            <br/>
            <button onClick={()=>router.push("/about/aboutStudents")}> Go to about Students</button>
            <br/>
            <br/>
            <button onClick={()=>router.push("/about/aboutCollege")}> Go to about colleges</button>
        </div>
    )
}

export default About;