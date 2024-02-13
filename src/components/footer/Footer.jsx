import React from 'react'


import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
import MathmysticLogo from "../../assets/img/MathmysticLogo.png";
import LinkedinIcon from "../../assets/img/LinkedinIcon.svg";
import FacebookIcon from "../../assets/img/FacebookIcon.svg";
import InstagramIcon from "../../assets/img/InstagramIcon.svg";
import Mail from '../mail/Mail'
import './Footer.css'
const Footer = () => {
  return (
    <div>
      <footer className="footer">
      <Container>
        <Row className="align-items-center">
        <Mail />
          <Col size={12} sm={6}>
            <div className='mmt__footer'>
            <h4>Liên hệ</h4>
            <br></br>
            Email : mathmystic12345@gmail.com
            <br></br>
            </div>
            
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#"><img src={LinkedinIcon} alt="Icon" /></a>
              <a href="#"><img src={FacebookIcon} alt="Icon" /></a>
              <a href="#"><img src={InstagramIcon} alt="Icon" /></a>
            </div>
            <p>

            MATHMYSTIC
            <br></br>
            Providing math solutions since 2023 </p>
          </Col>
        </Row>
      </Container>
    </footer>
    </div>
  )
}

export default Footer
