import { useDispatch } from "react-redux";
import {
  deleteContactInfo,
  MessagesInfo,
} from "../redux/Slice/contactFormSlice";

const MessagesCard = ({ id, contactInfo }: MessagesInfo) => {
  const dispatch = useDispatch();
  return (
    <div className="px-6 py-5 bg-white rounded-xl lg:px-8 lg:py-7">
      <div className="flex items-center font-vietnam mb-7">
        <div className="grow">
          <p className="text-lg">{contactInfo.subject}</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-grey/15 lg:text-base text-end">
            {contactInfo.firstName} {contactInfo.lastName}
          </p>
          <p className="text-sm text-grey/30 text-end">{contactInfo.email}</p>
        </div>
      </div>
      <div className="border-b border-white/95 pb-7">
        <p className="mb-3 text-base font-semibold">Message:</p>
        <p className="text-grey/30">{contactInfo.message}</p>
      </div>
      <div className="mt-7 text-end">
        <button
          className="px-4 py-3.5 font-medium font-vietnam text-white text-sm custom-2xl:text-lg bg-orange/50 rounded-md hover:cursor-pointer hover:bg-orange/70 duration-300 ml-4"
          onClick={() => dispatch(deleteContactInfo(id))}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default MessagesCard;
