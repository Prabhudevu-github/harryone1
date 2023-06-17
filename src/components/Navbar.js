import React from 'react'

import propTypes from 'prop-types'
import { Link } from 'react-router-dom'

function Navbar(props) {
 
  return (
    <div> <nav className={`navbar navbar-expand-lg  navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">TextUtils</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">{props.first_item}</a>
            </li>
            {/* <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/theme">{props.second_item}</Link>
            </li> */}
          </ul>
        </div>
      </div>
      
        <div>
        <button className='btn btn-danger mx-2' onClick={props.makeRed}>red pallete</button>
        </div>
        <div>
        <button className='btn btn-success mx-2' onClick={props.makeGreen}>green pallete</button>
        
      </div>
      <div className="form-check form-switch">
        <input className="form-check-input " type="checkbox" role="switch" onClick={props.toggleMode} id="flexSwitchCheckDefault"/>
          <label className={`form-check-label text-${props.mode==='light'?'dark':'light'}`} htmlFor="flexSwitchCheckDefault">{`Enable ${props.mode==='light'?'dark':'light'} mode`} </label>
      </div>
    </nav></div>
  )
}

Navbar.propTypes = {
  second_item: propTypes.string
}

Navbar.defaultProps = {
  first_item: "Home",
  second_item: "Theme"
}

export default Navbar;
