import { Link } from "react-router-dom"
import * as userService from '../../utilities/users-service'
import "./NavBar.css"
import {IoSettingsOutline} from 'react-icons/io5'
import {CgSearch} from 'react-icons/cg'

export default function NavBar({ user, setUser }) {
    
    function handleLogOut() {
        // Delegate to users-service
        userService.logOut()
        setUser(null)
    }
    return(
        <nav>
            {/* <button className="navButton" id="settingsBtn">SETTINGS</button> */}
            <IoSettingsOutline className="navButton" id="settingsBtn"/>
            <CgSearch className="navButton"/>
            {/* <button className="navButton" id="searchBtn">SEARCH</button> */}
            {/* <Link to="/orders">Order History</Link>
            &nbsp;&nbsp;<Link to="/orders/new">New Order</Link>
            &nbsp;&nbsp;<span>Welcome, {user.name}</span>
            &nbsp;&nbsp;<Link to="" onClick={handleLogOut}>Log Out</Link> */}
        </nav>
    )
}