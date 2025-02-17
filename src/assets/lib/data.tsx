// import adobexdicon from "../../assets/icons/adobexdicon.svg";
// import canvaicon from "../../assets/icons/canvaicon.svg";
import figmaicon from "../../assets/icons/figmaicon.svg";
import htmlicon from "../../assets/icons/htmlicon.svg";
import cssicon from "../../assets/icons/cssicon.svg";
import javascripticon from "../../assets/icons/javascripticon.svg";
import typescripticon from "../../assets/icons/typescripticon.svg";
import reacticon from "../../assets/icons/reacticon.svg";
// import nextjsicon from "../../assets/icons/nextjsicon.svg";
import nodejsicon from "../../assets/icons/nodejsicon.svg";
import tailwindcssicon from "../../assets/icons/tailwindicon.svg";
import php from "../../assets/icons/php.svg";
import mongodbicon from "../../assets/icons/mongoicon.svg";
import tail from "../../assets/icons/tailwindicon.svg";
import expressicon from "../../assets/icons/expressicon.svg";
import sassscssicon from "../../assets/icons/sassicon.svg";
// import trelloicon from "../../assets/icons/trelloicon.svg";
// import apiicon from "../../assets/icons/apiicon.svg";
// import axiosicon from "../../assets/icons/axiosicon.svg";
// import spotifyicon from "../../assets/icons/spotifyicon.svg";
// import netlifyicon from "../../assets/icons/netlifyicon.svg";
// import rendericon from "../../assets/icons/rendericon.svg";
// import jwticon from "../../assets/icons/jwticon.svg";
import wordpressicon from "../../assets/icons/wordpressicon.svg";
// import shopifyicon from "../../assets/icons/shopifyicon.svg";
// import webflowicon from "../../assets/icons/webflowicon.svg";
import tastyMockup from "../../assets/img/tasty_mockup.webp";
import instorMockup from "../../assets/img/instor_mockup.webp";
import silentmoonMockup from "../../assets/img/silentmoon_mockup.webp";
import profilepicture from "../img/me2.webp";
import caricon from "../../assets/icons/car-icon.svg";
import travelicon from "../../assets/icons/travel-icon.svg";
import hardwareicon from "../../assets/icons/hardware-icon.svg";
// import nextjsiconwhite from "../../assets/icons/nextjsiconwhite.svg";
import expressiconwhite from "../../assets/icons/expressiconwhite.svg";
import { GoHome, GoPerson, GoMail, GoStack, GoProject } from "react-icons/go";
import { FiGithub, FiLink, FiLinkedin, FiMail } from "react-icons/fi";
import Imprint from "../../components/Imprint";
import Privacy from "../../components/Privacy";

export const headerIntroData = {
  title: {
    ne: "नमस्ते, म प्रसिद्ध अधिकारी",
    en: "Hi, I'm Prasiddha Adhikari",
  },
  subtitle: "Fullstack Developer",
  description: {
    ne: "म प्रसिद्ध हुँ, एक फुलस्ट्याक विकासकर्मी जसको लक्ष्य मेरो करियरलाई अगाडि बढाउनु र प्रेरणादायक परियोजनामा सहभागी हुनु हो। यहाँ म मेरा काम र वेब विकासप्रति मेरो रुचि प्रस्तुत गर्दछु। आउनुहोस् हामी सँगै डिजिटल समाधानहरू सिर्जना गरौं र भविष्य निर्माण गरौं!",
    en: "I'm Prasiddha, a fullstack developer with the goal of advancing my career and participating in inspiring projects. Here I present my work and my passion for web development. Let's shape digital solutions together and shape the future!",
  },
  buttons: [
    {
      name: "Contact",
      label: {
        ne: "मलाई सम्पर्क गर्नुहोस्",
        en: "Contact me",
      },
      icon: FiMail,
      color: "main-btn",
    },
    {
      name: "Projects",
      label: {
        ne: "मेरे परियोजनाहरू",
        en: "My Projects",
      },
      icon: FiGithub,
      color: "secondary-btn",
    },
  ],
  profilepicture: profilepicture,
} as const;

export const projectsData = [
  {
    title: "GoodVibes",
    description:
      "Eine Rezepte App, die wir als Team mit React und der MealDB API gebaut haben. Ich war der Front-End Entwickler und habe Features wie Voice Search oder Print to PDF programmiert. Das Design wurde mit Figma erstellt. Die Website ist responsive und mobile-optimiert.",
    description_EN:
      "A recipe app that we built as a team with React and the MealDB API. I was the front-end developer and programmed features like voice search or print to PDF. The design was created with Figma. The website is responsive and mobile-optimized.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "Tailwind CSS", icon: tail },
      { name: "JavaScript", icon: javascripticon },
      { name: "React", icon: reacticon },
      { name: "PHP", icon: php },
      { name: "Figma", icon: figmaicon },
    
    ],
    image: tastyMockup,
    deploymenturl: "https://prasiddha-adhikari.github.io/goodvibes/",
    githuburl: "https://github.com/Prasiddha-Adhikari/goodvibes",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#70B9BE",
    },
  },
  {
    title: "RR Travels",
    description:
      "Eine Yoga und Meditations App, die wir als Team mit React, MongoDB, Express und Node.js gebaut haben. Meine Aufgabe als Gitmaster und Backend Entwickler bestand darin, das Backend mit Anbindung anhand einer Restful API zu programmieren und die Datenbank in MongoDB zu modellieren.",
    description_EN:
      "A yoga and meditation app that we built as a team with React, MongoDB, Express and Node.js. My task as a gitmaster and backend developer was to program the backend with connection using a restful API and to model the database in MongoDB.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "Tailwind CSS", icon: tail },
      { name: "JavaScript", icon: javascripticon },
      { name: "React", icon: reacticon },
      { name: "PHP", icon: php },
      { name: "Figma", icon: figmaicon },
   
    ],
    image: silentmoonMockup,
    deploymenturl: "https://prasiddha-adhikari.github.io/rr_Travels/",
    githuburl: "https://github.com/Prasiddha-Adhikari/rr_Travels",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#FFD5BD",
    },
  },
  {
    title: "Mont Education",
    description:
      "Eine Möbel-Organizer App, die wir als Duo-Team mit React, MongoDB, Express und Node.js programmiert haben. Als Gitmaster habe ich die Verknüpfung des Frontends mit dem Backend und die Datenbankmodellierung übernommen. Die App ist responsive und mobile-optimiert.",
    description_EN:
      "A furniture organizer app that we programmed as a duo team with React, MongoDB, Express and Node.js. As a gitmaster, I took over the connection of the frontend to the backend and the database modeling. The app is responsive and mobile-optimized.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "React", icon: reacticon },
      { name: "PHP", icon: php },
      { name: "Tailwind CSS", icon: tail },
      { name: "Figma", icon: figmaicon },
    
    ],
    image: instorMockup,
    deploymenturl: "https://prasiddha-adhikari.github.io/mont/",
    githuburl: "https://github.com/Prasiddha-Adhikari/mont",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#E3964A",
    },
  },
  {
    title: "Star Electrical",
    description:
      "Eine Möbel-Organizer App, die wir als Duo-Team mit React, MongoDB, Express und Node.js programmiert haben. Als Gitmaster habe ich die Verknüpfung des Frontends mit dem Backend und die Datenbankmodellierung übernommen. Die App ist responsive und mobile-optimiert.",
    description_EN:
      "A furniture organizer app that we programmed as a duo team with React, MongoDB, Express and Node.js. As a gitmaster, I took over the connection of the frontend to the backend and the database modeling. The app is responsive and mobile-optimized.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "React", icon: reacticon },
      { name: "PHP", icon: php },
      { name: "Tailwind CSS", icon: tail },
      { name: "Figma", icon: figmaicon },
     
    ],
    image: instorMockup,
    deploymenturl: "https://starelectrical.com.np/",
    githuburl: "https://github.com/Prasiddha-Adhikari/star_electrical",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#E3964A",
    },
  },
  {
    title: "Onpoint Education",
    description:
      "Eine Möbel-Organizer App, die wir als Duo-Team mit React, MongoDB, Express und Node.js programmiert haben. Als Gitmaster habe ich die Verknüpfung des Frontends mit dem Backend und die Datenbankmodellierung übernommen. Die App ist responsive und mobile-optimiert.",
    description_EN:
      "A furniture organizer app that we programmed as a duo team with React, MongoDB, Express and Node.js. As a gitmaster, I took over the connection of the frontend to the backend and the database modeling. The app is responsive and mobile-optimized.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "React", icon: reacticon },
      { name: "PHP", icon: php },
      { name: "Tailwind CSS", icon: tail },
      { name: "Figma", icon: figmaicon },
  
    ],
    image: instorMockup,
    deploymenturl: "http://onpointeducation.edu.np/",
    githuburl: "https://github.com/Prasiddha-Adhikari/onpoint",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#E3964A",
    },
  },
] as const;

export const liveTickerData = {
  content: {
    ne: "Github मा थप परियोजनाहरू",
    en: "More Projects on Github",
  },
} as const;

export const skillsDataWeb = [
  {
    skillsTitle: "WebDevelopment",
    skills: [
      {
        title: "HTML",
        hash: "#html",
        icon: htmlicon,
        color: "#F1662A",
      },
      {
        title: "CSS",
        hash: "#CSS",
        icon: cssicon,
        color: "#1572B6",
      },
      {
        title: "JavaScript",
        hash: "#JavaScript",
        icon: javascripticon,
        color: "#F7DF1E",
      },
      {
        title: "TypeScript",
        hash: "#TypeScript",
        icon: typescripticon,
        color: "#007ACC",
      },
      {
        title: "React",
        hash: "#React",
        icon: reacticon,
        color: "#61DAFB",
      },
      // {
      //   title: "Next.js",
      //   hash: "#Next.js",
      //   icon: [nextjsicon, nextjsiconwhite],
      //   color: ["#000000", "#FFFFFF"],
      // },
      {
        title: "Node.js",
        hash: "#Node.js",
        icon: nodejsicon,
        color: "#339933",
      },
      {
        title: "Tailwind",
        hash: "#Tailwind",
        icon: tailwindcssicon,
        color: "#38B2AC",
      },
      {
        title: "MongoDB",
        hash: "#MongoDB",
        icon: mongodbicon,
        color: "#449C45",
      },
      {
        title: "PHP",
        hash: "#php",
        icon: php,
        color: "#4FC08D",
      },
      {
        title: "Express",
        hash: "#Express",
        icon: [expressicon, expressiconwhite],
        color: ["#000000", "#FFFFFF"],
      },
      {
        title: "SASS/SCSS",
        hash: "#SASS/SCSS",
        icon: sassscssicon,
        color: "#CC6699",
      },
    ],
  },
] as const;

export const skillsDataDesign = [
  {
    skillsTitle: "Design",
    skills: [
      { title: "Figma", hash: "#Figma", icon: figmaicon, color: "#F24E1E" },
      // {
      //   title: "Adobe XD",
      //   hash: "#Adobe XD",
      //   icon: adobexdicon,
      //   color: "#FF61F6",
      // },
      // { title: "Canva", hash: "#Canva", icon: canvaicon, color: "#00C4CC" },
    ],
  },
] as const;

export const skillsDataCMS = [
  {
    skillsTitle: "CMS",
    skills: [
      {
        title: "WordPress",
        hash: "#WordPress",
        icon: wordpressicon,
        color: "#21759B",
      },
      // {
      //   title: "Shopify",
      //   hash: "#Shopify",
      //   icon: shopifyicon,
      //   color: "#7AB55C",
      // },
      // {
      //   title: "Webflow",
      //   hash: "#Webflow",
      //   icon: webflowicon,
      //   color: "#4353FF",
      // },
    ],
  },
] as const;

export const navLinks = [
  { ne: "गृहपृष्ठ", en: "Home", hash: "#home", icon: GoHome },
  { ne: "कौशल", en: "Skills", hash: "#skills", icon: GoStack },
  { ne: "परियोजनाहरू", en: "Projects", hash: "#projects", icon: GoProject },
  { ne: "मेरो बारेमा", en: "About me", hash: "#about-me", icon: GoPerson },
  { ne: "सम्पर्क", en: "Contact", hash: "#contact", icon: GoMail },
] as const;

export const FooterLinks = [
  { ne: "इम्प्रेसम", en: "Imprint", hash: "#imprint", data: <Imprint /> },
  { ne: "गोपनीयता", en: "Privacy", hash: "#privacy", data: <Privacy /> },
] as const;

export const sideBarRightMail = {
  link: "mailto:prasiddhaadhikari122@gmail.com",
  text: "prasiddhaadhikari122@gmail.com",
} as const;

export const sideBarLeftSocials = [
  {
    link: "https://www.linkedin.com/in/prasiddha-adhikari/",
    icon: FiLinkedin,
    altimgname: "linkedin",
  },
  {
    link: "https://github.com/Prasiddha-Adhikari",
    icon: FiGithub,
    altimgname: "github",
  },
  {
    link: "mailto:prasiddhaadhikari122@gmail.com",
    icon: FiMail,
    altimgname: "mail",
  },
] as const;

export const quotesData = [
  {
    ne: '"यो पहिलो पटक सहि गर्न महत्त्वपूर्ण छैन। यो अन्तिम पटक सहि गर्न महत्त्वपूर्ण छ।"',
    en: `"It's not at all important to get it right the first time. It's vitally important to get it right the last time."`,
    author: "Andrew Hunt",
  },
  {
    ne: '"वेब एक क्यानभास जस्तो हो र कोड रङ हो। आफ्नो मास्टरपिस सिर्जना गर्नुहोस्।"',
    en: `"The web is like a canvas, and code is the paint. Create your masterpiece."`,
  },
] as const;

export const aboutMeData = {
  title: "मेरो बारेमा",
  title_EN: "About me",
  description: "मेरो बारेमा केहि कोड स्निपेटहरू",
  description_EN: "A few code snippets about me",
  paragraphs_NE: [
    {
      title: "मेरो मुटुको सर्किटहरू",
      description:
        "जब म डिजिटल दुनियामा छैन, म प्रविधि र हार्डवेयरको रोचक संसारमा घुमिरहेको हुन्छु। सर्किटहरू र सोल्डरिङ बिन्दुहरू मेरा लागि रोमाञ्चक साहसिक खेलका टुक्राहरू जस्तै छन्।",
      icon: hardwareicon,
    },
    {
      title: "जीवनको तीव्र लेनमा",
      description:
        "कोडिङ बाहेक, म तीव्र लेनमा रहन मन पराउँछु – वास्तविक अर्थमा। गाडीहरू मेरो जुनून हुन्, र म शक्तिशाली इन्जिनहरूको साथ अपरिचित सडकहरूमा यात्रा गर्न रमाउँछु।",
      icon: caricon,
    },
    {
      title: "अन्वेषण गर्ने चाहना मेरो जीवनको मूल मन्त्र",
      description:
        "मेरो वेब विकासको यात्रा मेरो जीवन यात्राको एक हिस्सा मात्र हो। म विश्वास गर्छु कि साहसिक यात्रा केवल तब सुरु हुन्छ जब तपाईं परिचित कुराहरू पछाडि छोड्नुहुन्छ। नयाँ ठाउँहरू पत्ता लगाउनु मेरो सिर्जनात्मक प्रेरणाको स्रोत हो।",
      icon: travelicon,
    },
  ],
  paragraphs_EN: [
    {
      title: "The Circuits of My Heart",
      description:
        "When I'm not navigating the digital world, I explore the fascinating realm of technology and hardware. Circuits and solder joints are like puzzle pieces to me in an exciting adventure.",
      icon: hardwareicon,
    },
    {
      title: "On the Fast Lane of Life",
      description:
        "Besides coding, I like to be on the fast lane - in the truest sense of the word. Cars are my passion, and I enjoy being on unknown roads with powerful machines.",
      icon: caricon,
    },
    {
      title: "The Joy of Discovery as a Life Motto",
      description:
        "My journey as a web developer is only a part of my life path. I live by the motto that the adventure only begins when you leave the familiar behind. Discovering new places and cultures is my form of creative inspiration.",
      icon: travelicon,
    },
  ],
};

export const contactData = {
  title: {
    ne: "सम्पर्क",
    en: "Contact",
  },
  description: {
    ne: "मलाई एउटा सन्देश लेख्नुहोस् र म तपाईंलाई जवाफ दिनेछु।",
    en: "Write me a message and I will get back to you.",
  },
  inputfields: [
    {
      name: "name",
      placeholder: {
        ne: "तपाईंको नाम",
        en: "Your Name",
      },
      type: "text",
      validation: {
        ne: "कृपया तपाईंको नाम दिनुहोस्",
        en: "Please fill in your name",
      },
      pattern: "{2}",
    },
    {
      name: "email",
      placeholder: {
        ne: "तपाईंको इमेल ठेगाना",
        en: "Your E-Mail",
      },
      type: "email",
      validation: {
        ne: "कृपया तपाईंको इमेल दिनुहोस्",
        en: "Please fill in your email",
      },
      pattern: "[@]{4}",
    },
    {
      name: "subject",
      placeholder: {
        ne: "तपाईंको बिषय",
        en: "Your Subject",
      },
      type: "text",
      validation: {
        ne: "कृपया एक बिषय दिनुहोस्",
        en: "Please fill in your subject",
      },
      pattern: "{10}",
    },
  ],
  textarea: {
    placeholder: {
      ne: "तपाईंको सन्देश",
      en: "Your Message",
    },
    name: "message",
    rows: 10,
    validation: {
      ne: "कृपया तपाईंको सन्देश दिनुहोस्",
      en: "Please fill in your message",
    },
    pattern: "{10}",
  },
  button: {
    value: {
      ne: "पठाउन",
      en: "Send",
    },
  },
  icon: FiMail,
  iconcolor: "#FFFFFF",
  colors: {
    main: "main-btn",
    second: "secondary-btn",
    icon: "white",
  },
  privacyOptIn: {
    checkbox: {
      ne: "म सहमत छु कि अलपाय मेरो व्यक्तिगत डेटा (नाम र इमेल ठेगाना) प्रयोग गरी मसँग सम्पर्क गर्न सक्छ।",
      en: "I agree that Alpay may use my personal data (name and e-mail address) to contact me.",
    },
    description: {
      ne: "यस अनुरोधलाई पठाउँदा, तपाईंले गोपनीयता नीति पढ्नुभएको स्वीकृति दिनुहुन्छ।",
      en: "By submitting this request, you acknowledge that you have read the Private Policy",
    },
  },
} as const;

export const toastMessages = {
  loadingProject: {
    ne: "🦄 लाइभ डेमो चाँडै खुल्नेछ। सर्भरहरू सुरु गरिँदैछन्...",
    en: "🦄 The live demo will open shortly. Starting servers...",
  },
  successEmailSent: {
    ne: "🦄 तपाईंको इमेलका लागि धन्यवाद। म चाँडै तपाईंलाई जवाफ दिनेछु",
    en: "🦄 Thank you for your email. I will get back to you as soon as possible",
  },
  failedEmailSent: {
    ne: "🦄 अफसोस, तपाईंको इमेल पठाउन असफल भयो। कृपया पछि फेरि प्रयास गर्नुहोस्",
    en: "🦄 Unfortunately the sending of your email did not work. Please try again later",
  },
  failedValidationName: {
    ne: "कृपया तपाईंको नाम दिनुहोस्",
    en: "Please fill in your name",
  },
} as const;

export const buttonLabels = {
  language: {
    ne: "NE",
    en: "EN",
  },
} as const;

export const directionStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginRight: "4rem",
  },
  "outer-left-to-inner-right": {
    marginLeft: "4rem",
    transform: "scaleX(-1)",
  },
  "inner-right-to-middle": {
    width: "100%",
    transform: "scaleY(1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  "inner-left-to-middle": {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  "middle-to-inner-right": {
    width: "100%",
    transform: "scale(1,-1)",
  },
  "middle-to-inner-left": {
    width: "100%",
    transform: "scale(-1,-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  middle: {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

export const heightStyles: Record<string, { heights: [string, string] }> = {
  small: {
    heights: ["25rem", "15rem"],
  },
  middle: {
    heights: ["35rem", "25rem"],
  },
  large: {
    heights: ["45rem", "35rem"],
  },
  extraLarge: {
    heights: ["55rem", "45rem"],
  },
};

export const spaceStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginTop: "-6rem",
    width: "100%",
  },
  "outer-left-to-inner-right": {
    marginTop: "-6rem",
    width: "100%",
  },
  "inner-right-to-middle": {
    marginTop: "-20rem",
    width: "50%",
    zIndex: "-10",
  },
  "inner-left-to-middle": {
    marginTop: "-10rem",
    width: "50%",
    zIndex: "-10",
  },
  "middle-to-inner-right": {
    width: "75%",
  },
  "middle-to-inner-left": {
    marginTop: "-2.5rem",
    width: "50%",
  },
  middle: {
    marginTop: "-2.5rem",
    width: "0%",
    display: "none",
  },
};

export const widthStyles: Record<string, { widths: [string, string] }> = {
  "outer-right-to-inner-left": {
    widths: ["74.45%", "74.45%"],
  },
  "outer-left-to-inner-right": {
    widths: ["75%", "75%"],
  },
  "inner-right-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "inner-left-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "middle-to-inner-right": {
    widths: ["33.4%", "50.03%"],
  },
  "middle-to-inner-left": {
    widths: ["50.1%", "49%"],
  },
  middle: {
    widths: ["0%", "0%"],
  },
};
