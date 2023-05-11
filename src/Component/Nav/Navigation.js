import { NavLink } from "react-router-dom";
import "./Navigation.scss"
import { useEffect, useState } from "react";

const Navigation = () => {

    const [displayMenu,SetDisplayMenu] = useState(false);
    const dropDownMenu = () => {
        SetDisplayMenu(!displayMenu);
        console.log(displayMenu);
    }
    useEffect(()=>{
        const root = document.documentElement;
        root?.style.setProperty("--displayMenu", displayMenu ? 'block': 'none')
        const val =root.style.getPropertyValue("$displayMenu");
    },[displayMenu])

    return(
        <nav>
            <section className="title">
            <h1> 0 </h1>
            <h1> Cicle <br/>Production </h1>
            </section>
            
            <section className="drop-down-menu">
            
            <h3 className="content-drop-down" onClick={()=>{dropDownMenu()}}> Dashboard</h3>
            <div className="dropdown-content">
            <ul>
                <li><NavLink  className={ ({isActive})=> {return  isActive ? 'active ':'inactive'}} to={"/products"} > Product Management </NavLink></li>
                <li><NavLink   className={ ({isActive})=> {return  isActive ? 'active ':'inactive'}} to={`/osef`}>Employee Management</NavLink></li>
            </ul>
            <button>Logout</button>
            </div>

            </section>

            
        </nav>
    )
}

export default Navigation;