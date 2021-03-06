import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/purchases">Purchases</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/">Van Builder</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="#"
                    onClick={
                        () => {
                            localStorage.removeItem("vanner")
                        }
                    }>
                    Logout
                </Link>
            </li>
        </ul>
    )
}