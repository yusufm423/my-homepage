import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Feedback from './components/Feedback';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import {
  HashRouter,
  Switch,
  Route,
} from "react-router-dom";

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
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </div>
      <Feedback></Feedback>
      
      <Footer/>
      </HashRouter>
    </>
  );
}

export default App;
