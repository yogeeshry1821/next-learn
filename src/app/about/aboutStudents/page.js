"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
const AboutCollege=()=>{
    const router= useRouter();
    return (
        <div>
            <h1>about college</h1>
            <button onClick={()=>router.push("/about")}> Go to about </button>
            {/* <Link href="/about/aboutStudent"> Go to About Student</Link> */}
        </div>
    )
}
export default AboutCollege
