import React from 'react';
import { NavLink } from 'react-router-dom';


const Nav = () =>{
    return(
        <>
        <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-10 mx-auto">
        <nav className="navbar navbar-expand-sm">
        <NavLink activeClassName="menu-select"
        className="navbar-brand" to="/"><img src="/img/cook2.jpg" className="logo" alt="logo"/>Perfect Plate</NavLink>

         <div className="collapse navbar-collapse" id="navbarSupportedContent">
         <ul className="navbar-nav ml-auto">
         <li className="nav-item active mx-3">
         <NavLink activeClassName="menu-select" className="nav-link" to="/">Home </NavLink>
         </li>
        <li className="nav-item">
        <NavLink activeClassName="menu-select" className="nav-link" to="/cart">Recipies</NavLink>
        </li>
        </ul>
       
  </div>
</nav>
</div>
</div>
</div>
</>
    )
};

export default Nav;