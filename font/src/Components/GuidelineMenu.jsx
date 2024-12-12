import React, { useState } from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const GuidelineMenu = () => {
  const [activeMenu, setActiveMenu] = useState("Dashboard");

  const navigate = useNavigate();

  const handleMenuClick = (menuName, path) => {
    setActiveMenu(menuName); // Update active menu state
    navigate(path);         // Navigate to the specified path
  };

  const MenuItem = ({ isActive, onClick, imgSrc, label }) => (
    <div
      onClick={onClick}
      className={`mt-[35px] flex items-center font-sanchez cursor-pointer ${
        isActive ? "ml-[20px]" : "ml-[40px]"
      } w-[195px]`}
    >
      {isActive && <i className="fas fa-hand-point-right fa-xl"></i>}
      <img className="h-[30px] ml-[6px]" src={imgSrc} alt={label} />
      <p className="ml-[14px] text-[26px]">{label}</p>
    </div>
  );

  return (
    <div className="min-w-[250px] bg-[#D3D2D2] h-[calc(100vh-90px)]">
      <MenuItem
        isActive={activeMenu === "Dashboard"}
        onClick={() => handleMenuClick("Dashboard", "/")}
        imgSrc={assets.dashboard}
        label="Dashboard"
      />
      <MenuItem
        isActive={activeMenu === "newTicket"}
        onClick={() => handleMenuClick("newTicket", "/Newticket")}
        imgSrc={assets.newTicket}
        label="New Ticket"
      />
      <MenuItem
        isActive={activeMenu === "MyTicket"}
        onClick={() => handleMenuClick("MyTicket", "/MyTicket")}
        imgSrc={assets.MyTicket}
        label="My Ticket"
      />
    </div>
  );
};

export default GuidelineMenu;
