
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";


interface FooterListProps{
    children:React.ReactNode;
}

interface link{
    id:string;
    name:string
  
  }
  interface icon{
    icon:React.ReactNode,
  }  
  export const icons:icon[]=[
    {icon:<FaFacebook />},{icon:<FaTwitter />},{icon:<FaLinkedin />},
  ]
  export const homelinks:link[]=
    [{
      id:'#benefits',
      name:'Benefits'
    },
    {
      id:'#courses',
      name:'Our Courses'
    },
    {
      id:'#testimoinals',
      name:'Our Testimonials'
    },
    {
      id:'#faq',
      name:'Our FAQ'
    },
    ]
    export const aboutlinks:link[]=
    [{
      id:'#company',
      name:'Company'
    },
    {
      id:'#Achievements',
      name:'Achievements'
    },
    {
      id:'#goal',
      name:'Our Goals'
    },]
   
const FooterList = ({children}:FooterListProps) => {
   
  return (
    <div className=''>
      {children}
    </div>
  )
}

export default FooterList
