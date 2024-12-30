import { FaCogs, FaRocket, FaUsers } from 'react-icons/fa';

const About = () => {
  const features = [
    {
      icon: <FaCogs className="mr-3 text-xl" />,
      title: 'Problem Solver',
      description:
        'Turning complex challenges into elegant solutions through creative thinking and technical expertise.',
    },
    {
      icon: <FaRocket className="mr-3 text-xl" />,
      title: 'Innovator',
      description:
        'Always exploring new technologies and approaches to build better digital experiences.',
    },
    {
      icon: <FaUsers className="mr-3 text-xl" />,
      title: 'Team Player',
      description:
        'Experienced in collaborating with cross-functional teams to deliver outstanding results.',
    },
  ];

  return (
    <section className="max-w-[85rem] py-32 px-8 relative overflow-hidden mx-auto">
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
          I'm a passionate full-stack developer with 5 years of experience
          crafting web applications that make a difference. My journey in tech
          started with a fascination for problem-solving and has evolved into a
          career building intuitive, scalable solutions.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-polo-900 to-polo-800 p-[2rem] rounded-2xl"
            >
              <h3 className="text-lg font-semibold mb-4 text-polo-200 flex items-center">
                {feature.icon}
                {feature.title}
              </h3>
              <p className="text-polo-300 leading-[1.6]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;