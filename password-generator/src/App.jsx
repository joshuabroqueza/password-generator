import copy_icon from "./assets/icon-copy.svg";

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
      <div className="text-semi-gray bg-semi-black h-3/4 w-full border p-5">
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
        </div>
      </div>
    </div>
  );
}
