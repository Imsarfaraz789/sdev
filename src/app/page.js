import HomeLeft from "./component/homeleft/page";
import HomeMiddle from "./component/homemiddle/page";
import HomeRight from "./component/homeright/page";

const Home = () => {
  return (
    <div className="flex w-full justify-center gap-4 p-2">
      <div className="hidden md:block w-1/4  ">
        <HomeLeft />
      </div>
      <div className="w-full md:w-1/2  ">
        <HomeMiddle />
      </div>
      <div className="hidden md:block w-1/4  ">
        <HomeRight />
      </div>
    </div>
  );
};

export default Home;
