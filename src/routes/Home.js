import React from 'react';
import NavBar from '../components/Navbar'
import Video from '../components/Video'
import Footer from '../components/Footer';
function Home(props) {
    return (
        <div>
           <NavBar/>
           <Video/> 
           <Footer/>
        </div>
    );
}

export default Home;