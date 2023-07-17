import copy_icon from "./assets/icon-copy.svg";

export default function App() {
  return (
    <div className="bg-more-black h-screen flex flex-col justify-center items-center font-jetbrains">
      {/* HEADER */}
      <div>
        <h1 className="text-semi-gray text-xl">Password Generator</h1>
      </div>
      {/* PASSWORD VALUE */}
      <div className="text-jetbrains password_value flex justify-between flex-row border w-96 p-5 bg-semi-black m-5">
        <div className="text-semi-white font-semibold">TEXT CONTENT HERE</div>
        <button>
          <img src={copy_icon} alt="copy icon" />
        </button>
      </div>

      {/* BODY */}
      <div className="text-semi-gray bg-semi-black  h-3/4 w-96 border"></div>
    </div>
  );
}
