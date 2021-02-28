import React from 'react';
import icon from '../images/i2.svg';
import icon1 from '../images/1.png';
import icon2 from '../images/2.jpg';
import icon3 from '../images/3.png';
import video from '../images/video.mp4';
import post from '../images/Frame 1.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Home = () =>{

    useEffect(()=> {
        AOS.init({duration:3000,
        delay:1200,
        offset:100})
    },[])

    return(
        <div>
        <div className="home container">
             <div className="text" data-aos="fade-right">
                <h1>Discover a unique Dish.</h1>
                <h6>We bring delicious dishes  and costomized meals to your home with fraction of cost. </h6>
            </div>
            <div className="icon-div">
                <img src={icon} alt="chef-icon" className="icon"/>
            </div>
           
        </div>

        <div className="cards" data-aos="fade-right" >
         <img src={icon1} alt="" className="card-icon"/> 
            <img src={icon2} alt="" className="card-icon"/>  
           <img src={icon3} alt="" className="card-icon"/>
        </div>  

        <div className="card-text " >
            <div className="text-c" data-aos="zoom-in">
            <h6>No need to waste your time in thinking of what to make and schedule your hours.you're just 
                one click away.
            </h6>
            </div>
            <div className="text-c" data-aos="zoom-in">
            <h6>Let your virtual chef know if you have any idea in your mind or certain incridents you want to use.
            </h6>
            </div>
            <div className="text-c" data-aos="zoom-in">
            <h6>We can make this a unique experiance for you so that you can get back to the things that matter.
            </h6>
            </div>
        </div>

        <div className="video-component">
            <div className="video" data-aos="slide-right">
                <video src={video} width="900" height="550" controls="controls" autoPlay={true} ></video>
            </div>
            <div className="video-text" data-aos="slide-left">
                 <h6 data-aos="zoom-out">Let us know which are your favourite dishes.
                 </h6>
                 
            </div>
        </div>

        <div className="tag-section">
            <h6 data-aos="fade-right">Tag us on social media with</h6>
            <h3 data-aos="fade-left">#yummydisheswishes</h3></div>
            <div className="post-section" data-aos="fade-right">
                <img src={post} className="post" alt="img"></img>
            </div>
        </div> 

    );
};

export default Home;