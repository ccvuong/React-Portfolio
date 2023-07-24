import homeProject from '../assets/home splash screen.png';
import noted from '../assets/noted splash screen.png';
import teamProfile from '../assets/team profile generator.png';
import weatherApp from '../assets/cv weather dashboard.png';
import tapiTea from '../assets/TapiTea splash screen.png';
import hbv from '../assets/know HBV mockup.png';
import pets from '../assets/cute puppy.jpg'



export const ProjectList = [
    {
        name: "Pet Adoption 🐶",
        image: pets,
        liveUrl: 'https://mysterious-caverns-96136.herokuapp.com/',
        gitUrl: 'https://github.com/ccvuong/pet-adoption',
        type: "Service",
        description: 'A pet adoption website for users looking to bring home a companion!',
        tech: 'JavaScript, CSS, HTML, React.js'
    },

    {
        name: "Home 🏡",
        image: homeProject,
        liveUrl: 'https://myhome.herokuapp.com/signUpPage',
        gitUrl: 'https://github.com/BriDray/Home',
        type: "Inventory",
        description: 'Home is an application to help the user better track their personal belongings.',
        tech: 'JavaScript'
    },
    {
        name: "Noted ✍",
        image: noted,
        liveUrl: 'https://jonahscottlewis.github.io/noted/',
        gitUrl: 'https://github.com/jonahscottlewis/noted',
        type: "Scheduling",
        description: 'Noted is an application which is designed to help us keep track of some of the many things we all worry about in our daily lives.',
        tech: 'JavaScript, HTML'
    },
    {
        name: "Team Profile Creator 📚",
        image: teamProfile,
        liveUrl: 'https://github.com/ccvuong/Team-Profile-Creator',
        gitUrl: 'https://github.com/ccvuong/Team-Profile-Creator',
        type: "Object-Oriented Programming",
        description: 'Node.js command-line application to generate an HTML webpage.',
        tech: 'JavaScript, CSS, HTML'
    },
    {
        name: "Weather Dashboard ☁",
        image: weatherApp,
        liveUrl: 'https://ccvuong.github.io/Your-Weekly-Weather/',
        gitUrl: 'https://github.com/ccvuong/Your-Weekly-Weather',
        type: "Server-Side API",
        description: 'Weather dashboard that runs in browser and grabs current weather readings.',
        tech: 'JavaScript, CSS, HTML'
    },
    {
        name: "TapiTea 🧋",
        image: tapiTea,
        liveUrl: 'https://www.behance.net/gallery/151287035/TapiTea-Mobile-App',
        gitUrl: 'https://www.behance.net/gallery/151287035/TapiTea-Mobile-App',
        type: "Delivery App",
        description: 'A mobile delivery app focused on boba drinks in the Tri-Valley area.',
        tech: 'Affinity Photo, Figma'

    },
    {
        name: "Know HBV 🏥",
        image: hbv,
        liveUrl: 'https://www.behance.net/gallery/138914429/Know-HBV-Medical-App',
        gitUrl: 'https://www.behance.net/gallery/138914429/Know-HBV-Medical-App',
        type: "Medical App",
        description: 'Educational tool providing guidelines and medical information for medical professionals.',
        tech: 'Photoshop, Adobe XD'
    },
];