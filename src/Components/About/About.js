import React from "react";
import Avatar from "@mui/material/Avatar";
import {  ContactWrapper } from "./AboutElements";
import { borderRadius } from "@mui/system";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">
          <div
            style={{
              fontSize: "30px",
              fontFamily: "'Trebuchet MS', sans-serif",
              color: "crimson"
            }}
          >
        👉👉About Me..
          </div>
          <hr
            style={{
              marginLeft: "5px",
              width: "170px",
              background: "red",
            }}
          />
        </div>
        <div style={{
          backgroundColor:"yellowgreen",
          height: "470px",
          width: "800px",
          borderRadius:"20px"
        }} >
          
            <Avatar
              alt="img"
              src="https://avatars.githubusercontent.com/u/94588992?v=4"
              sx={{ width: 150, height: 150 }}

              style={{
                marginLeft:"80px",
                marginTop:"50",
              }}
            />
          
          <div className="AboutBio">
            <div
              style={{
                fontSize: "28px",
                fontFamily: "'Trebuchet MS', sans-serif",
              }}
            >
              🙋‍♂️Hi... <br/>
               I'm Anurag Verma
            </div>
            A Passionate aspiring Full Stack Developer skilled in MERN stack,
            moulded and shaped by Masai school’s intensive and immersive learning.. <br></br>One
            Look forward to joining a company
            where I will be able to contribute towards individual and company growth <br/>
            Apart from coding, 
             some other activities that I love to do!{" "} <br/>
            <strong>Playing Cricket🏏🏏</strong><br/>
            <strong>Cooking Food 👩‍🍳👩‍🍳</strong><br/>
            <strong>Some Social activities 🎭</strong><br/>
          </div>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
