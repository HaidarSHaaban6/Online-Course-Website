import { FaCrown } from "react-icons/fa";
import { FaMedal } from "react-icons/fa";
import { FaMasksTheater } from "react-icons/fa6";
import { SiLightning } from "react-icons/si";
import { GiBattery50 } from "react-icons/gi";
import { RiBookFill } from "react-icons/ri";
import { BsFillPuzzleFill } from "react-icons/bs";
import { RiAlarmWarningFill } from "react-icons/ri";

 export interface AboutBannerData {
    
    word1:string;
    line1: string;
    line2: string;
    btn:string;
    background:string;
}

export interface AboutHead {
    title: string;
    description: string;
    title1: string;
    description1: string;
    title2: string;
    description2: string;
}

export interface AboutCard {
    id?:string;
    icon: React.ComponentType;
    cardtitle: string;
    subtitle: string;
    
}
export const AboutHead: AboutHead = {

    title: "About Skillbridge",
    description: "Welcome to our platform, where we are passionate about empowering individuals to master the world of design and development. We offer a wide range of online courses designed to equip learners with the skills and knowledge needed to succeed in the ever-evolving digital landscape.",
    title1: "Achievements",
    description1: "Our commitment to excellence has led us to achieve significant milestones along our journey. Here are some of our notable achievements",
    title2: "Our Goals",
    description2: "At SkillBridge, our goal is to empower individuals from all backgrounds to thrive in the world of design and development. We believe that education should be accessible and transformative, enabling learners to pursue their passions and make a meaningful impact.Through our carefully crafted courses, we aim to",
}

export const Cards1 :AboutCard[]=[
    {
        id:"1",
        icon: FaCrown ,
        cardtitle: "Trusted by Thousands",
        subtitle: "We have successfully served thousands of students, helping them unlock their potential and achieve their career goals.",
    },
    {
        id:"2",
        icon: FaMedal ,
        cardtitle: "Award-Winning Courses",
        subtitle: "Our courses have received recognition and accolades in the industry for their quality, depth of content, and effective teaching methodologies.",
    },
    {
        id:"3",
        icon: FaMasksTheater ,
        cardtitle: "Positive Student Feedback",
        subtitle: "We take pride in the positive feedback we receive from our students, who appreciate the practicality and relevance of our course materials.",
    },
    {
        id:"4",
        icon: SiLightning ,
        cardtitle: "Industry Partnerships",
        subtitle: "We have established strong partnerships with industry leaders, enabling us to provide our students with access to the latest tools and technologies",
    },
]

export const Cards2 :AboutCard[]=[
    {
        id:"1",
        icon: GiBattery50 ,
        cardtitle: "Provide Practical Skills",
        subtitle: "We focus on delivering practical skills that are relevant to the current industry demands. Our courses are designed to equip learners with the knowledge and tools needed to excel in their chosen field.",
    },
    {
        id:"2",
        icon: RiBookFill ,
        cardtitle: "Foster Creative Problem-Solving",
        subtitle: "We encourage creative thinking and problem-solving abilities, allowing our students to tackle real-world challenges with confidence and innovation.",
    },
    {
        id:"3",
        icon: BsFillPuzzleFill ,
        cardtitle: "Promote Collaboration and Community",
        subtitle: "We believe in the power of collaboration and peer learning. Our platform fosters a supportive and inclusive community where learners can connect, share insights, and grow together.",
    },
    {
        id:"4",
        icon: RiAlarmWarningFill ,
        cardtitle: "Stay Ahead of the Curve",
        subtitle: "The digital landscape is constantly evolving, and we strive to stay at the forefront of industry trends. We regularly update our course content to ensure our students receive the latest knowledge and skills.",
    },
]
export const AboutBannerData: AboutBannerData={
    word1:"Together",
    line1: ", let's shape the future of digital innovation",
    line2: "Join us on this exciting learning journey and unlock your potential in design and development.",
    btn:"Join Now",
    background:"src/assets/img/about/about_banner_bg.png",
}
