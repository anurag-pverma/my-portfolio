import React from "react";
import Avatar from "@mui/material/Avatar";
import SocialIcon from "../SocialIcon/SocialIcon";
import { Link } from "react-router-dom";

import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  HeroRight,
} from "./HeroElements";
function Hero() {
  return (
    <div className="heroMain">
      <HeroContainer>
        <HeroWrapper>
          <HeroLeft>
            <h1>LET ME INTRODUCE MYSELF</h1>
            
            <i>I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️</i>
            <i>I am fluent in classics like React, <p className="one"> Javascript and node</p>.</i>
            <i>My field of Interest's are building new  Web Technologies and Products and also in areas related to</i>
            <i>Whenever possible, I also apply my passion for developing products with Node.js</i>
            <i>and Modern Javascript Library and Frameworks  like React.js</i>

            <h3>FIND ME ON</h3>
            <h6>Feel free to connect with me</h6>
            <p style={{ fontWeight: "500" }}>Phone📱 - 8004833682</p>
            <p style={{ fontWeight: "500" }}>Email📧 - anurag.premaverma@gmail.com</p>
            <div className="download">
              <Link
                to="/files/anuragverma-resume.pdf"
                className="btn btn--outline"
                target="_blank"
                download
              >
                📥Resume
              </Link>
            </div>
            <div className="download">
              <a href={`mailto:anurag.premaverma@gmail.com`}>
                <span type='button' className='btn btn--outline'>
                  📩Email me
                </span>
              </a>
            </div>

            <SocialIcon />
          </HeroLeft>
          <HeroRight>
            <Avatar
              alt="anurag"
              src="https://avatars.githubusercontent.com/u/94588992?v=4"
              sx={{ width: 300, height: 300 }}
            />
          </HeroRight>
        </HeroWrapper>
      </HeroContainer>
    </div>
  );
}

export default Hero;
