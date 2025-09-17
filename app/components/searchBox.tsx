import ChooseCity from "./mabda";
import Button from "./button";
import Maghsad from "./maghsad";
import Raft from "./raft";
import Bargasht from "./bargasht";
function SearchBox() {
  return (
    <div className="container flex mx-auto h-auto md:h-[156px] rounded-3xl bg-[RGBA(107,108,110,0.8)] my-11 p-4 md:p-0">
      <form
        action="POST"
        className="mx-auto flex flex-col md:flex-row items-center justify-center w-full gap-4 md:gap-5"
      >
        <div className="w-full md:w-auto">
          <ChooseCity />
        </div>
        <div className="w-full md:w-auto">
          <Maghsad />
        </div>
        <div className="w-full md:w-auto">
          <Raft />
        </div>
        <div className="w-full md:w-auto">
          <Bargasht />
        </div>
        <div className="w-full md:w-auto mt-4 md:mt-0">
          <Button type="btn-search">جستجو</Button>
        </div>
      </form>
    </div>
  );
}

export default SearchBox;
