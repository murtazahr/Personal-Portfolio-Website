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
    unimelb,
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
        title: "Cloud Researcher",
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
        title: "PhD Student",
        company_name: "University of Melbourne",
        icon: unimelb,
        iconBg: "#383E56",
        date: "June 2024 - Present",
        points: [
        ],
    },
    {
        title: "Engineering Analyst",
        company_name: "Goldman Sachs",
        icon: gs,
        iconBg: "#383E56",
        date: "August 2022 - March 2024",
        points: [
            "Headed Thematic Portfolio Management System development, driving a theme-based stock strategy. Projected to attract $50M AUM through innovative features and strategic tech alignment.",
            "Uplifted the order execution workflow to allow for systematic execution of orders, saving 45 minutes per day for portfolio managers."
        ],
    },
    {
        title: "Summer Analyst",
        company_name: "Goldman Sachs",
        icon: gs,
        iconBg: "#E6DEDD",
        date: "June 2021 - August 2021",
        points: [
            "Engineered and implemented robust validations for the sale of complex derivatives, significantly elevating accuracy and efficiency across the entire end-to-end process.",
            "Created API-driven feature switch for region-based releases and A/B testing, accelerating new feature deployments by 25%.",
        ],
    },
    {
        title: "Undergraduate Researcher (Energy Trading Blockchain)",
        company_name: "Monash University",
        icon: monash,
        iconBg: "#383E56",
        date: "April 2021 - July 2021",
        points: [
            "Spearheaded the development of a peer-to-peer blockchain-based energy trading platform in collaboration with Tenaga Nasional, Malaysia's largest electricity supplier.",
            "Analyzed Hyperledger Besu and Hyperledger Fabric for a Proof of Authority consensus mechanism. Conducted efficient load tests with 30 general nodes and 2 authority nodes to optimize platform performance.",
        ],
    },
    {
        title: "Software Architect Intern",
        company_name: "Photobook Worldwide",
        icon: photobook,
        iconBg: "#E6DEDD",
        date: "July 2020 - December 2020",
        points: [
            "Orchestrated the e-photobook project to fruition, delivering 13,000 e-photobooks within 2-days post-launch and achieving an 83% customer satisfaction rating.",
            "Integrated web and mobile platforms with downstream applications (Zen for print production and Netsuite for accounting), reducing the end-to-end order cycle by 2 business days."
        ],
    },
];

const introduction = "As a Ph.D. student at the University of Melbourne, my focus lies in cloud computing research, building upon my background as a software engineer at Goldman Sachs. There, I specialized in crafting and managing cloud-based portfolio management platforms, leveraging agile project management techniques. Proficient in Java, Spring Boot, Angular, SQL, and noSQL databases—all within the context of cloud computing—I bring a wealth of technical expertise to the table. My journey commenced at Monash University, where I graduated Summa Cum Laude for my undergraduate studies, highlighting my dedication to excellence in the field.";

const testimonials = [
    {
        testimonial:
            "Murtaza goes out of his way to ensure that the work he produces is nothing less that perfect. He is a highly motivated individual who actively looks for more responsibilities.",
        name: "Leonardy Huang",
        designation: "AVP (Engineering)",
        company: "Photobook Worldwide",
        image: "https://media.licdn.com/dms/image/C5103AQFdWmF1JZo0Vw/profile-displayphoto-shrink_800_800/0/1542128637406?e=1717027200&v=beta&t=KBgF6h1hPCKslA7VEfau6cWWs1as8r24OQ-5lY6Hkew",
    },
    {
        testimonial:
            "Murtaza is motivated, hardworking, and constantly shows strong desire to learn new and challenging technologies. He is a fast learner and a team player.",
        name: "Dr Chong Chun Yong",
        designation: "Senior Lecturer",
        company: "Monash University",
        image: "https://media.licdn.com/dms/image/C5603AQFWqoLliUIasA/profile-displayphoto-shrink_800_800/0/1643274058240?e=1717027200&v=beta&t=ZqYH-BEAemhdS-3koZTywv3kge9OAolE8tqw5d_pK_k",
    },
    {
        testimonial:
            "Murtaza willingly takes initiative and is a natural leader which truly makes him stand out from the crowd. He is always there to help his team and has great communication skills.",
        name: "Nitesh Kumar Mehta",
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
