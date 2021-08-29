//import logo from './logo.svg';
import image from './NT.jpeg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import Notices from './components/Notices';

function App() {
  return (
    <>
      <Navbar title="Dining Hall" tab1="Home" tab2="Food Time Table" tab3="Feedback" tab4="Account"/>

      <div>
      <img src={image} className="conatiner img-fluid" alt="Nadeem Tarin Hall"/>
      </div>
      {/* <AboutUs/> */}
      <div className="container">
        <div className="row">
          <div className="col-4 my-3 mb-3"><Notices/></div>
          <div className="col-8 my-3 mb-3"><AboutUs/></div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
