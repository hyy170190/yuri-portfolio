import { useRef } from "react";
import "./portfolio.scss";
import {
  color,
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

const items = [
  {
    id: 1,
    title: "Flood Relief Goods Donation Web App",
    img: "./donation app.jpg",
    desc: "Build in Laravel framework. Donors, whether individuals or NGOs, can view specific requirements posted by the evacuation center staff and contribute essential items like food, clothing, and medicine.",
  },
  {
    id: 2,
    title: "Online Grocery Shopping Mobile App",
    img: "./grocery app.png",
    desc: "Built in React Native, with features including user profile, shopping cart, order, etc.",
  },
  {
    id: 3,
    title: "Automation Testing on Food Ordering System",
    img: "./testing.png",
    desc: (
      <p>
        Build in Java for the automation testing practicing purpose. Click{" "}
        <a
          href="https://github.com/hyy170190/kiah-ordering"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "underline" }}
        >
          here
        </a>{" "}
        for more details.
      </p>
    ),
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            {/* <button>See Demo</button> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>My Projects</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
