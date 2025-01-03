interface Features {
  name: String;
  avalibility: Boolean;
}

interface Pricing {
  id: Number;
  title: String;
  mounthly_plan_fee: Number;
  yearly_plan_fee: Number;
  Features: Features[];
}

const pricing: Pricing[] = [
  {
    id: 1,
    title: "Free Plan",
    mounthly_plan_fee: 0,
    yearly_plan_fee: 0,
    Features: [
      {
        name: "Access to selected free courses",
        avalibility: true,
      },
      {
        name: "Limited course materials and resources.",
        avalibility: true,
      },
      {
        name: "Basic community support.",
        avalibility: true,
      },
      {
        name: "No certification upon completion.",
        avalibility: true,
      },
      {
        name: "Ad-supported platform.",
        avalibility: true,
      },
      {
        name: "Access to exclusive Pro Plan community forums.",
        avalibility: false,
      },
      {
        name: "Early access to new courses and updates.",
        avalibility: false,
      },
    ],
  },
  {
    id: 2,
    title: "Pro Plan",
    mounthly_plan_fee: 79,
    yearly_plan_fee: 799,
    Features: [
      {
        name: "Access to selected free courses",
        avalibility: true,
      },
      {
        name: "Limited course materials and resources.",
        avalibility: true,
      },
      {
        name: "Basic community support.",
        avalibility: true,
      },
      {
        name: "No certification upon completion.",
        avalibility: true,
      },
      {
        name: "Ad-supported platform.",
        avalibility: true,
      },
      {
        name: "Access to exclusive Pro Plan community forums.",
        avalibility: true,
      },
      {
        name: "Early access to new courses and updates.",
        avalibility: true,
      },
    ],
  },
];

export default pricing;
