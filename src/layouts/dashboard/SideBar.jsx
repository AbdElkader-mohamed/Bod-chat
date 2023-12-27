import Logo from "../../assets/logo.png";
import { Avatar } from "@mui/material";
import { faker } from "@faker-js/faker";
import Nav from "./Nav";
import ToggleMode from "./ToggleMode";

const SideBar = () => {
  return (
    <div className="main-aside__wrapper">
      <div className="main-aside__top">
        <div className="main-aside__logo">
          <img src={Logo} alt="logo" />
        </div>
        <Nav />
      </div>
      <div className="main-aside__bottom">
        <div className="main-aside__bottom__toggle">
          <ToggleMode />
        </div>
        <div className="main-aside__bottom__avatar">
          <Avatar src={faker.image.avatar()} className="img-fluid" alt="img" />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
