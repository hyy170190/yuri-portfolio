import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 15,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Yok Hui Ying</motion.h2>
          <motion.h1 variants={textVariants}>Software Engineer</motion.h1>
          {/* <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>
              See the Latest Works
            </motion.button>
            <motion.button variants={textVariants}>Contact Me</motion.button>
          </motion.div> */}
          <motion.p variants={textVariants}>
            A software engineering fresh graduate seeking a Software Tester/QA
            position to utilize my software engineering background and hands-on
            experience in software testing to ensure product quality and
            contribute to team success.
          </motion.p>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="./yuri-portfolio/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Hello World !
      </motion.div>
      <div className="imageContainer">
        <img src="./yuri-portfolio/yuri.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
