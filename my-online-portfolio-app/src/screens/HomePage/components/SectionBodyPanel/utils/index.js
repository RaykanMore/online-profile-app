

import Degree from '../../../../../assets/documents/bsc-degree-cert.pdf';
import {
    faCertificate,
    faAward,
    faFile,

    faFighterJet as efficiencyIcon,
    faHandshake as commitmentIcon,
    faHeart as empathyIcon,
    faSeedling as patienceIcon,
    faChartLine as growthIcon,
    faSearch as LearningIcon
} from '@fortawesome/free-solid-svg-icons';

import {
    faInstagram as instagramIcon,
    faLinkedinIn as linkedInIcon,
    faGithub as gitHubIcon,
} from '@fortawesome/free-brands-svg-icons';

export const MY_DOCUMENTS = [
    {
        documentTitle: 'Resumé',
        documentLink: Degree,
        documentIcon: faFile
    },
    {
        documentTitle: 'BSc Degree',
        documentLink: Degree,
        documentIcon: faCertificate
    },
    {
        documentTitle: 'Data Science Certificate',
        documentLink: Degree,
        documentIcon: faCertificate
    },
    {
        documentTitle: 'REAP Scholarship Award',
        documentLink: Degree,
        documentIcon: faAward
    },
];

export const ABOUT_ME = [
    `My name is Reabetswe Raikane More and I regard myself as a resilient, inquisitive, and agile individual, who values teamwork and people. 
    I find comfort in establishing long  lasting relationships with people that I work and collaborate with. I have held numerous positions in 
    the student leadership space. I have also worked in education and engineering. From these roles, my seniors observed an energetic individual 
    who approaches tasks with enthusiasm and creativity while clients observe an approachable, empathetic individual who takes the time to listen 
    and do his best to meet their expectations.`,
    `I have recently graduated from the University of the Witwatersrand with a  Bsc Majoring in Physics and Nuclear sciences and engineering. From 
    this degree and my past work experiences, I have gained insights into data analysis; and acquired statistical analytical and attention to detail skills. 
    All of these have equipped me with the ideal skills and edge to be part of the Sovtech graduate program and add tangible value in my time there.`,
    `Having read all about Sovtech and getting to know about your value, vision and mission I believe that this is a space I will truly fit into and add 
    tangible value. I am a recent graduate in the STEM field and a tech-enthusiast. Sovtech, being a world class company, will contribute to my growth in 
    the technology space and help me gain more insights in technology . Your values align with my personal attributes of approaching the world with a smile 
    and having empathy, and we are both deep believers in always expanding your knowledge base by researching and googling new ideas. I am confident that 
    this will be a conducive environment where I will gain an insightful experience as a recent graduate.`,
    `Through my years of being a student I was governed by perfecting everything and applying the highest level of effort; but as life would have it, 
    in some points throughout my academic journey I stumbled across challenges I couldn't perfect and the amount of effort I placed did not result in 
    my expectations. This experience unleashed my resilience and agility. I moved from trying to perfect my academics to trying to reach the goals I had 
    set for my academics. Sovtech is one of the few companies that value achievement over effort and that is why I believe it will allow me to grow, 
    learn and be dedicated towards achieving goals set by the company, the team I will have the honor to be a part of and myself.`,
    `The Sovtech graduate program provides a mentorship program which will contribute to my personal development. I regard personal development to be 
    important in an individual’s ability to excel in a working environment and in being effective . My long term goal is to have a global impact in the 
    technology space and to contribute in making South Africa move to a more advanced digital country. The mentorship program, I believe, will provide a 
    foundation to achieving these goals.`,
    'Thank you for taking the time to read the aforementioned. To find out more on who I am and what I stand for, click the icons on the right and explore.'
];

export const MY_EDUCATION = [
    {
        qualification: 'BACHELOR OF SCIENCE | PHYSICS AND NUCLEAR SCIENCES & ENGINEERING',
        institutionAndDuration: 'University of the Witwatersrand | 2017 - 2020',
        location: 'South Africa | Johannesburg',
        distinctions: []
    },
    {
        qualification: 'BACHELOR OF ENGINEERING | INDUSTRIAL ENGINEERING',
        institutionAndDuration: 'University of the Witwatersrand | 2021 - current',
        location: 'South Africa | Johannesburg',
        distinctions: []
    },
    {
        qualification: 'DATA SCIENCE & MACHINE LEARNING WITH R FROM A-Z MASTERCLASS',
        institutionAndDuration: 'Udemy | 2021 - current',
        location: 'Online',
        distinctions: []
    },
    {
        qualification: 'GRADE 12',
        institutionAndDuration: 'Lerothodi Secondary School | 2016',
        location: 'South Africa | Brits',
        distinctions: [
            'Pure Mathematics',
            'Physical Science',
            'Geography',
            'Life Sciences',
            'Life Orientation'
        ]
    }
];

export const MY_VALUES = [
    {
        title: 'Empathy',
        icon: empathyIcon,
    },
    {
        title: 'Patiece',
        icon: patienceIcon,
    },
    {
        title: 'Growth',
        icon: growthIcon,
    },
    {
        title: 'Commitment',
        icon: commitmentIcon,
    },
    {
        title: 'Efficiency',
        icon: efficiencyIcon,
        transform: true,
    },
    {
        title: 'Learning',
        icon: LearningIcon,
    },
];

export const MY_WORK_EXPERIENCE = [
    {
        companyAndDuration: 'CAMPUS AFRICA | SEPT 2019 - CURRENT',
        positions: [
            {
                role: 'Sales Representative & Building Ambassador | 49 Jorissen Student Residence',
                duties: [
                    `Representing the 49 Jorissen Student Residence brand and explaining its product offerings to all prospective clients, 
                    ie: students looking for accommodation.`,
                    `Making sure that students looking for accommodation choose 49 Jorissen Student Residence as their choice of accommodation 
                    for their academic year.`,
                    `Guide clients throughout the application/on boarding process of the 49 Jorissen Student Residence. `         
                ],
                businessImpact: `During my time as a Sales Representative, I have successfully acquired more than 60 students who chose 49 Jorissen 
                Student Residence as their residence of choice - with this acquisition, we made revenue of more than two million rands. In the year 2020, 
                I was part of the team which was able to fill up the entire building, having more than 450 units, in a period of one month.`
            },
            {
                role: 'Administrator and Student Leader | 49 Jorissen Student Residence & YMCA',
                duties: [
                    `Signing in new tenants of 49 Jorissen & YMCA Student Residences, and perform unit inspections when they eventually sign out.`,
                    `Assist new tenants in the signing of their leases.`,
                    `Planning and coordinating multiple events aimed at improving the experience of all 49 Jorissen Student Residence residents.`,
                    `Liaison on multiple matters between Campus Africa management and their tenants; some of these matters being: building rules and 
                    procedures, quality assurance and service delivery complaints from tenants, and COVID19 regulations.`,
                ],
                businessImpact: `During my time as an administrator, I leveraged my good understanding of technology and used the Microsoft Office Suite 
                to create multiple safety reports templates. These templates saved Safety Officers a lot of time when they were capturing their findings 
                from safety inspections. Previously, the Safety Officers did not have any templates to work from and this meant that they had to start 
                from the ground up each time.`
            }
        ],
    },
    {
        companyAndDuration: 'KGOLETE SHEQ CONSULTANT | DEC 2017 - JAN 2018',
        positions: [
            {
                role: 'Part-time Administrator',
                duties: [
                    `Filing and other general office duties.`,
                    `Compiling safety files under supervision of Kgolete Safety Officer.`,
                    `Design posters using Canva and Word.`
                ],
                businessImpact: `During my time as an administrator, I leveraged my good understanding of technology and used the Microsoft Office Suite to 
                create multiple safety reports templates. These templates saved Safety Officers a lot of time when they were capturing their findings from 
                safety inspections. Previously, the Safety Officers did not have any templates to work from and this meant that they had to start from the 
                ground up each time.`
            }
        ]
    },
];

export const MY_SOCIALS = [
    {
        href: 'https://instagram.com/raykan_ion',
        icon: instagramIcon
    },
    {
        href: 'https://github.com/RaykanMore',
        icon: gitHubIcon
    },
    {
        href: 'https://www.linkedin.com/in/reabetswe-raikane-more-5778131b4',
        icon: linkedInIcon
    },

]
    