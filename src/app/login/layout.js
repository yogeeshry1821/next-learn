"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./login.css"
export default function Layout({ children }) {
    const pathName=usePathname();
    return (
        <div className="login-container">
            
                <ul className="login-menu">
                    <li>
                        <h1>login navbar</h1>
                    </li>
                    <li>
                        <Link href="/login">Main Login</Link>
                    </li>
                    <li>
                        <Link href="/login/loginUser">Student Login</Link>
                    </li>
                    <li>
                        <Link href="/login/loginAdmin">Admin Login</Link>
                    </li>
                </ul>
            
            {children}
        </div>
  );
}
