/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: window.innerWidth < 500 ? "JEPH" : 'Jean Philippe Sara',
  title: "Hey, je suis Jean Philippe SARA",
  subTitle: emoji(
    "Un développeur de logiciels Full Stack passionné 🚀 ayant une expérience dans la création d'applications Web et mobiles avec JavaScript / Reactjs / Nodejs / React Native et quelques autres bibliothèques et frameworks sympas."
  ),
  resumeLink:
    "https://docs.google.com/document/d/19sLLYi4r_lDdUkXXG00ooKnUjO-ZijWP/edit?usp=sharing&ouid=110802938093536053644&rtpof=true&sd=true", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/jeff2106",
  linkedin: "https://www.linkedin.com/in/jean-philippe-sara/",
  gmail: "jeanphilippesara225@gmail.com",
  gitlab: "https://gitlab.com/jeff2106",
  facebook: "https://www.facebook.com/saad.pasta7",
  medium: "https://medium.com/@jeanphilippesara225",
  stackoverflow: "https://stackoverflow.com/users/14965504/geek-studio",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Ce que je fais",
  subTitle: "UN DÉVELOPPEUR FULL STACK QUI VEUT EXPLORER CHAQUE TECH STACK",
  skills: [
    emoji(
      "⚡ Développez des interfaces front-end hautement interactives pour vos applications Web et mobiles"
    ),
    emoji("⚡ Applications Web progressives ( PWA ) dans les piles normales et SPA"),
    emoji("⚡ Développez des applications dédiées au TPE"),
    emoji(
      "⚡ Intégration de services tiers tels que Firebase"
    ),
    emoji(
      "⚡ Conception et évolution de l’infrastructure d’un site web"
    ),
    emoji(
      "⚡ Architecture et développement de la plateforme de gestion des contenus"
    ),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "php",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "JAVA Android/POS",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Institut Internationale Polytechnique des Elites d'Abidjan (IIPEA)",
      logo: "https://media.licdn.com/dms/image/C5603AQHh4u-hLjJFgA/profile-displayphoto-shrink_800_800/0/1594894708366?e=2147483647&v=beta&t=lhOB0gTh4uXm7Qvg8e7w9LMgjMtE12Ta5K-VPh0moAc",
      subHeader: "Licence professionnelle Genie Logiciel",
      duration: "Septembre 2021 - Avril 2022",
      desc: "Equivalence de mon parcours initial RIT pour une licence Genie Logiciel",
      descBullets: []
    },
    {
      schoolName: "Institut CERCO",
      logo: require('./assets/images/logocerco.png'),
      subHeader: "Licence professionnelle Réseau Informatique & Télécom",
      duration: "Septembre 2018 - Avril 2021",
      desc: "Formation initial, après le BAC",
      descBullets: [
        "Recruté dès la L3 pour travailler au compte de l'école pendant 2 ans en parallèle des cours"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Ingénieur développement logiciel",
      company: "MediaSoft Lafayette".toUpperCase(),
      companylogo: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Logo_Mediasoft_Lafayette.png",
      date: "mai 2022 - aujourd’hui",
      desc: "",
      descBullets: [
        "Charge de la réalisation et de la maintenance des Applications (Mobile Banking) destinées aux banques nationales et de la sous-région ouest-africaine",
        "Chargé du développement des applications destinées aux terminaux de paiement ( VERIFONE, Pax, etc.) et à leur signature."
      ]
    },
    {
      role: "ServiceNow Developer",
      company: "Akofen solution".toUpperCase(),
      companylogo: "https://cdn1.iconfinder.com/data/icons/files-folder-001-solid/32/Document_file_help_page_paper_data-512.png",
      date: "nov. 2021 - avr. 2022",
      desc: "Responsable de l'administration système sur les plateformes ServiceNow au compte de l'entreprise et ses clients"
    },
    {
      role: "Ingénieur développement logiciel",
      company: "INSTITUT CERCO INTERNATIONAL",
      companylogo: require('./assets/images/logocerco.png'),
      date: "oct. 2019 - nov. 2021",
      desc: "Responsable du développement des applications mobile au compte de l'entreprise"
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projet personnelle",
  subtitle: "Quelque project personnel , et quelque projet de personne sur lequel j'ai travailler",
  projects: [],
  display: true // Set false to hide this section, defaults to true
};
/*

    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  */
// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Réalisations Et Certifications🏆 "),
  subtitle:
    "Réalisations, certifications de récompense et quelques trucs sympas que j'ai faits !",

  achievementsCards: [
    {
      title: "Multiplatform Mobile App Development with React Native",
      subtitle:
        "The Hong Kong University of Science and Technology",
      image: "https://149362230.v2.pressablecdn.com/wp-content/uploads/2018/08/coursera-social-logo-brand.png",
      imageAlt: "coursera",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/certificate/QPUH32J2J8JZ"
        }
      ]
    },
    {
      title: "Cybersecurity Capstone: Breach Response Case Studies",
      subtitle:
        "IBM",
      image: "https://149362230.v2.pressablecdn.com/wp-content/uploads/2018/08/coursera-social-logo-brand.png",
      imageAlt: "IBM",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/certificate/ZXGWNS8BP6CM"
        }
      ]
    },
    {
      title: "Full-Stack Web Development with React",
      subtitle:
        "specialization with 3 Courses".toUpperCase(),
      image: "https://149362230.v2.pressablecdn.com/wp-content/uploads/2018/08/coursera-social-logo-brand.png",
      imageAlt: "specialization (3 cours)",
      footerLink: [
        {
          name: "Certification 1",
          url: "https://www.coursera.org/account/accomplishments/certificate/HBGU5ZE2RMZK"
        },
        {
          name: "Certification 2",
          url: "https://www.coursera.org/account/accomplishments/certificate/9CP6P6A6SR7W"
        },
        {
          name: "Certification 3",
          url: "https://www.coursera.org/account/accomplishments/certificate/93MA4LTLNKN9"
        },
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "Avec JustCodeIT, j'aime écrire et enseigner aux autres ce que j'ai appris.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React est une bibliothèque JavaScript pour créer une interface utilisateur. Il est maintenu par Facebook et une communauté de développeurs individuels et d'entreprises."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "J'AIME PARTAGER MES CONNAISSANCES LIMITÉES ET OBTENIR UN BADGE D'ORATEUR 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contactez-moi ☎️"),
  subtitle:
    "Discuter d'un projet ou simplement dire bonjour ? Ma boîte de réception est ouverte à tous.",
  number: "+225-0555$12087",
  email_address: "jeanphilippesara225@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "jeff02649564", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
