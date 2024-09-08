import HomeMiddle from "../homemiddle/page";
import HomeRight from "../homeright/page";

const HomeSecond = () => {
  return (
    <div className="flex w-full justify-center gap-4 p-2">
      <div className="w-full md:w-1/2  ">
        <HomeMiddle />
      </div>
      <div className="hidden md:block w-1/4 ">
        <HomeRight />
      </div>
    </div>
  );
};

export default HomeSecond;
