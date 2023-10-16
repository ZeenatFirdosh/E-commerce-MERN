import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import TelegramIcon from '@material-ui/icons/Telegram';
const About = () => {
  const visitInstagram = () => {
    window.location = "https://github.com/ZeenatFirdosh";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/dc4gfoeno/image/upload/v1696714974/avatars/qll6lhoyqod2ilemk47f.jpg"
              alt="Founder"
            />
            <Typography>Zeenat Firdosh Quadri</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Github
            </Button>
            <span>
              This is a MERN Stack wesbite.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a
              href="https://github.com/ZeenatFirdosh"
              target="blank"
            >
              <GitHubIcon className="GitHubSvgIcon" />
            </a>

            <a href="https://www.linkedin.com/in/zeenat-firdosh-quadri-237a171a6/" target="blank">
              <LinkedInIcon className="LinkedInSvgIcon" />
            </a>
            <a href="https://web.whatsapp.com/send?phone=+919304946935" target="blank">
              <WhatsAppIcon className="whatsAppSvgIcon" />
            </a>
            <a href="https://t.me/tele052" target="blank">
              <TelegramIcon className="TelegramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
