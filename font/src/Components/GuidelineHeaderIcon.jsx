import React from "react";
import { useNavigate } from "react-router-dom";

const GuidelineHeaderIcon = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };
  return (
    <div className="mr-[33px] flex justify-evenly items-center w-[200px]">
      <div className="w-[75px] border border-x-[5px] rounded-[10%] border-y-[2px] border-black flex h-[27px]">
        <div className="flex justify-center items-center text-[13px] font-mono bg-black text-white w-[50%]">
          BM
        </div>
        <div className="flex justify-center items-center text-[13px] font-mono w-[50%]">
          BI
        </div>
      </div>
      <div className="cursor-pointer">
        <i class="fa fa-bell fa-xl"></i>
      </div>
      <div className="cursor-pointer">
        <i onClick={() => handleNavigation("/Profile")} class="fa fa-user fa-xl"></i>
      </div>
      <div className="cursor-pointer">
        <i onClick={() => handleNavigation("/SignIn")} class="fa fa-sign-out fa-xl"></i>
      </div>
    </div>
  );
};

export default GuidelineHeaderIcon;
