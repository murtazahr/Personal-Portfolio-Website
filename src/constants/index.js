import {
    backend,
    architect,
    quant,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    angular,
    spring,
    nodejs,
    mongodb,
    git,
    spark,
    docker,
    gs,
    monash,
    photobook,
    carrent,
    jobit,
    tripguide,
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
        title: "Web Developer",
        icon: web,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Quant Developer",
        icon: quant,
    },
    {
        title: "Software Architect",
        icon: architect,
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
        name: "Spring Boot",
        icon: spring,
    },
    {
        name: "Angular",
        icon: angular,
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
        name: "Apache Spark",
        icon: spark,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "Engineering Analyst",
        company_name: "Goldman Sachs",
        icon: gs,
        iconBg: "#383E56",
        date: "August 2022 - Present",
        points: [
            "Developing and maintaining systems for Goldman Sachs Options Advisory Services (GOAS) platforms, resulting in improved functionality and user experience.",
            "Leading the development of Thematic Portfolio Management Tool, a theme-based stock basket investment strategy, projected to attract millions in assets under management.",
            "Managing the development of a novel options pricing and order auctioning workflow, resulting in a 30% increase in speed and 15% improvement in efficiency for portfolio managers."
        ],
    },
    {
        title: "Summer Analyst",
        company_name: "Goldman Sachs",
        icon: gs,
        iconBg: "#E6DEDD",
        date: "June 2021 - August 2021",
        points: [
            "Implemented validations for the sale of complex derivatives, improving accuracy and efficiency of the end-to-end process.",
            "Led the development of an API-based feature switch, enabling rolling region-based releases and A/B testing and resulting in a 25% increase in the speed of new feature deployments.",
            "Demonstrated strong analytical and technical skills, as well as the ability to work effectively in a team environment.",
        ],
    },
    {
        title: "Undergraduate Researcher (Energy Trading Blockchain)",
        company_name: "Monash University",
        icon: monash,
        iconBg: "#383E56",
        date: "April 2021 - July 2021",
        points: [
            "Led the initiative to build a peer-to-peer blockchain-based energy trading platform proof-of-concept in collaboration with Tenaga Nasional.",
            "Conducted a comparative analysis on Hyperledger Besu and Hyperledger Fabric to design a Proof of Authority consensus mechanism.",
            "Load tested the proof-of-concept platform with 30 general nodes and 2 authority nodes.",
            "Concluded all development within the 3-month timeframe.",
        ],
    },
    {
        title: "Software Architect Intern",
        company_name: "Photobook Worldwide",
        icon: photobook,
        iconBg: "#E6DEDD",
        date: "July 2020 - December 2020",
        points: [
            "Successfully integrated the company’s web and mobile platforms with downstream applications such as Zen for print production and Netsuite for accounting, resulting in a reduction of 2 business days in the end-to-end order cycle.",
            "Led the e-photobook project to successful completion, resulting in the generation of 13000 e-photobooks in 2 days and a customer satisfaction rating of 83%."
        ],
    },
];

const introduction = "I'm a software engineer at Goldman Sachs with experience in developing and maintaining portfolio management platforms and implementing agile project management methods. I'm proficient in Java, Spring Boot, Angular, SQL and noSQL databases, and cloud computing. I possess strong analytical, technical and problem-solving skills. I'm also a Summa Cum Laude with Honours and Dean’s List recipient from Monash University.";

const testimonials = [
    {
        testimonial:
            "Murtaza goes out of his way to ensure that the work he produces is nothing less that perfect. He is a highly motivated individual who actively looks for more responsibilities.",
        name: "Leonardy Huang",
        designation: "AVP (Engineering)",
        company: "Photobook Worldwide",
        image: "https://media.licdn.com/dms/image/C5103AQFdWmF1JZo0Vw/profile-displayphoto-shrink_800_800/0/1542128636444?e=1689811200&v=beta&t=ZfGeUJP8jrZCubDbSZEkDuAPE3toTbBxSizLXQd9lj0",
    },
    {
        testimonial:
            "Murtaza is motivated, hardworking, and constantly shows strong desire to learn new and challenging technologies. He is a fast learner and a team player.",
        name: "Dr Chong Chun Yong",
        designation: "Senior Lecturer",
        company: "Monash University",
        image: "https://media.licdn.com/dms/image/C5603AQFWqoLliUIasA/profile-displayphoto-shrink_800_800/0/1643274057880?e=1689811200&v=beta&t=7PIx3yrg81ZbxC2b5VLbSvfR51A3iaKhgWntq3LM7FY",
    },
    {
        testimonial:
            "Murtaza willingly takes initiative and is a natural leader which truly makes him stand out from the crowd. He is always there to help his team and has great communication skills.",
        name: "Anonymous",
        designation: "VP",
        company: "Goldman Sachs",
        image: "https://static.vecteezy.com/system/resources/previews/001/840/618/original/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg",
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

export { services, technologies, experiences, testimonials, projects, introduction};
