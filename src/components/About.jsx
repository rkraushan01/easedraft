import React from "react";
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";

import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";



const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
      <video src="vid.mp4" 
              controls
              width="320" height="240"
      
      ></video>
      
      </motion.div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', background:"blue", padding:"5px", margin:"5px", width:"100%"}}>
  <p style={{ marginBottom: '10px', fontSize:"22px" }}>Engage, explain, entertain. AI-powered video creation for any need.</p>
  <h2 style={{ color: 'white', marginTop: '0', fontSize:"40px", fontWeight: "bold" }}>Create videos for every team</h2>
</div>
</>
  );
};

export default SectionWrapper(About, "about");