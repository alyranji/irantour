import Image from "next/image";
import SVGIMG from "../../public/arrow-left.svg";
import peygiriIcon from "../../public/Xnix_Line_list_check.svg";
type buttonProps = {
  type: string;
  children: React.ReactNode;
  hasShadow?: boolean;
  hasBg?: boolean;
};

function Button({ type, children, hasShadow, hasBg }: buttonProps) {
  if (type === "readmore") {
    return (
      <button
        className={`bg-color1 py-[13px] px-[14px] flex items-center gap-[8px] rounded-lg text-white ${
          hasShadow ? "drop-shadow-[0_4px_10px_rgba(255,131,0,0.5)]" : ""
        }`}
      >
        {children}
        <Image src={SVGIMG} alt="left-arrow" width={24} height={24} />
      </button>
    );
  } else if (type === "btn-search") {
    return (
      <button
        className={`bg-color1 py-[21px] px-[81px] h-[70px] flex items-center gap-[8px] rounded-lg text-white ${
          hasShadow ? "drop-shadow-[0_4px_10px_rgba(255,131,0,0.5)]" : ""
        }`}
      >
        {children}
      </button>
    );
  } else if (type === "apply") {
    return (
      <button
        className={`bg-color1 py-[3px] px-[48px] h-10 flex items-center gap-[8px] rounded-lg text-white ${
          hasShadow ? "drop-shadow-[0_4px_10px_rgba(255,131,0,0.5)]" : ""
        }`}
      >
        {children}
      </button>
    );
  } else if (type === "login") {
    return (
      <button
        className={`bg-white py-[4px] px-[26px] h-10 rounded-lg text-black border border-[#CACAC1] ${
          hasBg ? "bg-[rgba(135,131,131,0.1)]" : ""
        }`}
      >
        {children}
      </button>
    );
  } else if (type === "buy") {
    return (
      <button
        className={`bg-color1 py-[8px] px-[41px] h-10 rounded-lg text-white ${
          hasShadow ? "drop-shadow-[0_4px_10px_rgba(255,131,0,0.5)]" : ""
        }`}
      >
        {children}
      </button>
    );
  } else if (type === "tracking") {
    return (
      <button className=" text-black text-sm h-[24px] w-[109px] gap-2 flex justify-center items-center rounded-lg my-auto ">
        <Image
          src={peygiriIcon}
          alt="purchase tracking"
          width={24}
          height={24}
        />
        {children}
      </button>
    );
  }
}

export default Button;
