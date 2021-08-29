//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeMid from './components/HomeMid';
import Notices from './components/Notices';
import Menu from './components/Menu';

function App() {
  return (
    <>
      <Navbar title="Dining Hall" tab1="Home" tab2="Food Time Table" tab3="Feedback" tab4="Account"/>

      <div className="container-fluid" style={{marginTop:70}}>
        <div className="row">
          <div className="col-3 my-3 mb-3"><Notices/></div>
          <div className="col-7 my-3 mb-3"><HomeMid/> </div>
          <div className="col-2 my-3 mb-3"><Menu/></div> 
        </div>
      </div>
      
      <Footer/>
    </>
  );
}

export default App;
