import { Nav_Buttons } from "../../data";
import { Divider } from "@mui/material";
import { Gear } from "phosphor-react";
import { useState } from "react";

const Nav = () => {
  const [clicked, setClicked] = useState(0);

  return (
    <nav className="main-aside__nav">
      {Nav_Buttons.map((item, index) =>
        index === clicked ? (
          <button className="main-aside__nav__btn active" key={index}>
            {item.icon}
          </button>
        ) : (
          <button
            onClick={() => setClicked(index)}
            className="main-aside__nav__btn"
            key={index}
          >
            {item.icon}
          </button>
        )
      )}
      <Divider width="100%" />
      {clicked === 3 ? (
        <button className="main-aside__nav__btn active">
          <Gear />
        </button>
      ) : (
        <button onClick={() => setClicked(3)} className="main-aside__nav__btn">
          <Gear />
        </button>
      )}
    </nav>
  );
};

export default Nav;
