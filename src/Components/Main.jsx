import { RouteMain } from "../Router/RouteMain";
// import { Home } from "./Home";
import { Navbar } from "./Navbar";
import FixSocialIcon from "./SocialIcon/FixSocialIcon";

export const Main = () => {
  return (
    <div className="main">
      {/* <Home/> */}
      <Navbar />
      <RouteMain />
      <FixSocialIcon />
    </div>
  );
};
