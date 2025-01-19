import { useEffect, useState } from "react";
import LabeledInput from "../ui/LabeledInput";
import { addContactInfo, contactInfo } from "../redux/slice/contactFormSlice";
import ContactService from "../Services/ContactService";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import ConfittiEffect from "../ui/ConfittiEffect";
import { contactInfoData } from "../data/contactinfo";
import ContactInfoCard from "../ui/ContactInfoCard";
import { useNavigate } from "react-router-dom";
import ThankYouPop from "../ui/ThankYouPop";
import useAOS from "../hooks/useAOS";

const ContactSection = () => {
  const currentUser = useSelector((state: RootState) => state.auth.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userFullName = currentUser?.fullName.split(" ", 2) || ["", ""];
  const [success, setSeccess] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [contactInfo, setContactInfo] = useState<contactInfo>({
    firstName: userFullName[0],
    lastName: userFullName[1],
    email: currentUser?.email || "",
    phone: "+963",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<contactInfo>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  // confitti variations
  const widthVariations = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  const colorVariations = ["#FF9500", "#FFBF66", "#FFCA80", "#FFD599"];
  const duration = 5;
  const delay = 2;
  const handleSubmition = () => {
    if (!currentUser) navigate("/login");
    else {
      const { errors, hasErrors } = ContactService.validateContact(contactInfo);
      if (hasErrors) setErrors(errors);
      else {
        dispatch(addContactInfo(contactInfo));
        setErrors({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        setShowThankYou(true);
        setSeccess(true);
      }
    }
  };

  useEffect(() => {
    if (success) setTimeout(() => setSeccess(false), (duration + delay) * 1000);
  }, [success]);
 useAOS();
  return (
    <div className="mb-[50px] lg:mb-20 custom-2xl:mb-[150px]" data-aos="fade-up">
      <ConfittiEffect
        count={300}
        widthVariations={widthVariations}
        colorVariations={colorVariations}
        duration={duration}
        delay={delay}
        show={success}
      />
      <div className="custom-container">
        <div className="bg-white rounded-xl flex flex-wrap">
          <div
            className="
                    w-full p-[30px] border-b border-white/95 relative overflow-hidden
                    lg:w-[70%] lg:p-[60px] lg:border-e lg:border-b-0 "
          >
            {showThankYou && <ThankYouPop />}
            <div className="flex gap-x-6 mb-6 flex-col md:flex-row gap-y-6 md:gap-y-0">
              <div className="grow">
                <LabeledInput<contactInfo>
                  label="First Name"
                  placeholder="Enter Your First Name"
                  name="firstName"
                  inputType="text"
                  error={errors.firstName}
                  data={contactInfo.firstName}
                  setData={setContactInfo}
                />
              </div>
              <div className="grow">
                <LabeledInput<contactInfo>
                  label="Last Name"
                  placeholder="Enter Your Last Name"
                  name="lastName"
                  inputType="text"
                  error={errors.lastName}
                  data={contactInfo.lastName}
                  setData={setContactInfo}
                />
              </div>
            </div>
            <div className="flex gap-x-6 mb-6 flex-col md:flex-row gap-y-6 md:gap-y-">
              <div className="grow">
                <LabeledInput<contactInfo>
                  label="Email"
                  placeholder="Enter Your Email"
                  name="email"
                  inputType="email"
                  error={errors.email}
                  data={contactInfo.email}
                  setData={setContactInfo}
                />
              </div>
              <div className="grow">
                <LabeledInput<contactInfo>
                  label="phone"
                  placeholder="Enter Your Phone"
                  name="phone"
                  inputType="text"
                  error={errors.phone}
                  data={contactInfo.phone}
                  setData={setContactInfo}
                />
              </div>
            </div>
            <div className="mb-10">
              <LabeledInput<contactInfo>
                label="Subject"
                placeholder="Enter Your Subject"
                name="subject"
                inputType="text"
                error={errors.subject}
                data={contactInfo.subject}
                setData={setContactInfo}
              />
            </div>
            <div className="mb-10">
              <LabeledInput<contactInfo>
                label="Message"
                placeholder="Enter Your Message here..."
                name="message"
                inputType="textarea"
                error={errors.message}
                data={contactInfo.message}
                setData={setContactInfo}
              />
            </div>
            <div className="text-center">
              <button
                className="
                bg-orange/50 rounded-md font-sm font-vietnam text-white px-5 py-3.5 duration-300 font-meduim w-full inline-block
                md:w-fit
                hover:bg-orange/70"
                onClick={handleSubmition}
              >
                Send Your Message
              </button>
            </div>
          </div>
          <div
            className="
                      w-full flex flex-col gap-y-6 p-[30px]
                      lg:w-[30%] lg:p-[60px]
                      "
          >
            {contactInfoData.map((info, index) => (
              <ContactInfoCard
                info={info.info}
                icons={info.icons}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
