import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook, faTwitter, faInstagram, faWhatsapp} from '@fortawesome/free-brands-svg-icons'
import "./Footer.css"
// I added library @fortawesome/free-brands-svg-icons because these icons exists here not at solid icons
import logo from "./Logo.png"
import MITU from "./MITU.png"
import TSS from "./TSS.png"

function Footer() {
	return (
        <footer className='footer'>
        <div className='container'>
            <div className='row'>
                <div className='footer-col'>
                    <h4>Quic Links</h4>
                    <div className="ul">
                    <div className="li"><a href="#">About College</a></div>
                    <div className="li"><a href="#">About School</a></div>
                    <div className="li"><a href="#">Departments</a></div>
                    </div>
          
                </div>
               
                <div className='footer-col'>
                    <h4>follow us</h4>
                    <div className='social-links'>
                        <a href="https://www.facebook.com/egc.tech.assiut" target="_blank"><FontAwesomeIcon icon={faFacebook}/></a>
                        <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                        <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                        <a href="#"><FontAwesomeIcon icon={faWhatsapp} /></a>
                    </div>
                </div>
                <li><img src={logo} className="Logo"></img></li>
           <li><img src={MITU} className="Logo"></img></li>
           <li><img src={TSS} className="Logo"></img></li>
            <div className='footer-col'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3549.1031335836387!2d31.17547382561371!3d27.184495148359954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14450baeba73990d%3A0x7a66b40fe27089fd!2z2KfZhNmD2YTZitipINin2YTZhdi12LHZitipINin2YTYp9mE2YXYp9mG2YrYqSDZhNmE2KrZg9mG2YjZhNmI2KzZitin4oCTINij2LPZitmA2YDZgNmA2YDZgNmA2YjYtw!5e0!3m2!1sar!2seg!4v1689416902880!5m2!1sar!2seg"
                width="1100" height="400" style={{border:"0"}}
                allowFullScreen="" 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
            </div>
            {/* <br /> <br />
            <center>
            <div className='row'>
           
           <li><img src={logo} className="Logo"></img></li>
           <li><img src={MITU} className="Logo"></img></li>
           <li><img src={TSS} className="Logo"></img></li>
        

               
                  </div>
            </center> */}
           
              
        </div>
    </footer>  
);
}
export default Footer;