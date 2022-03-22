import React, { useState } from 'react';
import fire from '../../firebasefile/firebase';
import { useHistory } from 'react-router';
import '../../App.css';

export const Signup = () => {
  const [profile, setprofile] = useState('');
  const [url, seturl] = useState('');
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [mobile, setmobile] = useState('');
  const [admin, setadmin] = useState(false);
  const [ticketer, setticketer] = useState(false);

  const history = useHistory();
  const signUp = () => {
    var container = document.getElementById('contjainer');
    container.classList.add("right-panel-active");
  };
  const signIn = () => {
    var container = document.getElementById('container');
    container.classList.remove("right-panel-active");
  };
  const handleSubmit = (e) => {
    var currentDate = new Date()
    var day = currentDate.getDate()
    var month = currentDate.getMonth() + 1
    var fullyear = currentDate.getFullYear()
    var fulldate = day + "-0" + month + "-" + fullyear;
    e.preventDefault();
    try{
    if (name === "" || email === "" || password === "" || mobile === "") {
      alert("please fill all fields");
    } else {
      fire.auth().createUserWithEmailAndPassword(email, password).catch(function(error)
      {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode == 'auth/weak-password') {
          alert('The password is too weak.');
        } else {
          alert("in cache else");
          alert(errorMessage);
        }
        console.log(error);
      }).then(() => {
        alert("out of catch");
        fire.storage().ref("profile Images").child(fulldate.toString() + ".jpg").put(profile).catch(function(error){
          var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode == 'auth/weak-password') {
          alert('The password is too weak.');
        } else {
          alert("in cache else");
          alert(errorMessage);
        }
        console.log(error);

        }).then(() => {
            fire.storage().ref("profile Images").child(fulldate.toString() + ".jpg").getDownloadURL().then((url) => {
            console.log(url);
            seturl(url);
            alert(url);
            fire.firestore().collection('users').add({
              profile: url,
              name: name,
              email: email,
              password: password,
              mobile: mobile
            }).then(() => {
              alert("account created successfully");
            }).catch((err) => console.log(err));
          }).catch((err) => console.log(err));
        })
      });

    }}catch(error)
    {
      console.error(error);
    }
    setname('');
    setemail('');
    setpassword('');
    setmobile('');
  }

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      alert("please enter email and password");
    } if (admin == true) {
      fire.firestore().collection("admin").where("email", "==", email).where("password", "==", password).get().then((snapshot) => snapshot.forEach((ele) => {
        var data = ele.data();
        var profile = data.profile;
        var name = data.name;
        var email = data.email;
        var password = data.password;
        var mobile = data.mobile;
        if (email === email && password === password) {
          history.push({ pathname: "/adminpage", state: { profile: profile, name: name, email: email, password: password, mobile: mobile } })
        } else {
          alert("invalid email or password");
        }
      }))
    } else {
      fire.auth().signInWithEmailAndPassword(email, password).then(() => {
        fire.firestore().collection("users").where("email", "==", email).get().then((snapshot) => {
          snapshot.forEach(doc => {
            var data = doc.data();
            var profile = data.profile;
            var name = data.name;
            var email = data.email;
            var password = data.password;
            var mobile = data.mobile;
            history.push({ pathname: "/homepage", state: { profile: profile, name: name, email: email, password: password, mobile: mobile } })
          })
        })
      })
    }

    if (ticketer == true) {
      fire.firestore().collection("ticketer").where("email", "==", email).where("password", "==", password).get().then((snapshot) => snapshot.forEach((ele) => {
        var data = ele.data();
        var profile = data.profile;
        var name = data.name;
        var email = data.email;
        var password = data.password;
        var mobile = data.mobile;
        if (email === email && password === password) {
          history.push({ pathname: "/ticketerpage", state: { profile: profile, name: name, email: email, password: password, mobile: mobile } })
        } else {
          alert("invalid email or password");
        }
      }))
    } else {
      fire.auth().signInWithEmailAndPassword(email, password).then(() => {
        fire.firestore().collection("users").where("email", "==", email).get().then((snapshot) => {
          snapshot.forEach(doc => {
            var data = doc.data();
            var profile = data.profile;
            var name = data.name;
            var email = data.email;
            var password = data.password;
            var mobile = data.mobile;
            history.push({ pathname: "/homepage", state: { profile: profile, name: name, email: email, password: password, mobile: mobile } })
          })
        })
      })
    }


    setemail('');
    setpassword('');
  }
  return (
    <div>
     
      <h3>Edna cinema</h3>
      <div class="container" id="container">
        <div class="form-container sign-up-container">
          <form>
            <h1>Create Account</h1>
            <input type="file" placeholder="Pick Image" onChange={(e) => setprofile(e.target.files[0])} />
            <input type="text" placeholder="Name" value={name} onChange={(e) => setname(e.target.value)} />
            <input type="email" placeholder="Email" value={email} onChange={(e) => setemail(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setpassword(e.target.value)} />
            <input type="text" placeholder="Mobile" value={mobile} onChange={(e) => setmobile(e.target.value)} />
            <button  onClick={handleSubmit}>Sign Up</button>
          </form>
        </div>
        
        <div class="form-container sign-in-container">
          <form>
            <h1>Sign in</h1>
            
           <input type="email" value={email} onChange={(e) => setemail(e.target.value)} placeholder="Email" />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setpassword(e.target.value)} />
            <input type="checkbox" style={{ marginLeft: "-70%", width: "-webkit-fill-available" }} value={admin} onChange={(e) => setadmin(true)} /><a href="#" style={{ marginLeft: "-8%", marginTop: "-8%" }}>Pick If You Are Admin</a>
            <input type="checkbox" style={{ marginLeft: "-70%", width: "-webkit-fill-available" }} value={ticketer} onChange={(e) => setticketer(true)} /><a href="#" style={{ marginLeft: "-8%", marginTop: "-8%" }}>Pick If You Are Ticketer</a>
            <button onClick={handleLogin}>Sign In</button>
          </form>
        </div>
        <div class="overlay-container">
          <div class="overlay">
            <div class="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>To stay connected with us please login with your personal info</p>
              <button class="ghost" id="signIn" onClick={signIn}>Sign In</button>
            </div>
            <div class="overlay-panel overlay-right">
              <h1>Welcome :)</h1>
              <p>Enter your personal details and be part of Edna Cinema</p>
              <button class="ghost" id="signUp" onClick={signUp}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}
export default Signup;