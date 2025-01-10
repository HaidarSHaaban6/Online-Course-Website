import { FaEnvelopeOpenText } from "react-icons/fa6";

const ThankYouPop = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full bg-white rounded-xl flex items-center justify-center">
      <div className="flex flex-col items-center">
        <FaEnvelopeOpenText className="text-6xl text-orange/70 mb-10 animate-bounce" />
        <p className="text-3xl font-semibold text-grey/15 text-center">
          your message has been received
        </p>
        <p className="text-xl text-grye/20 text-center">and will be reviewed promptly</p>
      </div>
    </div>
  );
};

export default ThankYouPop;
