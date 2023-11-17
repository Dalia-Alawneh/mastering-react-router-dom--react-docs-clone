import { NavLink } from "react-router-dom"

interface IProps {
    title:string;
    route:string;
    className?:string;
}
const ListItem = ({ title, route, className}: IProps) => {
    return (
        <li>
            <NavLink to={route} className={`py-1 px-2 ${className}`}>{title}</NavLink>
        </li>
    )
}

export default ListItem