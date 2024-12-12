import React from "react";
import { useNavigate } from "react-router-dom";

const ProfileSetting = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };
  return (
    <div className="px-[50px]">
      <p className="text-[36px] font-sanchez font-normal py-[15px]">
        User Profile
      </p>
      <div className=" cursor-pointer h-[59px] w-[231px] bg-[#55D6C2] flex justify-center items-center text-[26px] font-sanchez font-normal">
        Edit Account
      </div>
      <table className="border-[#C4C4C4] w-full">
        <tbody>
          <tr className="border-y-[5px] bg-[#8F8C8C] text-[#fff] font-sanchez text-[26px] h-[48px]">
            <td className="w-1/2 px-4">Username</td>
            <td className="w-1/2 bg-[#fff] text-[#000] px-4"></td>
          </tr>
          <tr className="border-y-[5px] bg-[#8F8C8C] text-[#fff] font-sanchez text-[26px] h-[48px]">
            <td className="w-1/2 px-4">Current Password</td>
            <td className="w-1/2 bg-[#fff] text-[#000] px-4"></td>
          </tr>
          <tr className="border-y-[5px] bg-[#8F8C8C] text-[#fff] font-sanchez text-[26px] h-[48px]">
            <td className="w-1/2 px-4">New Password</td>
            <td className="w-1/2 bg-[#fff] text-[#000] px-4"></td>
          </tr>
          <tr className="border-y-[5px] bg-[#8F8C8C] text-[#fff] font-sanchez text-[26px] h-[48px]">
            <td className="w-1/2 px-4">Conform Password</td>
            <td className="w-1/2 bg-[#fff] text-[#000] px-4"></td>
          </tr>
          <tr className="border-y-[5px] bg-[#8F8C8C] text-[#fff] font-sanchez text-[26px] h-[48px]">
            <td className="w-1/2 px-4">Email</td>
            <td className="w-1/2 bg-[#fff] text-[#000] px-4"></td>
          </tr>
          <tr className="border-y-[5px] bg-[#8F8C8C] text-[#fff] font-sanchez text-[26px] h-[48px]">
            <td className="w-1/2 px-4">Real Name</td>
            <td className="w-1/2 bg-[#fff] text-[#000] px-4"></td>
          </tr>
          <tr className="border-y-[5px] bg-[#8F8C8C] text-[#fff] font-sanchez text-[26px] h-[48px]">
            <td className="w-1/2 px-4">Access Level</td>
            <td className="w-1/2 bg-[#fff] text-[#000] px-4"></td>
          </tr>
          <tr className="border-y-[5px] bg-[#8F8C8C] text-[#fff] font-sanchez text-[26px] h-[48px]">
            <td className="w-1/2 px-4">Project Access Level</td>
            <td className="w-1/2 bg-[#fff] text-[#000] px-4"></td>
          </tr>
          <tr className="border-y-[5px] bg-[#C4C4C4] font-sanchez text-[26px] h-[48px]">
            <td className="w-1/2 px-4 border-r-2">
              <div onClick={() => handleNavigation("/Profile")} className="cursor-pointer h-[59px] m-2 w-[231px] bg-[#55D6C2] flex justify-center items-center text-[26px] font-sanchez font-normal">
                Update User
              </div>
            </td>
            <td className="w-1/2"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProfileSetting;
