import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

export default function Navbar(props){
  let bgNav='light'
  let togtxt='dark';
  let bgBody='light';
 /* const cgt={
    color:props.values=='dark'?'dark':props.values=='light'?'light':'light',
    backgroundColor:props.values=='dark'?'light':props.values=='light'?'dark':'dark'
  }*/
  /*if(props.values==='light'){
   bgNav='light';
   togtxt='dark'
   bgBody='light';
  }  
  if(props.values==='dark'){
    bgNav='dark';
    togtxt='light';
    bgBody='secondary';
  }*/

    return(
        <>
        <nav className={`navbar navbar-expand-lg navbar-${props.navs} bg-${props.navs}`} >
        <div className="container-fluid" >
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
                <Link className="nav-link" to="/about">{props.about}</Link>
              </li>
           
            </ul>
            {/*
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>*/}
          </div>          
        </div>  
      <div className="d-flex w-25">
          <div className="rounded container bg-primary "  onClick={()=>{props.changetheme('primary')}} style={{height:'30px',width:'30px',cursor:"pointer"}}></div>
          <div className="rounded container bg-danger "  onClick={()=>{props.changetheme('danger')}} style={{height:'30px',width:'30px',cursor:"pointer"}}></div>
          <div className="rounded container bg-success "  onClick={()=>{props.changetheme('success')}} style={{height:'30px',width:'30px',cursor:"pointer"}}></div>
          <div className="rounded container bg-warning "  onClick={()=>{props.changetheme('warning')}} style={{height:'30px',width:'30px',cursor:"pointer"}}></div>
          <div className="rounded container bg-dark "  onClick={()=>{props.changetheme('dark')}} style={{height:'30px',width:'30px',cursor:"pointer"}}></div>
          <div className="rounded container bg-secondary "  onClick={()=>{props.changetheme('secondary')}} style={{height:'30px',width:'30px',cursor:"pointer"}}></div>
          </div> 
        <div className={`form-check form-switch d-flex justify-content-center  w-25`}>
      <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"  onClick={props.naval}/>
    <label className={`px-2 form-check-label primary text-${togtxt}`} Htmlfor="flexSwitchCheckDefault">toggle Mode </label>
</div>             
      </nav>      
      </>
    );
}
Navbar.propTypes={
title:PropTypes.string.isRequired,
about:PropTypes.string.isRequired
}

Navbar.defaultProps={
    title:"set the title",
}