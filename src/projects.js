import Buckbay from "./assets/buckbay2.jpeg"
import UniRental from "./assets/uni-rental.jpeg"
import NaiCladi from "./assets/naicladi.jpeg"
import Password from "./assets/password.jpeg"
export const myProjects = [
    {
        id:1,
        name:"BuckBay",
        navId:2,
        image:`${Buckbay}`,
        mainTech:"React",
        description:"npm create vite@latest my-project, npx create-react-app my-project",
        shortDescription:"A fullstack minimalistic replica to pexels that allows sharing of files between different users.",
        technologies:["react","Sanity","tailwindCss","Firebase"],
        githubLink:"https://github.com/BuckanianMark",
        web:"https://buckbay-8fc0a.web.app",
        steps:[
            {
                label:'Project Name',
                description:"Buckbay"
            },
            {
                label:'Project Link',
                description:"https://buckbay-8fc0a.web.app"
            },
            {
                label:'Project inspiration',
                description:"pixabay , pexels, cleanpng"
            },
            {
                label:'Tech Stacks',
                description:"Sanity , react, firebase, tailwindCss"
            }
            
        ]
    },
    {
        id:2,
        name:"NaiCladi",
        navId:2,
        image:`${NaiCladi}`,
        mainTech:"React",
        description:"npm create vite@latest my-project, npx create-react-app my-project",
        shortDescription:"A multivendor app that incorporates the functionality of an eccomerce application making it easier to filter and search products",
        technologies:["React","Shadcn","TailwindCss","Auth0","Express","MongoDb"],
        githubLink:"https://github.com/BuckanianMark",
        web:"https://naicladi-frontend-app.onrender.com",
        steps:[
            {
                label:'Project Name',
                description:"NaiCladi"
            },
            {
                label:'Project Link',
                description:"https://naicladi-frontend-app.onrender.com"
            },
            {
                label:'Project inspiration',
                description:"eccomerce,multi-vendor"
            },
            {
                label:'Tech Stacks',
                description:"React,TailwindCss,Express,MongoDb,Shadcn,Auth0"
            }
            
        ]
    },
    {
        id:3,
        name:"MyUniRental",
        navId:1,
        image:`${UniRental}`,
        mainTech:"Angular",
        description:"npm install -g @angular/cli, ng serve , ng generate component",
        shortDescription:"A fullstack application perfoming the functionalities of a real estate application catering for university students.",
        technologies:["Angular","Express","TailwindCss","MongoDb"],
        githubLink:"https://github.com/BuckanianMark",
        web:"https://uni-rental-client-angular.vercel.app/rentals",
        steps:[
            {
                label:'Project Name',
                description:"MyUniRental"
            },
            {
                label:'Project Link',
                description:"https://uni-rental-client-angular.vercel.app/rentals"
            },
            {
                label:'Project inspiration',
                description:"rental system, qwetu"
            },
            {
                label:'Tech Stacks',
                description:"Angular , Express, TailwindCss, MongoDb"
            }
            
        ]
    },
    {
        id:4,
        name:"PasswordManager",
        navId:1,
        image:`${Password}`,
        mainTech:"Angular",
        description:"npm install -g @angular/cli, ng serve , ng generate component",
        shortDescription:"An app that helps you manage your passwords for different websites in a single place for easier access.",
        technologies:["Angular","Firebase","TailwindCss"],
        githubLink:"https://github.com/BuckanianMark",
        web:"password-manager-mu.vercel.app",
        steps:[
            {
                label:'Project Name',
                description:"PasswordManager"
            },
            {
                label:'Project Link',
                description:"password-manager-mu.vercel.app"
            },
            {
                label:'Project inspiration',
                description:"toolbar,task manager"
            },
            {
                label:'Tech Stacks',
                description:"Angular, TailwindCss,Firebase"
            }
            
        ]
    },
   
]