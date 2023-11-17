import { Link } from "react-router-dom"

const Hero = () => {
    return (
        <div className="h-screen flex gap-5 justify-center items-center flex-col">
            <svg viewBox="-10.5 -9.45 21 18.9" fill="rgb(20, 158, 202)" xmlns="http://www.w3.org/2000/svg"
        className='w-24'>
        <circle cx="0" cy="0" r="2" fill="rgb(20, 158, 202)"></circle><g stroke="rgb(20, 158, 202)" stroke-width="1" fill="none">
            <ellipse rx="10" ry="4.5"></ellipse><ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse><ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse></g></svg>

            <h1 className="text-7xl">React</h1>
            <p className="text-4xl mb-3">The library for web and native user interfaces</p>
            <div className="flex space-x-3">
                <Link to='/learn' className="rounded-full py-3 px-7 font-bold bg-[--main-color]">Learn More</Link>
                <Link to='/reference' className="rounded-full py-3 px-6 font-bold border-2">Api Reference</Link>
            </div>
        </div>
    )
}

export default Hero