import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Signup from './users/customer/signup';
import React,{useState}from "react";
import { Home } from './users/customer/homepage';
import { Homepage } from './modulee/home';
import { Dashboard } from './modulee/dashboard';
import { Userprofile } from './modulee/user_profile';
import { Booking } from './modulee/booking';
import { Ticketbookingform } from './users/customer/book_ticket';
import { Bookingform } from './users/customer/fill_booking_form';
import { Movieupload } from './users/admin/post_movie';
import { Feedback } from './users/customer/give_feedback';
import { MovieDetails } from './users/customer/view_movie_detail';
import { Successresponse } from './post_booking/confirmation';
import { Adminpage } from './users/admin/page_admin';
import { Retrievefeedback } from './users/admin/retrieve_feedback';
import { Adminprofile } from './users/admin/profile_admin';
import { AdminBooking } from './users/admin/retrieve_booking_admin';
import { ShowMovie } from './users/admin/showmovie_admin';
import {lightTheme,darkTheme,GlobalStyles} from "./themes/themes.js";
import styled,{ThemeProvider} from 'styled-components';
import { TicketerPage } from './users/ticketer/ticketer_page';
import { BookingformTicketer } from './users/ticketer/booking_form';
import { MovieuploadTicketer } from './users/ticketer/ticketer_movie_upload';
import { TicketerBookingTicketer } from './users/ticketer/ticketer_booking';
import { TicketerProfile } from './users/ticketer/ticketer-profile';
import { DashboardTicketer } from './users/ticketer/ticketer_dashboard';
import { RetrievefeedbackTicketer } from './users/ticketer/ticketer_feedback';

const StyledApp = styled.div``;

function App() {

  const [theme,setTheme]=useState("dark");

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Signup />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/homepage">
            <Homepage />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
          <Route exact path="/bookings">
            <Booking />
          </Route>
          <Route exact path="/userprofile">
            <Userprofile />
          </Route>
          <Route exact path="/feedback">
            <Feedback />
          </Route>
          <Route exact path="/bookingform">
            <Bookingform />
          </Route>
          <Route exact path="/pickseat">
            <Ticketbookingform />
          </Route>
          <Route exact path="/movieupload">
            <Movieupload />
          </Route>
          <Route exact path="/details">
            <MovieDetails />
          </Route>
          <Route exact path="/success">
            <Successresponse />
          </Route>
          <Route exact path="/adminpage">
            <Adminpage />
          </Route>
          <Route exact path="/ticketerpage">
            <TicketerPage />
          </Route>
          <Route exact path="/ticketerbooking">
            <BookingformTicketer />
          </Route>
          <Route exact path="/movieuploadticketer">
            <MovieuploadTicketer/>
          </Route>
          <Route exact path="/ticketbookticketer">
            <TicketerBookingTicketer/>
          </Route>
          <Route exact path="/ticketerprofile">
            <TicketerProfile/>
          </Route>
          <Route exact path="/ticketerdashboard">
            <DashboardTicketer/>
          </Route>
          <Route exact path="/retrievefeedbackticketer">
            <RetrievefeedbackTicketer/>
          </Route>
          
          <Route exact path="/showmovie">
            <ShowMovie />
          </Route>
          <Route exact path="/retrievefeedback">
            <Retrievefeedback />
          </Route>
          <Route exact path="/adminprofile">
            <Adminprofile />
          </Route>
          <Route exact path="/adminbooking">
            <AdminBooking />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
