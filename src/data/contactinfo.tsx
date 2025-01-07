import { FaEnvelope, FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

import { ContactInfoCardProps } from "../ui/ContactInfoCard";

export const contactInfoData: ContactInfoCardProps[] = [
  {
    info: "support@skillbridge.com",
    icons: [<FaEnvelope />],
  },
  {
    info: "+963 935 741 791",
    icons: [<FaPhoneAlt />],
  },
  {
    info: "Syria, Homs",
    icons: [<FaLocationDot />],
  },
  {
    info: "Social Profiles",
    icons: [<FaFacebook />, <FaTwitter />, <FaLinkedin />],
  },
];
