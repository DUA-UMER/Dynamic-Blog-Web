import Link from "next/link";

export default function Header() {
    return (
        <div className="header">
            <ul className="header-button">
            <li><b><h1>BLOG FOR LIFE !</h1></b></li>
                <Link href={"/"}> <li>Home</li></Link>
                <Link href={"about"}> <li>About</li></Link>
                <Link href={"contact"}> <li>Contact</li></Link>
            </ul>
        </div>
    )
}