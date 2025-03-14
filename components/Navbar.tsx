import Link from 'next/link'

const NavBar = () => {
    return (
        <>
            <nav className="flex justify-between items-center py-4">
                <div className="flex gap-4 text-2xl">
                    <Link href="/">Home |</Link>
                    <Link href={"/about"}>about |</Link>
                    <Link href={"/camp"}>Camp |</Link>
                    <Link href={"/info"}>Info |</Link>
                </div>
                <div className="flex gap-4">
                    <Link href={"/login"}>Login |</Link>
                    <Link href={"/register"}>Register </Link>
                </div>
            </nav>
            <hr className="mb-4"/>
        </>
    )
}

export default NavBar
