import { useRef } from "react";
import "./skills.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Skills = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      {/* <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div> */}
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="./yuri-portfolio/books.jpg" alt="" />
          <h1>
            <motion.b whileHover={{ color: "#cdd27e" }}>Learn</motion.b> As
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "#cdd27e" }}>Live</motion.b> Forever.
          </h1>
          {/* <button>WHAT WE DO?</button> */}
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: " #7ea4b0", color: "black" }}
        >
          <h2>Software QA</h2>
          <br />
          <p>
            <ul>
              <li>Manual Testing</li>
              <li>Automation Testing</li>
              <li>Selenium WebDriver with Java</li>
              <li>QA Documentation</li>
            </ul>
          </p>
          {/* <button>Go</button> */}
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: " #7ea4b0", color: "black" }}
        >
          <h2>Others</h2>
          <br />
          <p>
            <ul>
              <li>Java</li>
              <li>Python</li>
              <li>Git</li>
              <li>GitHub</li>
            </ul>
          </p>
          {/* <button>Go</button> */}
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: " #7ea4b0", color: "black" }}
        >
          <h2>Web Development</h2>
          <br />
          <p>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>PHP</li>
              <li>Laravel</li>
              <li>React</li>
              <li>Node.js</li>
              <li>MySQL</li>
            </ul>
          </p>
          {/* <button>Go</button> */}
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: " #7ea4b0", color: "black" }}
        >
          <h2>Mobile App Development</h2>
          <br />
          <p>
            <ul>
              <li>React Native</li>
              <li>MySQL</li>
            </ul>
          </p>
          {/* <button>Go</button> */}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Skills;
