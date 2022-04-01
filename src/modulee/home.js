import React, { useState, useEffect } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import fire from '../firebasefile/firebase';
import '../movie_details.css';


export const Homepage = () => {
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
        <div className="wrapper " >
            <link href="../assets/css/material-dashboard.css?v=2.1.2" rel="stylesheet" />
            <div className="sidebar" data-color="white" data-background-color="black" >
                <div className="logo"><h2>
                    Edna Cinema
                </h2></div>
                <div className="sidebar-wrapper">
                    <ul className="nav">
                        <li className="nav-item active  ">
                            <Link to={{ pathname: "/homepage", state: { profile: profile, name: name, email: email, password: password, mobile: mobile } }} className="nav-link">
                                <i className="material-icons">home</i>
                                <p style={{color:'black'}}>Home</p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={{ pathname: "/dashboard", state: { profile: profile, name: name, email: email, password: password, mobile: mobile } }} className="nav-link">
                                <i className="material-icons">dashboard</i>
                                <p>Dashboard</p>
                            </Link>
                        </li>
                        
                        <li className="nav-item ">
                            <Link to={{ pathname: "/userprofile", state: { profile: profile, name: name, email: email, password: password, mobile: mobile } }} className="nav-link">
                                <i className="material-icons">person</i>
                                <p>User Profile</p>
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
                    <div class="container-fluid" >
                        <div class="navbar-wrapper">
                        </div>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation" >
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
                            return <div  style={{ marginLeft: "200px", marginRight: "auto"}}>
                        <div className="col-4" key={index} style={{maxHeight:'350px'}}>
                            
                            <div className="card" style={{backgroundColor:'#222',textDecorationColor:'white' , display:'flex',width:'100%',height:'100%',position:'relative',marginLeft:'40px'}/*sidebar overflow */}>
                            <h1 style={{color:'#fff',fontWeight:'lighter',fontFamily:'Segoe UI'}}>{data.data.moviename}</h1>
                                <div class='moviecard' style={{width:'100%',height:'350px'}}>
                                    <div class='movieimg'>
                                <div className="card-img-top img-fluid" style={{backgroundColor: "black",borderRadius:"100px",boxShadow:"0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)",width:'100%',height:'200px'}}>
                                
                                    <img src={data.data.image} style={{ width:"100%", height:"250px",position:"relative", borderRadius:"70px"}} />
                                    </div>
                                </div> 
                                <div class='moviedes' >
                                <h3 style={{color:'#fff',height:'250px',fontSize:'35px',fontFamily:'Segoe UI'}}><u><strong><i>Movies' Description</i></strong></u><br></br>{data.data.description}</h3>
                                    <h1 style={{fontSize:'20px',fontFamily:'Segoe UI'}}>Rating : {data.data.rating}</h1>
    
                                </div>
                                <div class='moviebtn' style={{justifycontent:'center',paddingTop:'60px'}}>
                                <button style={{borderRadius:'100px',}} onClick={() => history.push({ pathname: "/details" ,state: { viedourl: data.data.viedourl, moviename: data.data.moviename, description: data.data.description, actorname: data.data.actorname, directorname: data.data.directorname, releasedate: data.data.releasedate, outdate: data.data.outdate }  })}>View Trailer</button>
                                <button style={{borderRadius:'100px'}} onClick={() => history.push({ pathname: "/bookingform", state: { releasedate: data.data.releasedate, outdate: data.data.outdate, movieimage: data.data.image, moviename: data.data.moviename, ticketcost: data.data.ticketcost, profile: profile, name: name, email: email, password: password, mobile: mobile } })}>Get ticket</button>
                                
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
