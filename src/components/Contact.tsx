import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Contact = () => {
  // Intersection observer to trigger animation on view
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="max-w-6xl py-24 px-6 mx-auto relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <h2 className="text-polo-200 text-4xl mb-12 relative inline-block">
        Contact Me
        <span className="absolute bottom-[-10px] left-0 w-3/5 h-0.5 bg-gradient-to-r from-polo-500 to-transparent"></span>
      </h2>

      {/* Contact Form */}
      <motion.form className="flex flex-col gap-6 max-w-[50rem] mx-auto" variants={itemVariants}>
        <motion.div className="col-span-1">
          <label htmlFor="name" className="text-polo-100 block mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full p-[1.2rem] bg-gradient-to-r from-polo-900 to-polo-800 border border-polo-700 rounded-lg text-polo-100 focus:outline-none focus:ring-2 focus:ring-polo-500"
            placeholder="Enter your name"
          />
        </motion.div>
        <motion.div className="col-span-1">
          <label htmlFor="email" className="text-polo-100 block mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-[1.2rem] bg-gradient-to-r from-polo-900 to-polo-800 border border-polo-700 rounded-lg text-polo-100 focus:outline-none focus:ring-2 focus:ring-polo-500"
            placeholder="Enter your email"
          />
        </motion.div>
        <motion.div className="col-span-2">
          <label htmlFor="message" className="text-polo-100 block mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full p-[1.2rem] bg-gradient-to-r from-polo-900 to-polo-800 border border-polo-700 rounded-lg text-polo-100 focus:outline-none focus:ring-2 focus:ring-polo-500"
            placeholder="Type your message here"
          ></textarea>
        </motion.div>
        <motion.div className="col-span-2 text-right">
          <button
            type="submit"
            className="bg-gradient-to-r from-polo-500 to-polo-600 text-polo-50 p-5 rounded-lg cursor-pointer transition-all duration-300 ease-in-out hover:transform hover:translate-y-[-2px] hover:shadow-lg w-full"
          >
            Send Message
          </button>
        </motion.div>
      </motion.form>
    </motion.section>
  );
};

export default Contact;
