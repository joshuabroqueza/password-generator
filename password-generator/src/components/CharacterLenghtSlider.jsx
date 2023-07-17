import React from "react";

const CharacterLengthSlider = ({
  character_length,
  onCharacterLengthChange,
}) => {
  const handleSliderChange = (event) => {
    const value = parseInt(event.target.value);
    onCharacterLengthChange(value);
  };

  return (
    <div className="character_length_container">
      <div className="flex flex-row justify-between items-center my-3">
        <h1 className="font-semibold text-semi-white">Character Length</h1>
        <div className="character_length_value text-2xl text-more-green">
          {character_length}
        </div>
      </div>
      <div className="input_bar_container">
        {/* INPUT BAR ELEMENT WITH A MINIMUM 1 AND MAX 20 VALUE */}
        <input
          min="1"
          max="20"
          type="range"
          value={character_length}
          onChange={handleSliderChange}
          className="in-range:border-more-green w-full in-range:bg-more-green in-range:text-more-green"
        />
      </div>
    </div>
  );
};

export default CharacterLengthSlider;
