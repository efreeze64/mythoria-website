import Link from "next/link"

const Navbar = () => {

    return (
        <nav>
        <Link href="/">   
            Home
        </Link>
        <Link href="/about">   
            About
        </Link>
        <Link href="/Music">
            Music
        </Link>
        </nav>
    )
}

export default Navbar;