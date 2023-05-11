import { NavLink } from "react-router-dom";
import "./Navigation.scss"

const Navigation = () => {

    return(
        <nav>
            <section className="title">
            <h1> 0 </h1>
            <h1> Cicle <br/>Production </h1>
            </section>
        
            <section className="drop-down-menu">
            <h3> Dashboard</h3>
            <div className="dropdown-content">
            <ul>
                <li><NavLink  className={ ({isActive})=> {return  isActive ? 'active ':'inactive'}} to={"/products"} > Product Management </NavLink></li>
                <li><NavLink   className={ ({isActive})=> {return  isActive ? 'active ':'inactive'}} to={`/osef`}>Employee Management</NavLink></li>
            </ul>
            </div>

            </section>

            <button>Logout</button>
        </nav>
    )
}

export default Navigation;