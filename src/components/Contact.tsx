import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FieldValues, useForm } from "react-hook-form";
import { socialLinks } from "../data/socials";

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: FieldValues) => {
    // Handle form submission
    console.log(data);
  };

  return (
    <section id="contact" className="px-6 py-20 min-h-screen">
    <div className="mx-auto max-w-6xl">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="mb-16 font-bold text-white text-4xl md:text-5xl"
      >
        <span className="text-secondary">#</span> Contact
      </motion.h2>

      <div className="items-start gap-12 grid md:grid-cols-2">
        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6"
        >
          <div>
            <label className="block mb-2 text-gray-400">Name</label>
            <input
              {...register("name", { required: true })}
              className="bg-gray-900 p-3 border border-gray-800 focus:border-secondary rounded-lg focus:outline-none w-full text-white"
            />
            {errors.name && <span className="text-red-500 text-sm">This field is required</span>}
          </div>

          <div>
            <label className="block mb-2 text-gray-400">Email</label>
            <input
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
              className="bg-gray-900 p-3 border border-gray-800 focus:border-secondary rounded-lg focus:outline-none w-full text-white"
            />
            {errors.email && <span className="text-red-500 text-sm">Valid email is required</span>}
          </div>

          <div>
            <label className="block mb-2 text-gray-400">Message</label>
            <textarea
              {...register("message", { required: true })}
              rows={5}
              className="bg-gray-900 p-3 border border-gray-800 focus:border-secondary rounded-lg focus:outline-none w-full text-white"
            />
            {errors.message && <span className="text-red-500 text-sm">Message is required</span>}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="bg-secondary hover:bg-accent px-6 py-3 rounded-lg font-semibold text-gray-900 transition-colors"
          >
            Send Message
          </motion.button>
        </motion.form>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="space-y-8"
        >
          <div className="bg-gray-900/80 backdrop-blur-md p-6 border border-gray-800/50 rounded-xl">
            <h3 className="mb-4 font-semibold text-white text-xl font-display">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-400">
                <FaMapMarkerAlt className="text-secondary" />
                <span>Addis Ababa, Ethiopia</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <FaEnvelope className="text-secondary" />
                <span>dagijossy18@gmail.com</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/80 backdrop-blur-md p-6 border border-gray-800/50 rounded-xl">
            <h3 className="mb-4 font-semibold text-white text-xl font-display">Social Links</h3>
            <div className="flex gap-4">
              {socialLinks.slice(0, 3).map((link) => (
                   <a
                   key={link.name}
                   href={link.url}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="bg-gray-800/50 backdrop-blur-sm hover:bg-secondary/20 p-3 rounded-lg transition-all border border-gray-700/50 hover:border-secondary/30"
                   aria-label={link.aria}
                 >
                   <link.icon className="text-gray-400 hover:text-secondary text-2xl" />
                 </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
  );
};

export default Contact;
