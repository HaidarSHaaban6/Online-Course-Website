import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import MessagesCard from "../ui/MessagesCard";

const Dashboard = () => {
  const messages = useSelector((state: RootState) => state.contact);
  return (
    <div className="min-h-[80vh] flex">
      <div className="custom-container grow flex flex-col">
        <p
          className="mb-4 font-semibold lg:mb-0 text-grey/15 text-[28px] leading-[42px]
        lg:text-[38px] lg:leading-[57px]
        custom-2xl:text-[48px] custom-2xl:leading-[72px]"
        >
          Masseges Recieved
        </p>
        <div className="flex flex-col gap-y-4 pt-10 grow">
          {messages.length > 0 ? (
            messages.map((message, index) => (
              <MessagesCard
                key={index}
                id={message.id}
                contactInfo={message.contactInfo}
              />
            ))
          ) : (
            <p className="text-center text-grey/60 my-auto">No Messages Found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
