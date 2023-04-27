import Navs from './components/Navbar_home';
import Cars from './components/Carousel_home';
import Card from './components/Card_home';
import Features from './components/FeaturesCardGroup_home';
import Login from './pages/Login';
import Registration from './pages/Registration';
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function LandingPage() {
  return (
    <>
      {/* < Navs />
      < Cars />
      < Card />
      < Features /> */}


    </>
  );
}


function App() {
  return (
    <>
      {/* <Login /> */}
      <Registration />

    </>

  );
}

export default App;
