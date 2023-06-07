import Navs from '../components/Navbar_home';
import Cars from '../components/Carousel_home';
import Card from '../components/Hero_Image_Home';
import Features from '../components/FeaturesCardGroup_home';
import HomeFooter from '../components/Footer_Home';

function Homepage() {
    return (
        <>
            <Navs />
             <Cars />  
            <Card />
            <Features />    
            <HomeFooter/>       
         
        </>
    );
}

export default Homepage;