import React from "react";
import closeIcon from "../icons/closeIcon.png";
import onlineIcon from "../icons/onlineIcon.png";

const InfoNav = ({ room }) => (
  <div>
    <div className="left">
      <img src={onlineIcon} alt="icon" />
      <h3>{room}</h3>
    </div>
    <div className="right">
      <a href="/">
        <img src={closeIcon} alt="close" />
      </a>
    </div>
  </div>
);

export default InfoNav;
