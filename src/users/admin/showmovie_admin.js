import React, { useState } from 'react'
import { useHistory, useLocation, Link } from 'react-router-dom'
import fire from '../../firebasefile/firebase';
import '../../movie_details.css';

import { Movie } from '@material-ui/icons';

import ReactPlayer from 'react-player';

export const ShowMovie = () => {
  
    const history = useHistory();
    const location = useLocation();
    const profile = location.state.profile;
    const name = location.state.name;
    const email = location.state.email;
    const password = location.state.password;
    const mobile = location.state.mobile;
    const [movie, setMovie] = useState('');
    const [moviePoster, setPoster] = useState('');
   
    
    const [videoFilePath,setVideoFilePath]=useState(null);

    const handleVideoUpload=(event)=>{
        setVideoFilePath(URL.createObjectURL(event.target.files[0]));
    };
     return (
        <div className="wrapper ">
            <link href="../assets/css/material-dashboard.css?v=2.1.2" rel="stylesheet" />
            <div className="sidebar" data-color="white" data-background-color="black" data-image="../../../public/assets/img/sidebar-1.jpg">
                <div className="logo"><h2>
                    Edna Cinema</h2>
                </div>
                <div className="sidebar-wrapper">
                    <ul className="nav">
                        <li className="nav-item">
                            <Link to={{ pathname: "/adminpage", state: { profile: profile, name: name, email: email, password: password, mobile: mobile } }} className="nav-link">
                                <i className="material-icons">home</i>
                                <p>Home</p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={{ pathname: "/movieupload", state: { profile: profile, name: name, email: email, password: password, mobile: mobile } }} className="nav-link">
                                <i className="material-icons">dashboard</i>
                                <p>Movie Upload</p>
                            </Link>
                        </li>
                        <li className="nav-item active">
                            <Link to={{ pathname: "/showmovie", state: { profile: profile, name: name, email: email, password: password, mobile: mobile } }} className="nav-link">
                                <i className="material-icons">movie</i>
                                <p>Show Movie</p>
                            </Link>
                        </li>
                        <li className="nav-item ">
                            <Link to={{ pathname: "/adminbooking", state: { profile: profile, name: name, email: email, password: password, mobile: mobile } }} className="nav-link">
                                <i className="material-icons">content_paste</i>
                                <p>Retrieve Bookings</p>
                            </Link>
                        </li>
                        <li className="nav-item ">
                            <Link to={{ pathname: "/adminprofile", state: { profile: profile, name: name, email: email, password: password, mobile: mobile } }} className="nav-link">
                                <i className="material-icons">person</i>
                                <p>User Profile</p>
                            </Link>
                        </li>
                        <li className="nav-item ">
                            <Link to={{ pathname: "/retrievefeedback", state: { profile: profile, name: name, email: email, password: password, mobile: mobile } }} className="nav-link" >
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
                        <button class="navbar-toggler" id="upload" type="button" data-toggle="collapse" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="navbar-toggler-icon icon-bar"></span>
                            <span class="navbar-toggler-icon icon-bar"></span>
                            <span class="navbar-toggler-icon icon-bar"></span>
                        </button>

                    </div>
                </nav>
                <div className="main-panel">
                    <div class="form-container sign-in-container" style={{ height: 'auto', left: '0', width: 'max-content', zIndex: 2, marginLeft: '33%', marginTop: '9%' }}>
                            <h2 className="upload-font" style={{ fontWeight: "bold" }}>Show Movie</h2>
                            <br />
                            
                            <input type="file" onChange={handleVideoUpload} />
                           
                            <input type="button" style={{ background: "#ff4b2b", color: "white" }} value="Show Movie" onClick={ShowMovie} />
                            <ReactPlayer url={videoFilePath} width="100%" height="100%" controls={true}/>
                     
                    </div>
                </div>
            </div>
        </div>
    )
}
