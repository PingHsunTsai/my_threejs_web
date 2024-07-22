import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    compas_icon_white,
    usi,
    gkr,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Software Engineer",
      icon: '',
    },
    {
      title: "Computaional Design",
      icon: '',
    },
    {
      title: "3D Modeling",
      icon: mobile,
    },
    {
      title: "Geometry Optimization",
      icon: backend,
    },
    {
      title: "Robotic Fabrication",
      icon: creator,
    },
    {
      title: "Automation Itegration",
      icon: creator,
    },
    {
      title: "Computer Vision",
      icon: creator,
    },
    {
      title: "Graphic User Interface",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Software Engineer",
      company_name: "ETH Zurich BRG",
      icon: compas_icon_white,
      url: "https://block.arch.ethz.ch/brg/about",
      iconBg: "#000000",
      date: "04/2024 -- Present",
      points: [
        "Key-skill: Python, Pyside, PyOpenGL, Github",
        "Developed features for a 3D graphical user interface.",
        "Improved rendering speed by optimizing and removing redundant processes.",
        "Maintained and resolved bugs using GitHub issue tracking.",
      ],
    },
    {
      title: "Scientific Assistant",
      company_name: "ETH Zurich GKR",
      url: "https://gramaziokohler.arch.ethz.ch/",
      icon: gkr,
      iconBg: "#000000",
      date: "05/2021 -- 06/2024",
      points: [
        "Key-skill: Python, C++, Qt, ROS, Docker, Azure Kinect, Open3d, CGAL, OPCUA, CAD, Rhino, Grasshopper, Gitlab.",
        "Collaborated as a software engineer with a team of academic researchers and an \\industrial partner to develop a next-generation mobile construction robot.",
        "Worked across disciplines, including robotics engineering and material science.",
        "Implemented and researched various depth sensors and LiDAR.",
        "Developed perception methods to ensure seamless application in real-world scenarios.",
        "Optimized complex geometries to generate accurate trajectories without overfitting.",
        "Engineered and implemented APIs to facilitate seamless communication between the robot arm, OPC UA controller, and graphical user interface.",
        "Designed and planned experiments to evaluate system performance.",
        "Tutored several student projects.",
      ],
    },
    {
      title: "Software Engineer",
      company_name: "USI FMAA",
      icon: usi,
      url: "",
      iconBg: "#000000",
      date: "09/2022 -- 02/2024",
      points: [
        "key skill: Python, CAD, Rhino, grasshopper.",
        "Served as a software engineer and robotics technician.",
        "Specialized in 3D geometry for origami formwork and optimization of print paths for a 3D clay printing PhD project.",
        "Tutored several student projects.",
      ],
    },
    {
      title: "Trainee",
      company_name: "ETH Zurich GKR",
      url: "https://gramaziokohler.arch.ethz.ch/",
      icon: gkr,
      iconBg: "#000000",
      date: "09/2020 -- 04/2021",
      points: [
        "key skill: Python, Intel-RealSense, HTC Vive, CAD, Rhino, grasshopper.",
        "Served as a software developer and robotics technician.",
        "Supported AR/VR implementation.",
        "Assisted with depth sensor integration.",
        "Tutored 20 student projects.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };