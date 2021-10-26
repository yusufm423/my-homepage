import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Feedback from './components/Feedback';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import Account from './components/Account_page'
import Stop from './components/Stop'
import RoomService from './components/RoomService'
// import AdminPage from './components/AdminPage';
import {
  HashRouter,
  Switch,
  Route,
} from "react-router-dom";
import TimeTable from './components/TimeTable';
import AdminPage from './components/AdminPage';
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>
function App() {
  return (
    <><HashRouter>
      <Navbar title="NT - Dining Hall" tab1="Home" tab2="Time Table" tab3="Feedback" tab4="Account"/>

      <div className="container-fluid" style={{marginTop:70}}>
          <Switch>
          <Route path="/login">
            <LogIn/>
          </Route>
          <Route path="/signup">
            <SignUp/>
          </Route>
          <Route path="/ttable">
            <TimeTable/>
          </Route>
          <Route path="/admin">
            <AdminPage/>
          </Route>
          <Route path="/stop">
            <Stop/>
          </Route>
          <Route path="/roomorder">
            <RoomService/>
          </Route>
          
          <Route path="/account">
            <Account/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </div>
      <Feedback></Feedback>
      {/* <Stop></Stop> */}

      <Footer/>
      </HashRouter>
    </>
  );
}

export default App;
