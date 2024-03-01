//  icons
import { FiTwitter, FiGithub, FiLinkedin , FiInstagram} from "react-icons/fi";

// skills images
import SkillImg1 from "./assets/img/skills/html.png";
import SkillImg2 from "./assets/img/skills/javascript.png";
import SkillImg3 from "./assets/img/skills/mongodb.png";
import SkillImg4 from "./assets/img/skills/react.png";
import SkillImg5 from "./assets/img/skills/java.png";
import SkillImg6 from "./assets/img/skills/sql.png";
// import SkillImg7 from "./assets/img/skills/python.png"

// navigation
export const navigation = [
  {
    name: "home",
    href: "home",
  },
  {
    name: "about",
    href: "about",
  },
  {
    name: "portfolio",
    href: "portfolio",
  },
  {
    name: "contact",
    href: "contact",
  },
];

// social
export const social = [
  
  {
    icon: <FiTwitter />,
    href: "https://twitter.com/amansh712",
    color: "text-blue-500",
    colorHover: "hover:text-blue-900",
  },
  {
    icon: <FiGithub />,
    href: "https://github.com/Amanshukla712",
    color: "text-white",
    colorHover: "hover:text-gray-500",
  },
  {
    icon: <FiLinkedin />,
    href: "https://www.linkedin.com/in/aman-shukla712/",
    color: "text-blue-500",
    colorHover: "hover:text-blue-900",
  },
  {
    icon: <FiInstagram/>,
    href: "https://www.instagram.com/aman_shukla712/",
    color: "text-red-500",
    colorHover: "hover:text-fuchsia-900",

    
  }
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
  
];

export const sections = [
  {
    title: "Web Developer ",
    content:
      "Proficient in web development topics such as HTML, CSS, JavaScript, React, and TypeScript.",
  },
  {
    title: "Backend Developer",
    content:
      "I have experience developing backends using Express, Node.js, Java Spring, and SQL database such as MySQL and NoSQL database such as MongoDB.",
  },
  {
    title: "Frontend Developer",
    content:
      "I am proficient in HTML, CSS, JavaScript, React and have experience developing responsive and user-friendly web applications.",
  },
];