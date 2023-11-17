
import ListItem from "./ListItem";
const navList: { name: string; route: string; }[] = [
    {
        name: "Quick Start",
        route: '/'
    },
    {
        name: "Thinking In React",
        route: '/thinking-in-react'
    },
    {
        name: "Installation",
        route: '/installation'
    },
]
const LearnAside = () => {
    return (
        <aside className="min-w-[280px]">
            <span className="text-blue-200 text-sm ps-3">GET STARTED</span>
            <ul className="flex-col mt-5 max-w-100 gap-5">
                {
                    navList.map(link => (
                        <ListItem route={`/learn${link.route}`} title={link.name} className="rounded-r-lg w-full block py-[10px] ps-4" />
                    ))
                }
            </ul>
        </aside>
    )
}
export default LearnAside