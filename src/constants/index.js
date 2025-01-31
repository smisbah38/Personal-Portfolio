import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";

export const HERO_CONTENT = `I am a passionate frontend developer with experience in crafting scalable web applications. I have developed proficiency in frontend technologies such as ReactJS, TailwindCSS, Bootstrap, HTML, CSS, and JavaScript. I am also expanding my skills in backend technologies with the goal of becoming a full-stack developer. My aim is to leverage my skills to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const EXPERIENCES = [
  {
    year: "1st November 2023 - 31st January 2024",
    role: "Intern Developer",
    company: "Zed and Zed IT",
    description: `Developed a file management application for office use using React, Node.js, and Firebase. Collaborated effectively with other interns and successfully met project deadlines set by the assigned supervisor. Provided daily updates on project progress to ensure transparency and alignment with team goals.  `,
    technologies: ["Javascript", "React.js", "Node.js", "Firebase"],
  },
];

export const PROJECTS = [
  {
    title: "Evergreen E-commerce Site",
    image: project1,
    description:
      "The e-commerce website is fully functional, incorporating key features such as user authentication, product listing, product filtering, shopping cart, payment method selection, and more. Additionally, an admin panel has been developed, enabling administrators to manage products, update delivery statuses, and view user orders.",
    technologies: ["React", "Express", "Node.js", "MongoDB", "TailwindCSS"],
    link: "https://evergreen-pied.vercel.app/",
    linkName: "Evergreen Live Link",
  },
  {
    title: "Fourthgear Car Website",
    image: project3,
    description:
      "The car dealership website is fully functional, featuring user authentication, product listings, and a review system. It includes an admin panel that allows efficient management of car listings, product updates, and review moderation. The platform ensures a smooth and user-friendly experience for both customers and administrators.",
    technologies: [
      "ReactJS",
      "Express",
      "NodeJS",
      "EmailJS",
      "Tailwind CSS",
      "MongoDB",
    ],
    link: "https://fourthgearbd.vercel.app/",
    linkName: "Fourthgear Live Link",
  },
  {
    title: "Open Job",
    image: project2,
    description:
      "The platform offers a streamlined experience for both employers and job seekers. Employers can easily create and manage job postings, detailing roles, responsibilities, and qualifications. Job seekers can browse and filter job listings based on their preferences and apply directly to positions that match their skills and career aspirations.",
    technologies: ["React", "TailwindCSS", "HTML", "CSS", "JSON Server"],
    link: "https://job-site-dusky.vercel.app/",
    linkName: "Open Job Live Link",
  },
];

export const CONTACT = {
  address: "Matri Chaya, Commissioner Road, Kallyanpur, Mirpur, Dhaka ",
  phoneNo: "+880 1680004310 ",
  email: "syedmisbah38@gmail.com",
};
