import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };
    const [rating, setRating] = useState(0); 

    const handleClick = (index) => {
      setRating(index);
    };
  return (
    <div className="px-[50px]">
      <p className="text-[36px] font-sanchez font-normal py-[15px]">
        User Profile
      </p>
      <div className="bg-[#55D6C2AD] w-full h-[707px] flex justify-evenly flex-wrap">
        <div className="w-[471px] h-[426px] bg-[#fff] shadow-custom1 my-[45px] rounded-[22px]">
          <div className="flex justify-end items-center px-5 pt-8">
            <i onClick={() => handleNavigation("/ProfileSetting")} style={{cursor:"pointer"}} class="fas fa-edit fa-2xl"></i>
          </div>
          <div className="flex justify-center items-center">
            <span className="text-[100px] bg-[#C4C4C4] rounded-full p-[10px] h-[160px] w-[160px]">
              &#x1F464;
            </span>
          </div>
          <div className="p-[37px]">
            <p className="text-[24px] font-sanchez font-normal py-[1px]">
              Username
            </p>
            <p className="text-[24px] font-sanchez font-normal py-[1px]">
              Contact Number
            </p>
            <p className="text-[24px] font-sanchez font-normal py-[1px]">
              Email
            </p>
            <p className="text-[24px] font-sanchez font-normal py-[1px]">
              Department
            </p>
          </div>
        </div>
        <div className="w-[399px] h-[234px] bg-[#fff] shadow-custom1 my-[45px] rounded-[22px] py-[26px] px-[47px]">
          <p className="text-[18px] font-sanchez text-center font-normal py-[1px]">
          Give Your Feedback
          </p>
          <form
            action=""
            method="post"
            className="flex flex-col flex-1 justify-between"
          >
            <textarea
              name="Feedback"
              id="Feedback"
              required
              className="bg-[#9C9C9C] resize-none h-[50px] text-white text-[20px] p-2"
            >[Lorem Ipsum]</textarea>
            <div className="flex justify-evenly">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`text-3xl cursor-pointer ${
                  star <= rating ? "text-yellow-400" : "text-black"
                }`}
                onClick={() => handleClick(star)}
              >
                {star <= rating ? "★" : "☆"}
              </span>
            ))}
            </div>
            <input
              type="button"
              value="Submit Feedback"
              className="bg-[#55D6C2] rounded-[10px] h-[50px] text-[30px] "
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
