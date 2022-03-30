import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import fire from '../firebasefile/firebase';
import '../profile.css';

export const Userprofile = () => {
    const location = useLocation();
    const profile = location.state.profile;
    const name = location.state.name;
    const email = location.state.email;
    const password = location.state.password;
    const mobile = location.state.mobile;
    console.log(profile, name, email, password, mobile);

    return (
        <div>
             <link href="../assets/css/material-dashboard.css?v=2.1.2" rel="stylesheet" />
            <div className="sidebar" data-color="white" data-background-color="black" >
                <div className="logo"><h2>
                    Edna Cinema</h2>
                </div>
                <div className="sidebar-wrapper">
                    <ul className="nav">
                        <li className="nav-item">
                            <Link to={{ pathname: "/homepage", state: { profile: profile, name: name, email: email, password: password, mobile: mobile } }} className="nav-link">
                                <i className="material-icons">home</i>
                                <p>Home</p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={{ pathname: "/dashboard", state: { profile: profile, name: name, email: email, password: password, mobile: mobile } }} className="nav-link">
                                <i className="material-icons">dashboard</i>
                                <p>Dashboard</p>
                            </Link>
                        </li>
                      
                        <li className="nav-item active">
                            <Link to={{ pathname: "/userprofile", state: { profile: profile, name: name, email: email, password: password, mobile: mobile } }} className="nav-link">
                                <i className="material-icons">person</i>
                                <p style={{color:'black'}}>User Profile</p>
                            </Link>
                        </li>
                        <li className="nav-item ">
                            <Link to={{ pathname: "/feedback", state: { profile: profile, name: name, email: email, password: password, mobile: mobile } }} className="nav-link" >
                                <i className="material-icons">notifications</i>
                                <p>Feedback</p>
                            </Link>
                        </li>
                        <li className="nav-item ">
                            <Link to="" className="nav-link" >
                                <i className="material-icons">logout</i>
                                <p>Logout</p>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="main-panel">
            <nav class="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top ">
                    <div class="container-fluid">
                        <div class="navbar-wrapper">
                        </div>
                        <button class="navbar-toggler" id="pro-nav" type="button" data-toggle="collapse" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="navbar-toggler-icon icon-bar"></span>
                            <span class="navbar-toggler-icon icon-bar"></span>
                            <span class="navbar-toggler-icon icon-bar"></span>
                        </button>

                    </div>
                </nav>

                <div  style={{ fontFamily: 'sans-serif', textAlign: 'center', minWidth: '350px', boxShadow: '0 0 10px rgba(0,0,0,0.2)', padding: '100px',display:'flex',left:'100px',top:'90px' }}>
                    <h2>Your <br></br> profile<br></br> info</h2>
                    <img src={profile} alt="Profile Image" className="profile__image" style={{ width: '150px', height: '150px', objectFit: 'cover', borderRadius: '50%', margin: 'auto 20px auto', display: 'block', marginTop: '-1%',marginLeft:'30px' }} />
                    <div className="profile__name" style={{ fontSize: '1.2em', fontWeight: 'bold',marginLeft:'20px' }}><i className="material-icons">person</i><h3>Name:</h3>{name}</div>
                    <br />
                    <div className="profile__title" style={{ marginBottom: '20px',marginRight:'30px',marginLeft:'50px' }}><i className="material-icons">email</i><h3>E-mail:</h3>{email}</div>
                    <div className="profile__title" style={{ marginBottom: '20px',marginLeft:'50px' }}><i className="material-icons">call</i><h3>Phone:</h3>{mobile}</div>

                    <div className="profile__detail" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9em', marginBottom: '20px' }}>
                  
                    </div>
                </div>
            </div>
        </div>

    )
}
