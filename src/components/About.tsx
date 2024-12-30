import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaCogs, FaRocket, FaUsers } from "react-icons/fa";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Animation triggers only once
    threshold: 0.2, // Animation triggers when 20% of the component is visible
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const features = [
    {
      icon: <FaCogs className="mr-3 text-xl" />,
      title: "Problem Solver",
      description:
        "Turning complex challenges into elegant solutions through creative thinking and technical expertise.",
    },
    {
      icon: <FaRocket className="mr-3 text-xl" />,
      title: "Innovator",
      description:
        "Always exploring new technologies and approaches to build better digital experiences.",
    },
    {
      icon: <FaUsers className="mr-3 text-xl" />,
      title: "Team Player",
      description:
        "Experienced in collaborating with cross-functional teams to deliver outstanding results.",
    },
  ];

  return (
    <motion.section
      ref={ref}
      id="about"
      className="max-w-[85rem] py-32 px-8 relative overflow-hidden mx-auto"
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <h2 className="text-polo-200 text-4xl mb-12 relative inline-block">
        About Me
        <span className="absolute bottom-[-10px] left-0 w-3/5 h-0.5 bg-gradient-to-r from-polo-500 to-transparent"></span>
      </h2>
      <svg
        className="absolute top-0 right-10 w-[25rem] h-[25rem] opacity-5 text-white"
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
      >
        <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
          <path
            d="M 10 0 L 0 0 0 10"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          />
        </pattern>
        <rect width="100" height="100" fill="url(#grid)" />
      </svg>
      <div className="max-w-[65rem] mx-auto md:mx-14 ">
        <p className="text-[1.2rem] leading-[1.8] mb-[3rem] text-polo-200 text-pretty">
          I'm Dagmawi Yosesph, a Full Stack Developer with a degree in Computer
          Science from the HilCoE School of Science and Technology. Passionate
          about creating innovative solutions, I specialize in building web and
          mobile applications using technologies like React, Tailwind, and
          Sequelize. With a strong foundation in both front-end and back-end
          development, I enjoy working in teams or independently to deliver
          high-quality projects. I am always eager to learn and improve, and I
          have experience with tools like Axios, Redux, and JavaScript
          frameworks. My goal is to bring concepts to life through code while
          ensuring clean, efficient, and user-friendly solutions. Currently, I'm
          focused on creating a website builder platform that allows users to
          design responsive websites with ease, and I’m always exploring new
          ways to enhance both the user and developer experience.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-polo-900 to-polo-800 p-[2rem] rounded-2xl"
              variants={itemVariants}
            >
              <h3 className="text-lg font-semibold mb-4 text-polo-200 flex items-center">
                {feature.icon}
                {feature.title}
              </h3>
              <p className="text-polo-300 leading-[1.6]">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default About;
