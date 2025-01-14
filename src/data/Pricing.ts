
export interface Pricing {
  id: number;
  title: string;
  available?: boolean;
  features: Features[];
  monthPlan?: string;
  yearPlan?: string;
  monthly_plan_fee?: string;
  yearly_plan_fee?: string;
  isMonth?: boolean;
  isYear?: boolean;
}

export interface Features {
  name: string;
  availability: boolean;
}

interface PricingHead {
  title: string;
  subtitle: string;
  title1: string;
  subtitle1: string;
}

export const pricingHead = <PricingHead>{
  title: "Our Pricing",
  subtitle:
    "Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.",
  title1: "Our Pricings",
  subtitle1:
    "Welcome to SkillBridge's Pricing Plan page, where we offer two comprehensive options to cater to your needs: Free and Pro. We believe in providing flexible and affordable pricing options for our services. Whether you're an individual looking to enhance your skills or a business seeking professional development solutions, we have a plan that suits you. Explore our pricing options below and choose the one that best fits your requirements.",
};

const pricing: Pricing[] = [
  {
    id: 1,
    title: "Free Plan",
    monthPlan: "/month",
    monthly_plan_fee: "$0",
    isMonth: true,
    isYear: false,
    features: [
      {
        name: "Access to selected free courses",
        availability: true,
      },
      {
        name: "Limited course materials and resources.",
        availability: true,
      },
      {
        name: "Basic community support.",
        availability: true,
      },
      {
        name: "No certification upon completion.",
        availability: true,
      },
      {
        name: "Ad-supported platform.",
        availability: true,
      },
      {
        name: "Access to exclusive Pro Plan community forums.",
        availability: false,
      },
      {
        name: "Early access to new courses and updates.",
        availability: false,
      },
    ],
  },
  {
    id: 2,
    title: "Pro Plan",
    monthPlan: "/month",
    monthly_plan_fee: "$79",
    isMonth: true,
    isYear: false,
    features: [
      {
        name: "Access to selected free courses",
        availability: true,
      },
      {
        name: "Limited course materials and resources.",
        availability: true,
      },
      {
        name: "Basic community support.",
        availability: true,
      },
      {
        name: "No certification upon completion.",
        availability: true,
      },
      {
        name: "Ad-supported platform.",
        availability: true,
      },
      {
        name: "Access to exclusive Pro Plan community forums.",
        availability: true,
      },
      {
        name: "Early access to new courses and updates.",
        availability: true,
      },
    ],
  },
  {
    id: 3,
    title: "Free Plan",
    yearPlan: "/year",
    yearly_plan_fee: "$0",
    isMonth: false,
    isYear: true,
    features: [
      {
        name: "Access to selected free courses",
        availability: true,
      },
      {
        name: "Limited course materials and resources.",
        availability: true,
      },
      {
        name: "Basic community support.",
        availability: true,
      },
      {
        name: "No certification upon completion.",
        availability: true,
      },
      {
        name: "Ad-supported platform.",
        availability: true,
      },
      {
        name: "Access to exclusive Pro Plan community forums.",
        availability: false,
      },
      {
        name: "Early access to new courses and updates.",
        availability: false,
      },
    ],
  },
  {
    id: 4,
    title: "Pro Plan",
    yearPlan: "/year",
    yearly_plan_fee: "$799",
    isMonth: false,
    isYear: true,
    features: [
      {
        name: "Access to selected free courses",
        availability: true,
      },
      {
        name: "Limited course materials and resources.",
        availability: true,
      },
      {
        name: "Basic community support.",
        availability: true,
      },
      {
        name: "No certification upon completion.",
        availability: true,
      },
      {
        name: "Ad-supported platform.",
        availability: true,
      },
      {
        name: "Access to exclusive Pro Plan community forums.",
        availability: true,
      },
      {
        name: "Early access to new courses and updates.",
        availability: true,
      },
    ],
  },
];

export default pricing;
