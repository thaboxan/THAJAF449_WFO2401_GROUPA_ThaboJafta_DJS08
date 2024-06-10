import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import {activeStyle} from "../utils";


export default function Layout(){

 

    return (
        <div>
            <nav className="host-nav">
                <NavLink 
                to='.' 
                end
                style={({isActive})=> isActive? activeStyle: null}
                >
                    Dashboard
                </NavLink>
                <NavLink 
                to='income' 
                style={({isActive})=> isActive? activeStyle: null}
                >
                    Income
                </NavLink>
                <NavLink 
                to='vans' 
                style={({isActive})=> isActive? activeStyle: null}
                >
                    Vans
                </NavLink>
                <NavLink 
                to='reviews' 
                style={({isActive})=> isActive? activeStyle: null}
                >
                    Reviews
                </NavLink>
            </nav>
            <Outlet />
           
        </div>
    )
}