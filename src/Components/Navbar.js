import React from 'react'
// import propTypes from 'prop-types';
import { Link } from 'react-router-dom'


const Navbar = (props) => {
    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="about">About</Link>
        </li>
      </ul>
      
      <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" onClick={props.toggledark} role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >Enable Dark Mode</label>
</div>
    </div>
  </div>
</nav>
        </div>
    )
}

//  This proptype will help us to check the value of props is correct or not.
// Navbar.propTypes = {
//   title: propTypes.string
// }

// This is  default props it mean if i didnt pass any data so this will so as a dafault value
// Navbar.defaultProps ={
//   title: "this is me"
// }


export default Navbar
