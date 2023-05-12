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
            <header className="title">
            <h1> 0 </h1>
            <h1> Cicle <br/>Production </h1>
            </header>
            
            <section className="drop-down-menu">
            
            <h3 className="content-drop-down" onClick={()=>{dropDownMenu()}}> Dashboard</h3>
            <div className="dropdown-content">
            <ul>
                <li><NavLink  className={ ({isActive})=> {return  isActive ? 'dropDownItem active ':' dropDownItem inactive'}} to={"/products"} > Product Management </NavLink></li>
                <li><NavLink   className={ ({isActive})=> {return  isActive ? ' dropDownItem active ':'dropDownIteminactive'}} to={`/osef`}>Employee Management</NavLink></li>
                <li className="mobile-logout"> <p> Logout</p> </li>
            </ul>
            <button className="desktop-logout">Logout</button>
            </div>

            </section>

            
        </nav>
    )
}

export default Navigation;