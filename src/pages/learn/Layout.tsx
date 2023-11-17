import { Outlet } from "react-router-dom"
import LearnAside from "../../components/LearnAside"
import Navbar from "../../components/Navbar"

const LearnLayout = () => {
    return (
        <div>
            <Navbar/>
            <div className="flex gap-10 pt-28">
                <LearnAside />
                <Outlet />
            </div>
        </div>
    )
}

export default LearnLayout
