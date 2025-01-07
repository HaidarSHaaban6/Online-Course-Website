import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Dashboard = () => {
    const messages = useSelector((state: RootState) => state.contact)
  return (
    <div className="min-h-[80vh]">
      <div className="custom-container">
        <p
          className="mb-4 font-semibold lg:mb-0 text-grey/15 text-[28px] leading-[42px] 
        lg:text-[38px] lg:leading-[57px]
        custom-2xl:text-[48px] custom-2xl:leading-[72px]"
        >
          Masseges Recieved
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
