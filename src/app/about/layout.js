import Link from "next/link"
import './about.css'
export default function ({children}){
    return(
        <div>
            <ul className="menu-list">
                <li> <h4>About Navbar</h4></li>
                <li> <Link href="/about">main</Link> </li>
                <li> <Link href="/about/aboutstudent">student</Link> </li>
                <li> <Link href="/about/aboutcollege">teacher</Link> </li>
            </ul>
        {children}
        </div>

    )
}