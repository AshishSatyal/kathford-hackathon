import React from 'react';

import CenterComponent from './CenterComponent';

import kathCode from '/src/assets/kathCode.png';

import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import {
  FaInstagram,
  FaFacebook,
  FaXTwitter,
  FaDiscord,
  FaGithub,
} from 'react-icons/fa6';

import './styles/footer.css';

const socialMediaIcons = [
  {
    url: 'https://www.instagram.com/kathforditclub/',
    icon: <FaInstagram size={20} />,
  },
  {
    url: 'https://www.facebook.com/profile.php?id=61554820927866',
    icon: <FaFacebook size={20} />
  },
  {
    url: 'https://discord.gg/8JRA8bSEPq',
    icon: <FaDiscord size={20} />,
  },
  {
    url: 'https://github.com/Kathford-IT-Club-KIC',
    icon: <FaGithub size={20}/>,
  }
];

const socialMediaLinks = socialMediaIcons.map((item, idx) => (
  <li key={idx}>
    <a target='_blank' href={item.url}>{item.icon}</a>
  </li>
));

const Footer = () => {
  return (
    <section className="text-white">
      <div className="footer-main ">
        <div className="organizer-info ">
          <div>
            <a href="#" className="block w-[12rem] xl:mr-8 ">
              <img
                className=" w-auto h-[40px] sm:w-[auto] sm:h-[auto]"
                src={kathCode}
                alt="logo"
              />
            </a>
          </div>
          <div className="contact-info">
            <a href="mailto:kic@gmail.com">
              <div className="flex gap-2 items-center">
                <FaEnvelope size={16} />
                <span>kic@gmail.com</span>
              </div>
            </a>
            <div className="flex gap-2 items-center">
              <FaPhoneAlt size={16} />
              <span>+977 9845605423</span>
            </div>
          </div>
          <div className="social-links">
            <h2>Visit our socials</h2>
            <ul>{socialMediaLinks}</ul>
          </div>
        </div>
        <div className="useful-links">
          <h2>Useful Links</h2>
          <ul className="flex flex-col items-start gap-4">
            <li>
              <a className="  text-sm " href="#prizes">
                Prizes
              </a>
            </li>
            <li>
              <a className="  text-sm " href="#schedule">
                Schedule
              </a>
            </li>
            <li>
              <a className="  text-sm " href="#partners">
                Partner
              </a>
            </li>
            <li>
              <a className="  text-sm " href="#faq">
                FAQs
              </a>
            </li>
          </ul>
        </div>
        <div className="event-info">
          <div>
            <h2>Event Summary</h2>
            <div className="event-summary-details">
              <p>Mode: In-person</p>
              <p>Venue: Kathrord Block-B</p>
              <p>
                Date: 28<sup>th</sup>-29<sup>th</sup> June, 2024
              </p>
            </div>
            <div className="map-details">
              <h2 className="capitalize mb-2 mt-10">Visit us at</h2>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.413215637227!2d85.33605697934567!3d27.673620800000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19e8d9058ce3%3A0x5f9f01647e956594!2z4KSG4KSI4KSf4KWAIOCkpOCkpeCkviDgpK7gpY3gpK_gpL7gpKjgpYfgpJzgpK7gpYfgpKjgpY3gpJ8g4KSs4KWN4KSy4KSV!5e0!3m2!1sne!2snp!4v1717221860498!5m2!1sne!2snp"
                width="600"
                height="450"
                className="border-none w-full"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <div className="text-center py-2 border-t-[1px] border-white/10">
        <p className="text-sm font-[archiv]">
          All rights reserved © KathCode {new Date().getFullYear()}
        </p>
      </div>
    </section>
  );
};

export default Footer;
