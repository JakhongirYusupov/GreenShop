import React from 'react'
import './Footer.scss';
import garden from '../../images/gardenCare.svg';
import logo from '../../images/header-logo.svg';
import { HiOutlineLocationMarker, HiOutlineMail } from 'react-icons/hi';
import { BiPhoneCall } from 'react-icons/bi';
import link from '../../data/footer-link.json';
import { GrFacebookOption } from 'react-icons/gr';
import { FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { CgYoutube } from 'react-icons/cg';
import { v4 as uuidv4 } from 'uuid';
import footerAccept from '../../images/footer-accept.svg';

export default function Footer() {
  return (
    <footer className='footer'>
      <div className="container">
        <div className="footer-wrapper">
          <div className="footer-newsLetter">
            <div className="footer-newsLetter-products">
              <div className="footer-newsLetter-products-item">
                <img src={garden} alt="error" />
                <h4>Garden Care</h4>
                <p>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
              </div>
              <div className="footer-newsLetter-products-item">
                <img src={garden} alt="error" />
                <h4>Plant Renovation</h4>
                <p>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
              </div>
              <div className="footer-newsLetter-products-item">
                <img src={garden} alt="error" />
                <h4>Watering Graden</h4>
                <p>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
              </div>

            </div>
            <div className="footer-newsLetter-join">
              <h4>Would you like to join newsletters?</h4>
              <form className="footer-newsLetter-join-form">
                <input type="text" placeholder='enter your email address...' />
                <button type="submit">Join</button>
              </form>
              <p>We usually post offers and challenges in newsletter. We’re your online houseplant destination. We offer a wide range of houseplants and accessories shipped directly from our (green)house to yours! </p>
            </div>
          </div>
          <div className="footer-contact">
            <div className="footer-contact-logo">
              <img src={logo} alt="logo" />
            </div>
            <div className="footer-contact-location">
              <HiOutlineLocationMarker />
              <p>70 West Buckingham Ave.
                Farmingdale, NY 11735</p>
            </div>
            <div className="footer-contact-email">
              <HiOutlineMail />
              <a href="mailto:contact@greenshop.com">contact@greenshop.com</a>
            </div>
            <div className="footer-contact-phone">
              <BiPhoneCall />
              <a href="tel:+88 01911 717 490">+88 01911 717 490</a>
            </div>
          </div>
          <div className="footer-links">
            <div className="footer-links-wrapper">
              {
                link?.map(({ categoryName, links }) => {
                  return <div key={uuidv4()} className="footer-links-item">
                    <h4>{categoryName}</h4>
                    {
                      links.map((el) => {
                        return <a key={uuidv4()} href="/">{el}</a>
                      })
                    }
                  </div>
                })
              }
            </div>
            <div className="footer-links-socialMedia">
              <div className="footer-links-socialMedia-title">
                <h4>Social Media</h4>
              </div>
              <div className="footer-links-socialMedia-medias">
                <a href="www.facebook.com"><GrFacebookOption /></a>
                <a href="www.facebook.com"><FaInstagram /></a>
                <a href="www.facebook.com"><FaTwitter /></a>
                <a href="www.facebook.com"><FaLinkedinIn /></a>
                <a href="www.facebook.com"><CgYoutube /></a>
              </div>
              <div className="footer-links-socialMedia-accept">
                <h4>We accept</h4>
                <img src={footerAccept} alt="" />
              </div>
            </div>
          </div>
        </div>
        <p className='footer-bottom-desc'>© 2021 GreenShop. All Rights Reserved.</p>
      </div>
    </footer>
  )
}
