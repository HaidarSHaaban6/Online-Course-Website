// <li onClick={() => setChecked(!checked)}
      
//             className=" cursor-pointer border-1 border-white/95 custom-2xl:p-[14px] custom-2xl:gap-3 custom-2xl:rounded-lg  p-3 rounded-md gap-2">
//                <div
//                   className={`p-[6px] flex items-center justify-center text-grey/15 rounded-md border-1 border-white/95 ${
//                     checked ? " bg-orange/95" : " bg-transparent"
//                   }`}
//                 >
//                   {checked ? (
//                     <IoMdCheckmark />
//                   ) : (
//                     <IoClose />
//                   )}
//                 </div>
//                 <span className="">{label}</span>
//            </li>



export interface Features {
  name: String;
  avalibility: Boolean;
}

 export interface Pricing {
  id: Number;
  title: String;
  plan_fee?:string|Number|any;
  usedPlan?:string|Number|any;
  available?:string;
  monthPlan:string;
  yearPlan:string;
  monthly_plan_fee:string;
  yearly_plan_fee: string;
  Features: Features[];
}
interface pricingHead{
  title:string;
  subtitle:string;
  title1:string;
  subtitle1:string;
}

export const pricingHead=<pricingHead>{
  title:"Our Pricing",
  subtitle:"Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.",
  title1:"Our Pricings",
  subtitle1:"Welcome to SkillBridge's Pricing Plan page, where we offer two comprehensive options to cater to your needs: Free and Pro. We believe in providing flexible and affordable pricing options for our services. Whether you're an individual looking to enhance your skills or a business seeking professional development solutions, we have a plan that suits you. Explore our pricing options below and choose the one that best fits your requirements.",}


  export const pricing: Pricing[] = [
  {
    id: 1,
    title: "Free Plan",
    monthPlan:'/month',
    yearPlan:'/Year',
    monthly_plan_fee: "$0",
    yearly_plan_fee: "$0",
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
    monthPlan:'/month',
    yearPlan:'/Year',
    monthly_plan_fee: "$79",
    yearly_plan_fee: "$799",
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
