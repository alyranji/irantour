import walletIcon from "../../public/Wallet icon.svg";
import heartIcon from "../../public/heart icon.svg";
import calendarIcon from "../../public/Calendar_Check icon.svg";
import Image from "next/image";
const Advantages = () => {
  return (
    <div className="w-[1047px] mx-auto z-10 relative bg-white rounded-3xl -mt-[5%] h-[138px] shadow-[0px_4px_70px_0px_rgba(0,_0,_0,_0.25)] flex items-center ">
      <div className="w-[766px] mx-auto items-center flex gap-10">
        <div className=" w-[235px] flex items-start">
          <Image src={walletIcon} width={45} height={45} alt="wallet-icon" />
          <div>
            <h3 className="btn-small">بهترین گارانتی قیمت ها</h3>
            <p className="body-medium text-color4">
              کمترین قیمت و با کیفیت ترین خدمات
            </p>
          </div>
        </div>
        <div className=" w-[235px] flex items-start">
          <Image src={calendarIcon} width={45} height={45} alt="wallet-icon" />
          <div>
            <h3 className="btn-small">رزرو سریع</h3>
            <p className="body-medium text-color4">
              بهترین هتل ها و پرواز ها در اختیار شما
            </p>
          </div>
        </div>
        <div className=" w-[235px] flex items-start">
          <Image src={heartIcon} width={45} height={45} alt="wallet-icon" />
          <div>
            <h3 className="btn-small">رضایت مشتریان</h3>
            <p className="body-medium text-color4">
              آسایش و رضایت مشتریان بهتری رسالت ماست
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
