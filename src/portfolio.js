
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
  twitter: "https://twitter.com/_wxfc",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: ""
};

// Your Skills Section

const skillsSection = {
  title: "About Me",
  para: "I trace my interest in technology back to my childhood. I owe a lot to my father, who would always let me help set up new tech for the house, or spend hours with me fixing things that had stopped working. I became obsessed with the hidden magic behind every day items, and knew from then on that technology was my language.",
  paraTwo: "In each of the different sectors I've worked, I have been driven to understand the systems in place to be able to look at different ways of problem solving, or to help myself & the business become more efficient.",
  paraThree: "Faced with the Covid lockdown in March, I knew I had to get myself into a setting where I could continue learning and growing every day. I commenced an online coding course and was immediately hooked. For me, the process of encountering challenges and finding creative solutions through code to overcome them becomes more rewarding every time.",
  paraFour: "It's amazing to see the many ways to solve a problem, especially now as I have been able to work with others and observe their thought processes, complementing my own approach and allowing me to further evolve as a developer. I'm very much looking forward to joining an organisation and bringing that energy and skill-set to work every day.",
  paraFive: "Every challenge I've encountered while coding has allowed me to keep learning, refining my process, & gaining new knowledge. It's an exciting prospect knowing that as the world becomes more reliant on technology that learning won't ever stop. ",
  paraSix: "History is now being written in code. It's thrilling to know that I'll be one of those writing it!",

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
    },
    {
      company: "Pong",
      companylogo: require("./assets/images/pong.png"),
      desc: "https://wxfc.github.io/pong/",
      descBullets: [
        "Javascript",
        "HTML"
      ]
    },
    {
      company: "NotTwitter",
      companylogo: require("./assets/images/notTwitter.png"),
      desc: "https://project-nottwitter.herokuapp.com/",
      descBullets: [
        "Javascript",
        "Vue",
        "SCSS",
        "HTML"
      ]
    },
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
    }
  ]
};

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "wxfc", 
  showGithubProfile :"true"
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss an opportunity or just want to say hi?",
  number: "0401 695 816",
  email_address: "wxfc28@gmail.com"
};

//Twitter Section

const twitterDetails = {

  userName : "_wxfc"
};
export { greeting, socialMediaLinks, skillsSection, techStack, workExperiences, openSource, contactInfo , twitterDetails};
