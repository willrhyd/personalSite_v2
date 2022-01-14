
import { NavLink } from 'react-router-dom'

export default function Navbar(){



    return(
        <div className="bg-slate-200 sticky top-0 z-10">
            <ul className="flex w-96  ">
                <li className="w-24 text-center hover:bg-slate-700 hover:text-white ">
                <NavLink
                    exact
                    to="/"
                    className="inline-block min-w-full py-5"
                    >Home</NavLink>
                </li>
                <li className="w-24 text-center hover:bg-slate-700 hover:text-white">
                <NavLink
                    exact
                    className="inline-block min-w-full py-5"
                    to="/blog"
                    
                    >Blog</NavLink>
                </li>
                <li className="w-24 text-center hover:bg-slate-700 hover:text-white">
                <NavLink
                    exact
                    className="inline-block min-w-full py-5"
                    to="/projects"
                    
                    >Projects</NavLink>
                </li>
            </ul>
        </div>
    )

}