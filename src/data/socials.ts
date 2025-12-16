
import {
    FaFilePdf,
    FaGithub,
    FaLinkedin,
    FaMedium,
    FaTwitter,
  } from "react-icons/fa";
  import { SiLeetcode } from "react-icons/si";
  
  export const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/dagijosi",
      icon: FaGithub,
      aria: "Visit my GitHub profile",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/dagmawi-yoseph-4b4aa6296",
      icon: FaLinkedin,
      aria: "Connect with me on LinkedIn",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/yourhandle",
      icon: FaTwitter,
      aria: "Follow me on Twitter",
    },
    {
      name: "Medium",
      url: "https://medium.com/@yourusername",
      icon: FaMedium,
      aria: "Read my articles on Medium",
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/yourprofile",
      icon: SiLeetcode,
      aria: "View my LeetCode solutions",
    },
    {
      name: "Resume",
      url: "/public/resume.pdf",
      icon: FaFilePdf,
      aria: "Download my resume",
    },
  ];
