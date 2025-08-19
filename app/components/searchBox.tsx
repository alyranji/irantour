import ChooseCity from "./mabda";
import Button from "./button";
import Maghsad from "./maghsad";
import Raft from "./raft";
import Bargasht from "./bargasht";
function SearchBox() {
  return (
    <div className="container flex mx-auto h-[156px] rounded-3xl bg-[RGBA(107,108,110,0.8)] my-11">
      <form
        action="POST"
        className="mx-auto flex items-center justify-center w-[1047] gap-5"
      >
        <ChooseCity />
        <Maghsad />
        <Raft />
        <Bargasht />
        <Button type="btn-search">جستجو</Button>
      </form>
    </div>
  );
}

export default SearchBox;
