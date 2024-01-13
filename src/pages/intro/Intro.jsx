import { useState } from "react";
import "./Intro.css";
import { motion } from "framer-motion";

import { Link } from "react-router-dom";

export default function Intro() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 4 } },
  };

  const buttonVariants = {
    hover: { scale: 1.1 },
  };
  const [selectForm, setSelectForm] = useState(false);

  return (
    <motion.div
      className="intro-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <>
        <motion.h1>Welcome to Care Link!</motion.h1>
        <motion.p>Sign in/up as:</motion.p>

        <div className="button-container">
          <Link to="/signup">
            <motion.button
              className="intro-button"
              variants={buttonVariants}
              whileHover="hover"
              onClick={() => setSelectForm(true)}
            >
              Doctor
            </motion.button>
          </Link>

          <motion.button
            className="intro-button"
            variants={buttonVariants}
            whileHover="hover"
          >
            Reception
          </motion.button>

          <motion.button
            className="intro-button"
            variants={buttonVariants}
            whileHover="hover"
          >
            Lab Assistant
          </motion.button>
        </div>
      </>
    </motion.div>
  );
}
