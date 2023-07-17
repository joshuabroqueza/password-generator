import React from "react";

const DisplayPasswordStrength = ({ character_length, include_in_password }) => {
  let passwordStrength = "WEAK";
  let strengthStatusClasses = "strength_status_child  w-2 mx-1 border h-full";

  if (
    character_length < 10 &&
    Object.values(include_in_password).filter(Boolean).length === 0
  ) {
    passwordStrength = "TOO WEAK";
    strengthStatusClasses += " bg-semi-red";
  } else if (
    character_length >= 8 &&
    character_length <= 12 &&
    Object.values(include_in_password).filter(Boolean).length >= 2
  ) {
    passwordStrength = "MEDIUM";
    strengthStatusClasses += " bg-semi-orange";
  } else if (
    character_length > 10 &&
    Object.values(include_in_password).filter(Boolean).length === 3
  ) {
    passwordStrength = "STRONG";
    strengthStatusClasses += " bg-semi-yellow";
  } else if (
    character_length > 12 &&
    Object.values(include_in_password).filter(Boolean).length === 4
  ) {
    passwordStrength = "VERY STRONG";
    strengthStatusClasses += " bg-more-green";
  }

  return (
    <div className="flex flex-row justify-between bg-more-black p-5">
      <h1 className="text-semi-gray font-semibold uppercase">Strength</h1>
      <div className="text-semi-white font-semibold">{passwordStrength}</div>
      <div className="strength_status_container flex flex-row justify-center w-1/3">
        <div className={strengthStatusClasses}></div>
        <div className={strengthStatusClasses}></div>
        <div className={strengthStatusClasses}></div>
        <div className={strengthStatusClasses}></div>
      </div>
    </div>
  );
};

export default DisplayPasswordStrength;
