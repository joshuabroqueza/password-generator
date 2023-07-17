import copy_icon from "./assets/icon-copy.svg";
import arrow_right from "./assets/icon-arrow-right.svg";

export default function App() {
  return (
    <div className="bg-more-black h-screen w-full px-5 flex flex-col justify-center items-center font-jetbrains">
      {/* HEADER */}
      <div>
        <h1 className="text-semi-gray text-xl">Password Generator</h1>
      </div>
      {/* PASSWORD VALUE */}
      <div className="text-jetbrains password_value flex justify-between flex-row border w-full p-5 bg-semi-black m-5">
        <div className="text-semi-white font-semibold">TEXT CONTENT HERE</div>
        <button>
          <img src={copy_icon} alt="copy icon" />
        </button>
      </div>

      {/* BODY */}
      <div className="text-semi-gray bg-semi-black w-full border p-5">
        {/* CHARACTER LENGTH CONTAINER */}
        <div className="character_length_container">
          <div className="flex flex-row justify-between items-center my-3">
            <h1 className="font-semibold text-semi-white">Character Length</h1>
            <div className="character_length_value text-2xl text-more-green">
              10
            </div>
          </div>
          <div className="input_bar_container">
            {/* INPUT BAR ELEMENT WITH A MINIMUM 1 AND MAX 20 VALUE */}

            <input
              min="1"
              max="20"
              type="range"
              className="in-range:border-more-green w-full in-range:bg-more-green in-range:text-more-green"
            />
          </div>

          {/* INCLUDE IN THE PASSWORD CONTAINER */}
          <div className="my-10">
            <div className="p_include_child py-3 my-1">
              <input
                type="checkbox"
                name="uppercase"
                id="uppercase"
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
                className="mr-10 active:bg-more-green"
              />
              <label htmlFor="include_symbols" className="text-semi-white">
                Include Symbols
              </label>
            </div>
          </div>

          {/* DIPLAY PASSWORD STRENGTH STATUS */}
          <div className="flex flex-row justify-between bg-more-black p-5">
            <h1 className="text-semi-gray font-semibold uppercase">Strength</h1>
            <div className="text-semi-white font-semibold">MEDIUM</div>
            <div className="strength_status_container flex flex-row justify-center w-1/3">
              <div className="strength_status_child w-2 mx-1 border h-full bg-more-green"></div>
              <div className="strength_status_child w-2 mx-1 border h-full bg-more-green"></div>
              <div className="strength_status_child w-2 mx-1 border h-full bg-more-green"></div>
              <div className="strength_status_child w-2 mx-1 border h-full bg-more-green"></div>
            </div>
          </div>

          {/* GENERATE PASSWORD BUTTON */}
          <button className=" bg-more-green my-10 p-5 w-full flex flex-row justify-center items-center">
            <span className="text-more-black font-bold">GENERATE</span>
            <img src={arrow_right} alt="arrow_right" className="mx-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
