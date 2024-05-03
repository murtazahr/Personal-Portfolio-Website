import {goldmansachs, monash, photobook, unimelb} from "../assets/images";
import {
    car,
    contact,
    css,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    summiz,
    tailwindcss,
    typescript,
    blockchain, spring, angular, gcp, aws, mysql, java, matlab, python, jupyter
} from "../assets/icons";

export const skills = [
    {
        imageUrl: spring,
        name: "Spring",
        type: "Backend"
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Backend"
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: mysql,
        name: "MySQL",
        type: "Database"
    },
    {
        imageUrl: angular,
        name: "Angular",
        type: "Frontend"
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: matlab,
        name: "Matlab",
        type: "Data Science"
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Data Science"
    },
    {
        imageUrl: jupyter,
        name: "Jupyter",
        type: "Data Science"
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: gcp,
        name: "Google Cloud Platform",
        type: "Cloud Technology"
    },
    {
        imageUrl: aws,
        name: "Amazon Web Services",
        type: "Cloud Technology"
    }
];

export const experiences = [
    {
        title: "Phd Student",
        company_name: "University of Melbourne",
        icon: unimelb,
        iconBg: "#FFFFFF",
        date: "June 2024 - Present",
        points: [
            "Current PhD Student, CLOUDS Lab, University of Melbourne",
            "Research Focus: Computing Efficiency and Cost Optimization in the Cloud",
            "Investigating techniques to improve resource utilization and reduce operational costs for cloud computing platforms",
            "Exploring algorithms, models, and strategies for efficient workload scheduling, resource allocation, and capacity planning",
            "Collaborating with industry partners to validate research findings and ensure practical applicability"
        ],
    },
    {
        title: "Engineering Analyst",
        company_name: "Goldman Sachs",
        icon: goldmansachs,
        iconBg: "#d1dcf0",
        date: "Aug 2022 - Mar 2024",
        points: [
            "Headed Thematic Portfolio Management System development, driving a theme-based stock strategy. Projected to attract $50M AUM through innovative features and strategic tech alignment.",
            "Uplifted the order execution workflow to allow for systematic execution of orders, saving 45 minutes per day for portfolio managers."
        ],
    },
    {
        title: "Summer Analyst",
        company_name: "Goldman Sachs",
        icon: goldmansachs,
        iconBg: "#d1dcf0",
        date: "Jun 2021 - Aug 2021",
        points: [
            "Engineered and implemented robust validations for the sale of complex derivatives, significantly elevating accuracy and efficiency across the entire end-to-end process.",
            "Created API-driven feature switch for region-based releases and A/B testing, accelerating new feature deployments by 25%."
        ],
    },
    {
        title: "Undergraduate Research",
        company_name: "Monash University",
        icon: monash,
        iconBg: "#FFFFFF",
        date: "Apr 2021 - Jul 2021",
        points: [
            "Spearheaded the development of a peer-to-peer blockchain-based energy trading platform in collaboration with Tenaga Nasional, Malaysia's largest electricity supplier.",
            "Analyzed Hyperledger Besu and Hyperledger Fabric for a Proof of Authority consensus mechanism. ",
            "Conducted efficient load tests with 30 general nodes and 2 authority nodes to optimize platform performance."
        ],
    },
    {
        title: "Software Architect Intern",
        company_name: "Photobook Worldwide",
        icon: photobook,
        iconBg: "#FFFFFF",
        date: "Jul 2020 - Dec 2020",
        points: [
            "Orchestrated the e-photobook project to fruition, delivering 13,000 e-photobooks within 2-days post-launch and achieving an 83% customer satisfaction rating.",
            "Integrated web and mobile platforms with downstream applications (Zen for print production and Netsuite for accounting), reducing the end-to-end order cycle by 2 business days."
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/murtazahr',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/murtaza-rangwala-889064160',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Banking Application',
        description: 'Created an end-to-end banking and financial management platform with a functioning payment gateway and platform based payment transfers.',
        link: 'https://github.com/murtazahr/horizon-finance',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'GenerativeAI Second Brain',
        description: 'Contributed to a generativeAI second brain platform called Quivr, which is now a Y2C affiliated company.',
        link: 'https://github.com/QuivrHQ/quivr',
    },
    {
        iconUrl: blockchain,
        theme: 'btn-back-green',
        name: 'Petition Filing Application',
        description: 'Built a proof of concept petition filing application using Fuel, an ethereum based modular execution layer.',
        link: 'https://github.com/murtazahr/Digi-Sign-Petitions',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Number Plate Recognition',
        description: 'Developed matlab scripts to perform OCR on number plates using template matching and machine learning approaches.',
        link: 'https://github.com/murtazahr/Number-Plate-Recognition',
    }
];