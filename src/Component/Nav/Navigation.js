import { NavLink } from "react-router-dom";
import "./Navigation.scss"

const Navigation = () => {

    return(
        <nav>
            <section className="title">
            <h1> 0 </h1>
            <h1> Cicle <br/>Production </h1>
            </section>
        
            <h3> Dashboard</h3>
            <ul>
                <li><NavLink  className={ ({isActive})=> {console.log(isActive);return  isActive ? 'active ':' r'}} to={"/products"} > Product Management </NavLink></li>
                <li><NavLink  to={`/osef`}>Employee Management</NavLink></li>
            </ul>

            <button>Logout</button>
        </nav>
    )
}

export default Navigation;