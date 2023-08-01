"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
const AboutCollege=()=>{
    const router=useRouter();
    return (
        <div>
            <h1>about college</h1>
            <button onClick={()=>router.push("/about/aboutCollege")}>Go to about Colleges</button>
            {/* <Link href="/about/aboutCollege"> Go to About Colleges</Link> */}
        </div>
    )
}
export default AboutCollege