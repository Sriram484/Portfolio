
import profile from './profile.jpg';
import { faAppStore, faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';

export const navigation = {
  name: "Sriram",
  links: [
    {
      title: "About",
      link: "#about",
    },
    {
      title: "Projects",
      link: "#projects",
    },
    {
      title: "Contact",
      link: "#contact",
    },
    {
      title: "Links",
      link: "/links",
    },
   {
    titel: "Coding Ninjas",
    link : "https://www.codingninjas.com/studio/profile/e259244b-57d5-431c-9f87-de6840676a0f"
   },
   {
    titel: "LeetCode",
    link : "https://leetcode.com/Sriram_484/"
   },
  ],
}
export const intro = {
  title: "Hey, I'm Sriram Rajkumar",
  description: "A Computer Engineer creating dynamic websites and a competitive programmer.",
  image: profile.src,
  buttons: [
    {
      title: "Contact Me",
      link: "#contact",
      isPrimary: true,
    },
    {
      title: "Resume",
      link: "",
      isPrimary: false,
    },
  ],
}

export const about = {
  title: "Who I am",
  description: [
    
"I am currently studying Bachelor of Computer Science at Sri Krishna College of Engineering and Technology. Alongside my studies, I actively participate in competitive programming, honing my skills in algorithmic problem-solving. I aspire to kickstart my career in React dynamic web development, leveraging my passion for creating engaging and interactive web experiences.",
"I'm currently focusing on practicing Data Structures and Algorithms, recognizing their importance as foundational elements in the tech industry. As the technological landscape continues to evolve, I'm eager to venture into Machine Learning, aiming to broaden my skill set and explore new horizons. In addition to honing my technical abilities, I'm committed to contributing to the developer community by open-sourcing my projects (albeit a few, as I'm still in the initial stages of building them) and offering mentorship to my peers both offline and online, through platforms like meets and forums.",  
"When I'm not programming, I indulge in my hobbies which include watching anime and shows, reading short stories, and enjoying comedy. I also enjoy meeting new people and expanding my network, finding joy in connecting with others who share similar interests and passions.",
  ],
}

export const work = {
  title: "What I do",
  cards: [
    {
      title: "Web Development",
      description: "I create responsive static websites using Reactjs.",
      icons: null,
    },
    {
      title: "Competitive Programmer",
      description: "Adept at solving CodeNinja and LeetCode challenges, proudly acing several contests and problems.",
      icons: null,
    }
  ],
}

export const projects = {
  title: "Projects",
  cards: [
    {
      title: "Chatrayans",
      description: "Chatrayans features dual login capabilities for clients and admins, offering tailored interfaces. Integrated with Firebase, it ensures real-time data sync, secure authentication, and efficient storage, delivering a seamless experience for all users, enhancing functionality, and reliability.",
      icons: [
        {
          icon: faAppStore,
          link: "https://subtle-kringle-41693e.netlify.app/",
        },
        {
          icon: faGithub,
          link: "https://github.com/Sriram484/Chatrayans",
        },
      ]
    },
    {
      title: "Portfolio",
      description: 
      "I've crafted my own portfolio using ReactJS, showcasing my projects and skills as a software developer/freelancer. It offers a personalized platform to exhibit my work effectively.",
      icons: [
        {
          icon: faAppStore,
          link: "https://subtle-kringle-41693e.netlify.app/",
        },
        {
          icon: faGithub,
          link: "https://github.com/Sriram484/Portfolio",
        },
      ]
      
    },
  ],
}

export const contact = {
  title: "Get in touch",
  description: "Coffee Chat! Feel free to reach out directly by email at sriram.rajkumart@gmail.com.Alternatively, you can also reach out to me through LinkedIn for further communication",
  buttons: [
    {
      title: "Email Me",
      link: "mailto:sriram.rajkumart@gmail.com",
      isPrimary: true,
    },
    {
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/sriram-r-50ba10248/",
      isPrimary: false,
    },
  ]
}


export const SEO = {

  title: "Sriram Rajkumar | Computer Engineer | Competitive Programmer | Reactjs developer",
  description: "A Computer Engineer creating dynamic websites and a competitive programmer.",
  image: profile.src,
}

export const links = {
  image: profile.src,
  title: "@sriramrajkumar",
  description: "Computer Engineer | Competitive Programmer | Reactjs Developer",
  cards: [
    {
      title: "My website",
      link: "https://sriramrajkumar.netlify.app/",
    },
    {
      title: "Chatrayans",
      link: "https://subtle-kringle-41693e.netlify.app/",
    },
    {
      title: "My GitHub",
      link: "https://github.com/Sriram484",
    },
    {
      title: "My LinkedIn",
      link: "https://www.linkedin.com/in/sriram-r-50ba10248/",
    },
  ]
}