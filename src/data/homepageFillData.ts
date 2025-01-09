
export interface FAQ {
    title: string,
    subtitle: string,
    btn: string
}
export interface HeroData {
    iconImg:string,
    word1:string,
    line1: string,
    line2: string,
    line3: string,
    btn1:string,
    btn2:string,
}

export const FAQ = <FAQ>{
title : "Frequently Asked Questions",
subtitle : "Still you have any questions? Contact our Team via support@skillbridge.com",
btn : "See All FAQ’s",
}

export const HeroData = <HeroData>{
    word1:"Unlock",
    line1: "Your Creative Potential",
    line2: "with Online Design and Development Courses.",
    line3: "Learn from Industry Experts and Enhance Your Skills.",
    btn1:"Explore Courses",
    btn2:"View Pricing",
}
