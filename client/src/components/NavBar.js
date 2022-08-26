import { NavLink } from "react-router-dom"




function NavBar(){

    return(<>

        <nav role="navigation" class="primary-navigation">
            <ul>
                <li> <NavLink to="/"> <a href="#"> Home </a> </NavLink> </li>
                <li>  <a href="#"> Join a League </a>
            <ul class="dropdown">
                <li> <NavLink to="/league/1"> <a href="#"> Volleyball </a> </NavLink> </li>
                <li> <NavLink to="/league/2"> <a href="#">Football</a> </NavLink> </li>
                <li> <NavLink to="/league/3"> <a href="#"> Soccer </a> </NavLink> </li>
                <li> <NavLink to="/league/4"> <a href="#"> Basketball </a> </NavLink> </li>
                <li> <NavLink to="/league/5"> <a href="#"> Baseball </a> </NavLink> </li>
                <li> <NavLink to="/league/6"> <a href="#">Bowling</a> </NavLink> </li>
                </ul>
            </li>
                <li> <NavLink to="/teams"> <a href="#"> Your Account </a> </NavLink> </li>
                <li> <NavLink to="/create"> <a href="#">Create an Account</a> </NavLink> </li>
            </ul>
        </nav>
    
        </>
    )

}
export default NavBar