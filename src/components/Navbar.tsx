import { Link } from "react-router-dom"
import ListItem from "./ListItem"
const navList: { name: string; route: string; }[] = [
    {
        name: "Learn",
        route: "/learn",
    },
    {
        name: "Reference",
        route: "/reference",
    },
    {
        name: "Contribution",
        route: "/contribution",
    },
    {
        name: "Blog",
        route: "/blog",
    },
    {
        name: "Login",
        route: "/login",
    },
]
const Navbar = () => {
    return (
        <nav className="fixed w-full flex px-10 items-center justify-between space-x-4 py-4">
            <Link to='/'>
                <svg viewBox="-10.5 -9.45 21 18.9" fill="rgb(20, 158, 202)" xmlns="http://www.w3.org/2000/svg"
                    className='w-10'>
                    <circle cx="0" cy="0" r="2" fill="rgb(20, 158, 202)"></circle><g stroke="rgb(20, 158, 202)" stroke-width="1" fill="none">
                        <ellipse rx="10" ry="4.5"></ellipse><ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse><ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse></g></svg>

            </Link>
            <input type="search" placeholder="Search.." className="bg-gray-50/20 w-full py-2 
            px-4 rounded-3xl focus:outline-none focus:border-2 focus:border-l-sky-500 focus:border-r-sky-500" name="" id="" />
            <ul className="">
                {
                    navList.map((link, index) => (
                        <ListItem key={index} route={link.route} title={link.name} className="rounded-full" />
                    ))
                }
            </ul>
        </nav>
    )
}

export default Navbar