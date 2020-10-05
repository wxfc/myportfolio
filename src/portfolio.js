
import emoji from "react-easy-emoji";

const greeting = {
  username: "Wayne Colaco",
  title: "Hi, I'm Wayne, thanks for looking at my portfolio",
  subTitle: "A enthusiastic Front-End Developer having developed applications with JavaScript / React / Nodejs / Ruby / Sinatra / Rails and other libraries and frameworks.",
  resumeLink: "https://drive.google.com/file/d/1KxM3gUSbAqt0tRHgxsvAUmhhXv-S85_p/view?usp=sharing"
};

const socialMediaLinks = {

  github: "https://github.com/wxfc",
  linkedin: "https://www.linkedin.com/in/waynecolaco/",
  gmail: "wxfc28@gmail.com",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: ""
};

// Your Skills Section

const skillsSection = {
  title: "About Me",
  para: "I have always been interested in technology on a personal level because of my dad. We would always be working together setting something up or fixing something else. It gave me that curosity to want to find out more! In the different sectors I have worked, I have always wanted to understand more to be able to look at different ways of problem solving or becoming more efficient. Then I discovered coding.",
  paraTwo: "At the beginning of covid lockdown (March), I knew I wanted to work where I could continue learning and growing. I started a free coding course online and I was immediately hooked. I love finding a new challenge when coding, as it meant learning something new to overcome it. This industry is requires me to keep learning and gaining new knowledge which is exciting to know I'll never be still. It's amazing to see the many ways to solve a problem, especially working with someone else and seeing their thought process, allows me to further evolve as a developer.",

/* Make Sure You include correct Font Awesome Classname to view your icon
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
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
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
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
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
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ]
};

// // Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design",  //Insert stack or technology you have experience in
      progressPercentage: ""  //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: ""
    },
    {
      Stack: "Programming",
      progressPercentage: ""
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {  
      company: "Tic Tac Toe",
      companylogo: require("./assets/images/tictactoe.png"),
      desc: "https://wxfc.github.io/tictactoe/",
      descBullets: [
        "JavaScript",
        "HTML",
        "CSS",
        "Github"
      ]
    },
    {
      company: "Rental Ratings",
      companylogo: require("./assets/images/rentalRatings.png"),
      desc: "https://cryptic-hollows-95726.herokuapp.com/",
      site: "",
      descBullets: [
        "Ruby",
        "Sinatra",
        "Postgres SQL",
        "BCrypt"
      ]
    },
    {
      company: "The Happy Path",
      companylogo: require("./assets/images/theHappyPath.png"),
      desc: "https://floating-cliffs-04957.herokuapp.com",
      site: "",
      descBullets: [
        "Javascript",
        "HTML",
        "CSS",
        "2 x API Services",
        "Ruby on Rails (Active Record)",
        "Sinatra",
        "Postgres SQL"
      ]
    },
    {
      company: "Coding Memes",
      companylogo: require("./assets/images/codingMemes.png"),
      desc: "http://codingxmemes.surge.sh/",
      descBullets: [
        "React",
        "Javascript",
        "HTML",
        "CSS",
        "Ruby",
        "BCrypt",
        "Sinatra",
        "Postgres SQL"
      ]
    }
  ]
};

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "saadpasta", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false 
};

// const bigProjects = {
//   title: "Big Projects",
//   subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
//   projects: [
//     {
//       image: require("./assets/images/saayaHealthLogo.webp"),
//       link: "http://saayahealth.com/"
//     },
//     {
//       image: require("./assets/images/nextuLogo.webp"),
//       link: "http://nextu.se/"
//     }
//   ]
// };

// const achievementSection = {

//   title: emoji("Achievements And Certifications 🏆 "),
//   subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

//   achivementsCards: [
//     {
//       title: "Google Code-In Finalist",
//       subtitle: "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
//       image: require("./assets/images/codeInLogo.webp"),
//       footerLink: [
//         { name: "Certification", url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing" },
//         { name: "Award Letter", url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing" },
//         { name: "Google Code-in Blog", url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html" }
//       ]
//     },
//     {
//       title: "Google Assistant Action",
//       subtitle: "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
//       image: require("./assets/images/googleAssistantLogo.webp"),
//       footerLink: [{ name: "View Google Assistant Action", url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en" }]
//     },

//     {
//       title: "PWA Web App Developer",
//       subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
//       image: require("./assets/images/pwaLogo.webp"),
//       footerLink: [
//         { name: "Certification", url: "" },
//         { name: "Final Project", url: "https://pakistan-olx-1.firebaseapp.com/" }
//       ]
//     }
//   ]
// };

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description: "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description: "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ]
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ]
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss an opportunity or just want to say hi?",
  number: "0401 695 816",
  email_address: "wxfc28@icloud.com"
};

//Twitter Section

const twitterDetails = {

  userName : "@_wxfc"//Replace "twitter" with your twitter username without @
  
};
export { greeting, socialMediaLinks, skillsSection, techStack, workExperiences, openSource, blogSection, talkSection, podcastSection, contactInfo , twitterDetails};
