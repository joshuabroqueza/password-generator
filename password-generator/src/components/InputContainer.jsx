import React from "react";
import { useState } from "react";

const InputContainer = ({ include_in_password, onIncludeInPasswordChange }) => {
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    const updatedIncludeInPassword = {
      ...include_in_password,
      [name]: checked,
    };
    onIncludeInPasswordChange(updatedIncludeInPassword);
  };

  return (
    <div className="my-10">
      <div className="p_include_child py-3 my-1">
        <input
          type="checkbox"
          name="uppercase"
          id="uppercase"
          checked={include_in_password.uppercase}
          onChange={handleCheckboxChange}
          className="mr-10 active:bg-more-green"
        />
        <label htmlFor="uppercase" className="text-semi-white">
          Include Uppercase Letters
        </label>
      </div>
      <div className="p_include_child py-3 my-1">
        <input
          type="checkbox"
          name="lowercase"
          id="lowercase"
          checked={include_in_password.lowercase}
          onChange={handleCheckboxChange}
          className="mr-10 active:bg-more-green"
        />
        <label htmlFor="lowercase" className="text-semi-white">
          Include Lowercase Letters
        </label>
      </div>
      <div className="p_include_child py-3 my-1">
        <input
          type="checkbox"
          name="include_numbers"
          id="include_numbers"
          checked={include_in_password.include_numbers}
          onChange={handleCheckboxChange}
          className="mr-10 active:bg-more-green"
        />
        <label htmlFor="include_numbers" className="text-semi-white">
          Include Numbers
        </label>
      </div>
      <div className="p_include_child py-3 my-1">
        <input
          type="checkbox"
          name="include_symbols"
          id="include_symbols"
          checked={include_in_password.include_symbols}
          onChange={handleCheckboxChange}
          className="mr-10 active:bg-more-green"
        />
        <label htmlFor="include_symbols" className="text-semi-white">
          Include Symbols
        </label>
      </div>
    </div>
  );
};

export default InputContainer;
