import {
    creator,
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
    eth,
    threejs,
    rosp,
    compas_viewer,
    ribbed_slab,
    irp,
    ml_rosp,
    concrete_canoe,
    bachelor_project,
    bachelor_thesis,
    master_thesis,
    tku,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
      type: 'anchor',
    },
    {
      id: "work",
      title: "Project",
      type: 'anchor',
    },
    {
      id: "contact",
      title: "Contact",
      type: 'anchor',
    },
    {
      id: "github",
      title: "Github",
      type: "URL",
      url: 'https://github.com/PingHsunTsai',
    },
    {
      id: "profolio",
      title: "Profolio",
      type: "URL",
      url: 'https://drive.google.com/file/d/15aZcPAWZLu__rxBrpDgF-N_-74-vq90M/view?usp=sharing',
    },
  ];
  
  const services = [
    {
      title: "Software Engineer",
      icon: '',
      skill: "Key-skill: Python, Java, C++, Docker, Git",
    },
    {
      title: "3D Modeling",
      icon: '',
      skill: "Key-skill: Rhino3D, Maya, Grasshopper",
    },
    {
      title: "Robotic Fabrication",
      icon: '',
      skill: "Key-skill: ROS, UR-Robot, ABB, KUKA",
    },
    {
      title: "Digital Fabrication",
      icon: '',
      skill: "Key-skill: CAD, CNC, 3D-Printing",
    },
    {
      title: "Automation Itegration",
      icon: '',
      skill: "Key-skill: OPCUA",
    },
    {
      title: "Computer Vision",
      icon: '',
      skill: "Key-skill: Open3D, OpenCV, CGAL, Azure-Kinect, Intel-RealSense, LiDar, HTV-Vive",
    },
    {
      title: "Graphic User Interface",
      icon: creator,
      skill: "Key-skill: Qt, RQT, Pyside6, PyOpenGL, ReactJS, theeJS, Adobe Suite",
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
      iconBg: "#FFFFFF",
      date: "04/2024 -- Present",
      points: [
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
      title: "Scientific Assistant",
      company_name: "USI FMAA",
      icon: usi,
      url: "",
      iconBg: "#FFFFFF",
      date: "09/2022 -- 02/2024",
      points: [
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
        "Key-Skill: Python, Intel-RealSense, HTC Vive, CAD, Rhino, grasshopper.",
        "Served as a software developer and robotics technician.",
        "Supported AR/VR implementation.",
        "Assisted with depth sensor integration.",
        "Tutored 20 student projects.",
      ],
    },
  ];

  const study_experiences = [
    {
      title: "ETH Zurich",
      company_name: "MAS Architecture and Digital Fabrication",
      icon: eth,
      url: "https://www.masdfab.arch.ethz.ch/",
      iconBg: "#ffffff",
      date: "09/2019 -- 09/2020",
      points: [
        "Master Thesis: RPS: Crafting Surfaces with Adaptive Thin-Layer Printing",
      ],
    },
    {
      title: "TamKang University",
      company_name: "Bachelor of Architecture",
      url: "https://www.tku.edu.tw/",
      icon: tku,
      iconBg: "#ffffff",
      date: "09/2013 -- 09/2018",
      points: [
        "Bachelor Thesis: RPS: Continuous Metal Folding",
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
      name: "Robotic On-Site Plastering",
      skill: "Key-Skill: Python, C++, UR-Robot, Qt, ROS, Docker, Azure Kinect, CGAL, Open3D, OpenCV, OPCUA, CAD, Gitlab.",
      description:
        `This project presents continuous, mobile Robotic Plaster Spraying (RPS)
         a thin-layer, spray-based printing-in-motion technique using cementitious plaster 
         realized on a prototypical construction site. Resulting in a stable prototype and control system.`,
      tags: "GKR Project",
      image: rosp,
      source_code_link: "https://www.sciencedirect.com/science/article/pii/S0926580522005040",
    },
    {
      name: "Compas Viewer",
      skill: "Key-Skill: Python, Pyside6, PyOpenGL, Github",
      description:
        `COMPAS Viewer is an open-source tool designed for the visualization 
        and interaction with computational models and data structures in the COMPAS framework.`,
      tags: "BRG Project",
      image: compas_viewer,
      source_code_link: "https://github.com/compas-dev/compas_viewer",
    },
    {
      name: "Sustainable Ribbed Slabs With 3D Printed Form-work",
      skill: "Key-Skill: Python, ABB, Rhino, grasshopper, 3D-Printing",
      description:
        `The project RIBB3D challenges the conventional design of floor slabs and allows to reinforced
         concrete structures in a material-efficient manner. By using robotic 3D printing to create customized
          plastic form-work for an uncommon two-way ribbed floor slab, the new approach uses 40 percent 
          less concrete than a conventional solid slab, with no compromise on performance.`,
      tags: "GKR Project",
      image: ribbed_slab,
      source_code_link: "https://kaufmann.ibk.ethz.ch/research/selected-research-projects/RIBB3D.html",
    },
    {
      name: "MAS Dfab T2 Project: Intuitive Robotic Plastering",
      skill: "Key-Skill: Python, UR-Robot, Rhino, grasshopper, Intel-RealSense, HTV-Vive",
      description:
        `The extent of thin-layer printing thesis combined with the interactive computational model and
         design procedure of IRoP, enables users to design, preview, and record a set of spray paths 
         (robot trajectories) on-site - projected onto the walls of the room in real-time.`,
      tags: "Teaching Project",
      image: irp,
      source_code_link: "https://videos.files.wordpress.com/BV8YGQzu/intuitive-robotic-plastering_mp4_hd.mp4",
    },
    {
      name: "SDSC Master Thesis: ML-Based Predictive Modeling for Robotic Plastering",
      skill: "Key-Skill: Python, GNN",
      description:
        `This project aims to develop an ML-based design and fabrication workflow for a robotic on-site plastering process
         a real-world application. For this, data is collected during the robotic plastering process by 
         a 3D depth camera, comprising the fabrication parameters (i.e., velocity and distance of spraying) 
         as well as the acquired surface geometry.`,
      tags: "Teaching Project",
      image: ml_rosp,
      source_code_link: "/underconstruction",
    },
    {
      name: "PCBM Bachelor thesis: Concrete Canoe",
      skill: "Key-Skill: Python, Rhino, grasshopper, CAD",
      description:
        `Tutoring bachelor’s thesis aims to explore the potential of using ultra-thin paper as a 
        formwork for the spraying of fiber-reinforced concrete. To explore this, it was targeted to produce 
        a fully functional canoe for the Concrete Canoe Race on the 13.04.2023 in Delft (NL).`,
      tags: "Teaching Project",
      image: concrete_canoe,
      source_code_link: "/underconstruction",
    },
    {
      name: "RPS: Crafting Surfaces with Adaptive Thin-Layer Printing",
      skill: "Key-Skill: Python, UR-Robot, Open3D, Intel-RealSense, DNN",
      description:
        `This method describes the experimental setup and the initial
        results of the data collection method involving systematic studies with physical
        testing, allowing to develop model to predict and visualize the complex-to-
        simulate material behavior, which might eventually enable to design with the
        plasticity of this material in a digital design tool`,
      tags: "Master Thesis",
      image: master_thesis,
      source_code_link: "https://www.researchgate.net/publication/354186856_Robotic_Plaster_Spraying_Crafting_Surfaces_with_Adaptive_Thin-Layer_Printing",
    },
    {
      name: "Continuous Metal Folding",
      skill: "Key-Skill: Python, KUKA, Rhino, grasshopper, CAD, CNC",
      description:
        `This project involved the creation of an aluminum-thin shell pavilion, 
        a self-standing structure crafted through a parametric fusion of folding patterns 
        and structural optimization algorithms.`,
      tags: "Bachelor Thesis",
      image: bachelor_thesis,
      source_code_link: "https://vimeo.com/272080646",
    },
    {
      name: "Free-form To Model",
      skill: "Key-Skill: Python, Rhino, grasshopper, CAD",
      description:
        `This workshop, based on my bachelor thesis, guides students through the design workflow, including computational design, 
        geometry optimization, fabrication, and presenting ideas with Grasshopper and Python, developing a comprehensive skill set 
        in modern architectural techniques.`,
      tags: "Bachelor Project",
      image: bachelor_project,
      source_code_link: "https://drive.google.com/file/d/1W-a8TuavSwadO2WeMSb4VP4dlf_cIR84/view?usp=drive_link",
    },
  ];

  export { services, technologies, experiences, testimonials, projects, study_experiences };