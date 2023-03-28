import * as React from 'react';
import Box from '@mui/material/Box';
import foto from '../assets/currentFoto.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faGithub, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

import '../App.css';


function About() {
 

  return (
    <div className="pages" style={{display:'flex', flexFlow:'row', }}>
        <div style={{display:'flex', width:'50%', justifyContent:'center', alignItems:'center'}}>
            <Box sx={{ borderRadius: '20px',justifyContent:'center', alignItems:'center', height:'400px', width:'60%', backgroundColor:'#7328AB', transform: "rotate(3deg)" }}>
                <img src={foto} width='65%' alt="logo" style={{ marginTop:'10%', transform: "rotate(-3deg)", borderRadius:'25px'}} />
            </Box>
        </div>
        <div style={{display:'flex', flexFlow:'column', textAlign:'left', width:'50%'}}>
            <h1 style={{fontSize: 18, color:'GrayText', marginBottom: '0px' }}>Hello, I'm</h1>
            <h1 style={{fontSize: 22, marginBottom: '0px', marginTop:'5px' }}>Nicolas Bello Lugo</h1>
            <p style={{fontSize: 18, fontWeight:'bold', marginBottom: '0px', marginTop:'5px', marginRight:'25px',  color:'GrayText' }}>Software Engineer/ UX Designer / Information Security Enthusiast</p>
            <p style={{fontSize: 18,marginBottom: '0px' , marginTop:'5px', marginRight:'25px', color:'GrayText' }}> Software Engineer based web design and data analytics visualization. Interests consist in Web Development, Cryptography, Cybersecurity, and UI/UX Design. Here you can find some of my projects.</p>
            <div style={{display:'flex', flexFlow:'row', columnGap:'10px', marginTop:'15px'}}>
                <a href='https://consejeria-uniandes.s3.us-east-2.amazonaws.com/Personal/Nicolas+Bello+CV.pdf' rel="noreferrer" target="_blank">
                    <button  style={{width:'30px'}}>
                        CV
                    </button>  
                </a>
                <a href='https://github.com/nbellol' rel="noreferrer" target="_blank"><FontAwesomeIcon size='2xl' icon={faGithub} /></a>
                <a href='https://www.instagram.com/nbellol97/' rel="noreferrer" target="_blank"><FontAwesomeIcon size='2xl' icon={faInstagram} /></a>
                <a href='https://www.linkedin.com/in/nicolas-bello-1b0b09200/' rel="noreferrer" target="_blank"><FontAwesomeIcon size='2xl' icon={faLinkedinIn} /></a>
            </div>
        </div>
    </div>
  );
}
export default About;