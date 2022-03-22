import { HorizontalSplit } from '@material-ui/icons';
import React, { useState, useEffect } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import fire from '../../firebasefile/firebase';



export const TicketerPage = () => {
    const history = useHistory();
    const location = useLocation();
    const profile = location.state.profile;
    const name = location.state.name;
    const email = location.state.email;
    const password = location.state.password;
    const mobile = location.state.mobile;
    const [moviedata, setmoviedata] = useState([]);
    

    useEffect(() => {
        fire.firestore().collection("currentmovies").get().then((snapshot) => {
            snapshot.forEach(doc => {
                var data = doc.data();
                //console.log(data);
                setmoviedata(arr => [...arr, { data: data }])

            })
        })
        console.log(moviedata);
    }, [])
    return (
        <div className="wrapper">
            <link href="../assets/css/material-dashboard.css?v=2.1.2" rel="stylesheet" />
            <div className="sidebar" data-color="white" data-background-color='blue'>
                <div className="logo"><h2>
                    Edna Cinema</h2>
                </div>
                  
                <div className="sidebar-wrapper">
                    <ul className="nav">
                        <li className="nav-item active  ">
                            <Link to={{ pathname: "/ticketerpage", state: { profile: profile, name: name, email: email, password: password, mobile: mobile } }} className="nav-link">
                                <i className="material-icons">home</i>
                                <p>Home</p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={{ pathname: "/movieuploadticketer", state: { profile: profile, name: name, email: email, password: password, mobile: mobile } }} className="nav-link">
                                <i className="material-icons">dashboard</i>
                                <p>Movie Upload</p>
                            </Link>
                        </li>
                        <li className="nav-item ">
                            <Link to={{ pathname: "/ticketerbooking", state: { profile: profile, name: name, email: email, password: password, mobile: mobile } }} className="nav-link">
                                <i className="material-icons">content_paste</i>
                                <p>Retrieve Bookings</p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={{ pathname: "/ticketerdashboard", state: { profile: profile, name: name, email: email, password: password, mobile: mobile } }} className="nav-link">
                                <i className="material-icons">dashboard</i>
                                <p>Dashboard</p>
                            </Link>
                        </li>
                        <li className="nav-item ">
                            <Link to={{ pathname: "/ticketerprofile", state: { profile: profile, name: name, email: email, password: password, mobile: mobile } }} className="nav-link">
                                <i className="material-icons">person</i>
                                <p>User Profile</p>
                            </Link>
                        </li>
                        <li className="nav-item ">
                            <Link to={{ pathname: "/retrievefeedbackticketer", state: { profile: profile, name: name, email: email, password: password, mobile: mobile } }} className="nav-link" >
                                <i className="material-icons">notifications</i>
                                <p>Retrieve Feedback</p>
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
                        <button class="navbar-toggler" type="button" data-toggle="collapse" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="navbar-toggler-icon icon-bar"></span>
                            <span class="navbar-toggler-icon icon-bar"></span>
                            <span class="navbar-toggler-icon icon-bar"></span>
                        </button>

                    </div>
                </nav>


                <div className="row">
                    {
                        moviedata.map((data, index) => {
                            //console.log(data.image);
                            return <div>
                            <div className="col-4" key={index} style={{ marginLeft: "230px", marginRight: "auto"}}>
                                
                                <div className="card" style={{backgroundColor:'#222',display:'flex',width:'100%',height:'70%'}}>
                                <h1>{data.data.moviename}</h1>
                                    <div class='moviecard'>
                                        <div class='movieimg'>
                                    <div className="card-img-top img-fluid" style={{backgroundColor: "black",borderRadius:"100px",boxShadow:"0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)",width:'100%',height:'100%'}}>
                                    
                                        <img src={data.data.image} style={{ width:"100%", height:"100%",position:"relative", borderRadius:"100px"}} />
                                        </div>
                                    </div> 
                                    <div class='moviedes'>
                                    <h3><u><i>Movies' Description</i></u><br></br>{data.data.description}</h3>
                                    </div>
                                    <div class='moviebook'>
                                    <button onClick={() => history.push({ pathname: "/details", state: { viedourl: data.data.viedourl, moviename: data.data.moviename, description: data.data.description, actorname: data.data.actorname, directorname: data.data.directorname, releasedate: data.data.releasedate, outdate: data.data.outdate } })}>More details</button>
                                    <button onClick={() => history.push({ pathname: "/bookingform", state: { releasedate: data.data.releasedate, outdate: data.data.outdate, movieimage: data.data.image, moviename: data.data.moviename, ticketcost: data.data.ticketcost, profile: profile, name: name, email: email, password: password, mobile: mobile } })}>Get ticket</button>
                                    <button onClick={() => { fire.firestore().collection("currentmovies").where("moviename", "==", data.data.moviename).get().then((doc) => doc.docs[0].ref.delete()) }}>Remove</button>
                                    <br></br></div>
                                   </div></div>
                            </div></div>
                        })

                    }





                </div>
            </div>
        </div>


    )
}
