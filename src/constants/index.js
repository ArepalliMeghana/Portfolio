import {
    creator,
    python,
    web,
    javascript,
    typescript,
    html,
    c,
    ds,
    css,
    sql,
    mysql,
    captcha,
    weather,
    goggle,
    codechefLogo,
    reactjs,
    mobile,
    tailwind,
    nodejs,
    backend,
    git,
    java,
    carrent,
    threejs,
    jobit,
    tripguide,
    jpMorgan,
    leetcodeLogo,
    servicenowLogo,
    hackerrankLogo,
    github,
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
  const experiences = [
    {
      title: "Participant, JP Morgan Code for Good 2024",
      company_name: "JP Morgan Chase & Co.",
      icon: jpMorgan,  // Replace with an actual icon or a placeholder image
      iconBg: "#383E56",   // Choose a background color or use the default one
      
      points: [
        "Collaborated with 'Team Nirvana' to develop a website for Next Skills 360, aimed at teaching coding to underserved students.",
        "Developed a blogging system, integrated SEO strategies to increase user engagement, and built a chatbot for non-human query solving.",
        "Used the MERN stack for development and worked in an agile environment with peer pairing and code committing.",
        "Presented the solution after 24 hours of intense work. Though not advancing to the final round, gained valuable experience in teamwork and creative problem-solving."
      ],
    },
    {
      title: "LeetCode Problem Solving",
      company_name: "Self-Study",
      icon: leetcodeLogo,  // Replace with an actual icon or a placeholder image
      iconBg: "#FF9900",   // LeetCode's branding color
      
      points: [
        "Successfully solved 300+ problems on LeetCode, strengthening skills in algorithms, data structures, and time complexity analysis.",
        "Covered a wide range of topics, including arrays, linked lists, dynamic programming, and graph algorithms.",
        "Consistently improved problem-solving efficiency and contributed to understanding complex problem-solving techniques."
      ],
    },
    {
      title: "5-Star Rating on HackerRank",
      company_name: "Self-Study",
      icon: hackerrankLogo,  // Replace with an actual icon or a placeholder image
      iconBg: "#2EC866",     // HackerRank's branding color
      
      points: [
        "Achieved a 5-star rating on HackerRank by completing a variety of coding challenges in algorithms, data structures, and SQL.",
        "Enhanced problem-solving skills and gained hands-on experience with competitive coding problems.",
        "Gained proficiency in a range of coding concepts and strengthened my understanding of technical challenges."
      ],
    },
    {
      title: "ServiceNow Modules Completion",
      company_name: "Self-Study",
      icon: servicenowLogo,  // Replace with an actual icon or a placeholder image
      iconBg: "#0072C6",     // ServiceNow's branding color
      
      points: [
        "Completed various ServiceNow modules, learning to build and deploy applications on the ServiceNow platform.",
        "Focused on workflow automation, security management, and scripting within ServiceNow.",
        "Developed a strong understanding of IT service management (ITSM) and cloud-based platforms."
      ],
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Software Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Problem Solver",
      icon: creator,
    },
  ];
  
  const technologies = [
    
    {
      name:"Java",
      icon:java,
    },
    {
      name:"Python",
      icon:python,
    },
    {
      name:"C",
      icon:c,
    },
    {
      name:"Ds",
      icon:ds,
    },
    {
      name:"mysql",
      icon:mysql,
    },
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
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    
   
    
  ];
  
  const testimonials = [
    {
      link: "https://leetcode.com/u/MEGHANA_AREPALLI/",
      logo: leetcodeLogo,
      name: "LeetCode",
    },
    {
      link: "https://www.hackerrank.com/profile/vssmegha",
      logo: hackerrankLogo,
      name: "HackerRank",
    },
    {
      link: "https://github.com/ArepalliMeghana",
      logo: github,
      name: "Github",
    },
    {
      link: "https://www.codechef.com/users/meghanaare",
      logo: codechefLogo,
      name: "CodeChef",
    },
    {
      link: "https://www.cloudskillsboost.google/public_profiles/06186817-10d5-41e7-913d-b7d9e47326b1",
      logo: goggle,
      name: "Google Cloud Skills Boost",
    }
  ];
  
  const projects = [
    
    
    {
      name: "Awwwards Winning Website ",
      description:
        "A responsive web application designed to showcase modern web design principles and best practices. The project emphasizes user experience and aesthetic appeal, making it a standout example of contemporary web development.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "html",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/ArepalliMeghana/AWARDWINNER",
    },
    {
      name: "Coronary Artery Disease Prediction",
      description:
        "This project predicts the likelihood of Coronary Artery Disease (CAD) using machine learning models trained on patient data. The system utilizes cleaned datasets and a pre-trained model to assess risks and generate insights.",
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
      source_code_link: "https://github.com/ArepalliMeghana/CAD-Prediction",
    },
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
      source_code_link: "https://github.com/ArepalliMeghana/CAR_RENT",
    },
    {
      name: "WeatherWise",
      description:
        "WeatherWise is a web application that provides real-time weather information based on user input or their current location. The app features a visually appealing interface with animated background images, temperature wave graphs, and detailed weather reports.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: weather,
      source_code_link: "https://github.com/ArepalliMeghana/weatherwise",
    },
    
    {
      name: "Captcha Recognition",
      description:
        "This project implements a deep learning model for recognizing text in CAPTCHA images using a combination of Convolutional Neural Networks (CNN) and Recurrent Neural Networks (RNN). The system achieves high accuracy in decoding CAPTCHAs through a sophisticated architecture that combines image processing and sequence recognition.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        
      ],
      image: captcha,
      source_code_link: "https://github.com/ArepalliMeghana/captcha-recognition",
    },
  ];
  
  export { services, technologies, projects,experiences,testimonials };