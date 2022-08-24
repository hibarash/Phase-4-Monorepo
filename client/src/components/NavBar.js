import { NavLink } from "react-router-dom"




function NavBar(){

    return(

        
        <header className="header">
            <h1><a href="#">Test Title</a></h1>
            <ul>
                <NavLink to="/">
                    <h3>Test1</h3>
                </NavLink>


                <NavLink to="/Providers">
                    <h3> Test2 </h3>
                </NavLink>

                <NavLink to="/new">
                    <h3> Test3 </h3>
                </NavLink>
            </ul>
        </header>
        


    )

}
export default NavBar