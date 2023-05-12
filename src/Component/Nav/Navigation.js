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
            <img src="/images/logo.png" />
            </header>
            <h3 className="content-drop-down"  aria-label="activation du menu sur mobile" onClick={()=>{dropDownMenu()}}> Dashboard</h3>
            <section className="drop-down-menu">
            <h3 className="content-drop-down mobile-menu"  onClick={()=>{dropDownMenu()}}  > Menu </h3>
            <div className="dropdown-content">
            <ul>
                <li><NavLink  className={ ({isActive})=> {return  isActive ? 'dropDownItem active ':' dropDownItem inactive'}} to={"/products"} > Product Management </NavLink></li>
                <li><NavLink  disable="false" className={ ({isActive})=> {return  isActive ? ' dropDownItem active ':'dropDownIteminactive'}} to={`/employee`}>Employee Management</NavLink></li>
                <li className="mobile-logout"> <p> Logout</p> </li>
            </ul>
            <button className="desktop-logout">Logout</button>
            </div>

            </section>

            
        </nav>
    )
}

export default Navigation;