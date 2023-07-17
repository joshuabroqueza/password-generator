import copy_icon from "./assets/icon-copy.svg";
import arrow_right from "./assets/icon-arrow-right.svg";
import { useState } from "react";
import InputContainer from "./components/InputContainer";
import CharacterLengthSlider from "./components/CharacterLenghtSlider";
import DisplayPasswordStrength from "./components/DisplayPasswordStrength";

export default function App() {
  const [include_in_password, setInclude_in_password] = useState({
    uppercase: false,
    lowercase: false,
    include_numbers: false,
    include_symbols: false,
  });

  const [passwordValue, setPasswordValue] = useState("P4$5W0rD!");

  const [character_length, setCharacter_length] = useState(0);

  const handleCharacterLengthChange = (value) => {
    setCharacter_length(value);
  };

  const handleIncludeInPasswordChange = (updatedIncludeInPassword) => {
    setInclude_in_password(updatedIncludeInPassword);
  };

  const handleGeneratePassword = () => {
    const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()";

    let possibleChars = "";
    let generatedPassword = "";

    if (include_in_password.uppercase) {
      possibleChars += uppercaseLetters;
    }
    if (include_in_password.lowercase) {
      possibleChars += lowercaseLetters;
    }
    if (include_in_password.include_numbers) {
      possibleChars += numbers;
    }
    if (include_in_password.include_symbols) {
      possibleChars += symbols;
    }

    const possibleCharsLength = possibleChars.length;

    for (let i = 0; i < character_length; i++) {
      const randomIndex = Math.floor(Math.random() * possibleCharsLength);
      generatedPassword += possibleChars[randomIndex];
    }

    setPasswordValue(generatedPassword);
  };

  const handleCopyPassword = () => {
    navigator.clipboard.writeText(passwordValue);
  };

  return (
    <div
      className="bg-more-black h-screen w-full px-5 md:px-20 lg:px-60
     flex flex-col justify-center items-center font-jetbrains"
    >
      {/* HEADER */}
      <div>
        <h1 className="text-semi-gray text-xl">Password Generator</h1>
      </div>
      {/* PASSWORD VALUE */}
      <div className="text-jetbrains password_value flex justify-between flex-row border w-full p-5 bg-semi-black m-5">
        <div
          className={
            passwordValue === "P4$5W0rD!"
              ? `text-semi-gray font-semibold`
              : `text-semi-white font-semibold`
          }
        >
          {passwordValue}
        </div>
        <button onClick={() => handleCopyPassword()}>
          <img src={copy_icon} alt="copy icon" />
        </button>
      </div>

      {/* BODY */}
      <div className="text-semi-gray bg-semi-black w-full border p-5">
        {/* CHARACTER LENGTH CONTAINER */}
        <CharacterLengthSlider
          character_length={character_length}
          onCharacterLengthChange={handleCharacterLengthChange}
        />

        {/* INCLUDE IN THE PASSWORD CONTAINER */}
        <InputContainer
          include_in_password={include_in_password}
          onIncludeInPasswordChange={handleIncludeInPasswordChange}
        />

        {/* DIPLAY PASSWORD STRENGTH STATUS */}
        <DisplayPasswordStrength
          include_in_password={include_in_password}
          character_length={character_length}
        />

        {/* GENERATE PASSWORD BUTTON */}
        <button
          onClick={() => {
            handleGeneratePassword();
          }}
          className=" bg-more-green active:bg-semi-black active:border-more-green active:border active:text-more-green shadow-md hover:shadow-xl active:scale-90 transition duration-300 my-10 p-5 w-full flex flex-row justify-center items-center"
        >
          <span className="text-more-black font-bold">GENERATE</span>
          <img src={arrow_right} alt="arrow_right" className="mx-4" />
        </button>
      </div>
    </div>
  );
}
