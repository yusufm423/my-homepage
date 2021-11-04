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
import Alert from "./components/Alert";
import { useState } from "react";
import {
  HashRouter,
  Switch,
  Route,
} from "react-router-dom";
import TimeTable from './components/TimeTable';
import AdminPage from './components/AdminPage';
import StudentState from './Reducers/StudentState';
import AdminState from './Reducers/AdminState';

<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>
function App() {
  const [alert, setAlert] = useState(null)
  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
 
  return (
    <>
    <AdminState>
    <StudentState>
      
    <HashRouter>
      <Navbar title="NT - Dining Hall" tab1="Home" tab2="Time Table" tab3="Feedback" tab4="Account" />
      <div style={{height: '50px'}}></div>
    <Alert alert={alert}/>
      <div className="container-fluid" >
        <Switch>
          <Route exact path="/login">
            <LogIn showAlert={showAlert}/>
          </Route>
          <Route exact path="/signup">
            <SignUp showAlert={showAlert}/>
          </Route>
          <Route exact path="/ttable">
            <TimeTable />
          </Route>
          <Route path="/admin">
            <AdminPage />
          </Route>
          <Route exact path="/stop">
            <Stop />
          </Route>
          <Route exact path="/roomorder">
            <RoomService />
          </Route>

          <Route path="/account">
            <Account />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
      <Feedback></Feedback>
      {/* <Stop></Stop> */}

      <Footer />
    </HashRouter>
     </StudentState>
     </AdminState>
    </>
  );
}

export default App;
