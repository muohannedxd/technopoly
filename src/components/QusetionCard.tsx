import { RegistrationInfo } from "@/lib/data/registrationsinfo.data";
import { ChangeEvent } from "react";

interface QuestionCardProps {
  label: string;
  name: keyof RegistrationInfo;
  type: string;
  value: string;
  error: string;
  onChange: (name: keyof RegistrationInfo, value: string) => void;
  onNext: () => void;
  onBack: () => void;
  onSubmit: () => void;
  isNextDisabled: boolean;
  isBackDisabled: boolean;
  gradient: string;
}


const QuestionCard: React.FC<QuestionCardProps> = ({
  label,
  name,
  type,
  value,
  error,
  onChange,
  onNext,
  onBack,
  onSubmit,
  isNextDisabled,
  isBackDisabled,
  gradient,
}) => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(name, event.target.value);
  };

  const inputBorderColor =
    gradient === "linear-gradient(to right, #009EFF, #8A2BE2)" ? "white" : "black";

  const backButtonStyles =
    gradient === "linear-gradient(to right, #009EFF, #8A2BE2)"
      ? "border-white text-white"
      : "border-purple text-purple";

  const nextButtonStyles =
    gradient === "linear-gradient(to right, #009EFF, #8A2BE2)"
      ? "bg-[#F79A02] text-white"
      : "bg-purple text-white";

  return (
    <div
      className="flex flex-col h-[65vh] w-[55vw] rounded-[30px] border-[6px] border-black shadow-xl"
      style={{ background: gradient }}
    >
      <h1
        className="text-[2.4rem] ml-[7vw] mt-[11vh] mb-[4vh] font-semibold"
        style={{ color: inputBorderColor }}
      >
        {label}
      </h1>
      <input
        type={type}
        value={value}
        onChange={handleInputChange}
        className={`text-[2rem] bg-transparent border-b-2 focus:outline-none text-lg placeholder-gray-500 ml-[7vw] mb-[2vh] w-[35vw]`}
        style={{
          borderBottomColor: inputBorderColor,
        }}
      />
      {error && (
        <p className="text-red-600 text-[1.5rem] ml-[7vw] font-bold">{error}</p>
      )}
      <div className="flex justify-between px-28 mt-[20vh]">
        <button
          className={`border-2 py-3 px-6 rounded-[14px] w-[6vw] h-[5vh] text-center ${backButtonStyles} ${
            isBackDisabled ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={onBack}
          disabled={isBackDisabled}
        >
          &lt;&lt; Back
        </button>

        {isNextDisabled ? (
          <button
            className="bg-purple text-white py-3 px-6 rounded-[14px] w-[6vw] h-[5vh] text-center"
            onClick={onSubmit}
          >
            Submit
          </button>
        ) : (
          <button
            className={`py-3 px-6 rounded-[14px] w-[6vw] h-[5vh] text-center ${nextButtonStyles}`}
            onClick={onNext}
          >
            Next &gt;&gt;
          </button>
        )}
      </div>
    </div>
  );
};

export default QuestionCard;
