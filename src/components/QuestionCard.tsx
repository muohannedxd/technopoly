import React, { useState, useEffect } from "react";
import { Loader2 } from "lucide-react";

interface QuestionCardProps {
  section: string;
  questions: {
    label: string;
    name: string;
    type: string;
    value: string | string[];
    options?: string[];
  }[];
  errors: { [key: string]: string };
  onChange: (name: string, value: string | string[]) => void;
  onNext: () => void;
  onBack: () => void;
  onSubmit: () => void;
  isNextDisabled: boolean;
  isBackDisabled: boolean;
  gradient: string;
  isSubmitting: boolean;
  isSchoolChanged: string;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  section,
  questions,
  errors,
  onChange,
  onNext,
  onBack,
  onSubmit,
  isNextDisabled,
  isBackDisabled,
  gradient,
  isSubmitting,
  isSchoolChanged,
}) => {
  const [_, setSelectedSchool] = useState<string>("");

  useEffect(() => {
    const schoolQuestion = questions.find((q) => q.name === "School");
    if (schoolQuestion) {
      setSelectedSchool(schoolQuestion.value as string);
    }
  }, [questions]);

  const getStyles = () => {
    if (gradient === "linear-gradient(to right, #F79A02, #F8EEC8)") {
      return {
        fieldBorder: "border-black",
        textColor: "text-black",
        nextBtn: "bg-[#6029FE] text-white",
        backBtn: "border-[#6029FE] text-[#6029FE]",
        dropdownText: "text-black",
      };
    } else if (gradient === "linear-gradient(to right, #009EFF, #8A2BE2)") {
      return {
        fieldBorder: "border-white",
        textColor: "text-white",
        nextBtn: "bg-[#F79A02] text-white",
        backBtn: "border-white text-white",
        dropdownText: "text-black",
      };
    }
    return {
      fieldBorder: "border-black",
      textColor: "text-black",
      nextBtn: "bg-blue-500 text-white",
      backBtn: "border-black text-black",
      dropdownText: "text-black",
    };
  };

  const styles = getStyles();

  return (
    <div
      className="flex flex-col w-[90vw] sm:w-[70vw] md:w-[60vw] h-auto min-h-[75vh] rounded-[30px] border-[6px] border-black shadow-xl p-4 md:p-6"
      style={{ background: gradient }}
    >
      <h1
        className={`text-lg md:text-2xl font-bold text-center mt-6 ${styles.textColor}`}
      >
        {section}
      </h1>
      <div className="flex flex-col px-4 md:px-10 mt-4 space-y-6 flex-grow">
        {questions.map((q, index) => (
          <div key={index}>
            <label
              className={`block text-lg font-semibold mb-2 ${styles.textColor} ${isSchoolChanged !== "Other" && q.name === "OtherSchool" && "opacity-50"}`}
            >
              {q.label}
            </label>
            {q.type === "dropdown" ? (
              <select
                value={q.value as string}
                onChange={(e) => onChange(q.name, e.target.value)}
                className={`w-full bg-transparent ${styles.fieldBorder} border-b-2 p-2 rounded-none focus:outline-none ${styles.dropdownText}`}
              >
                <option value="">Select...</option>
                {q.options?.map((option, idx) => (
                  <option key={idx} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : q.type === "textarea" ? (
              <textarea
                value={q.value as string}
                onChange={(e) => onChange(q.name, e.target.value)}
                className={`w-full bg-transparent ${styles.fieldBorder} border-2 p-2 rounded-xl resize-none focus:outline-none ${styles.textColor}`}
                rows={6}
                maxLength={1600}
                disabled={
                  isSchoolChanged !== "Other" && q.name === "OtherSchool"
                }
              />
            ) : q.type === "tags" ? (
              <TagInput
                value={Array.isArray(q.value) ? q.value : []}
                onChange={(tags) => onChange(q.name, tags)}
                placeholder="Press Enter or click + to add a tag"
              />
            ) : (
              <input
                type={q.type}
                value={q.value as string}
                onChange={(e) => onChange(q.name, e.target.value)}
                className={`w-full bg-transparent ${styles.fieldBorder} ${isSchoolChanged !== "Other" && q.name === "OtherSchool" && "border-opacity-30"} border-b-2 p-2 rounded-none focus:outline-none ${styles.textColor}`}
                disabled={
                  isSchoolChanged !== "Other" && q.name === "OtherSchool"
                }
              />
            )}
            <div className="min-h-[1.5rem]">
              {errors[q.name] && (
                <p className="text-red-600 text-sm">{errors[q.name]}</p>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col-reverse md:flex-row gap-4 md:gap-0 justify-between px-6 py-8">
        <button
          onClick={onBack}
          disabled={isBackDisabled}
          className={`border-2 py-2 px-4 rounded-lg w-full md:w-32 ${
            isBackDisabled ? "opacity-50" : styles.backBtn
          }`}
        >
          Back
        </button>
        <button
          onClick={isNextDisabled ? onSubmit : onNext}
          className={`py-2 px-4 rounded-lg w-full md:w-32 ${
            styles.nextBtn
          } flex justify-center items-center ${
            isSubmitting && "cursor-not-allowed opacity-50"
          }`}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <Loader2 className="animate-spin" />
          ) : isNextDisabled ? (
            "Submit"
          ) : (
            "Next"
          )}
        </button>
      </div>
    </div>
  );
};
const TagInput: React.FC<{
  value: string[];
  onChange: (tags: string[]) => void;
  placeholder?: string;
}> = ({ value, onChange, placeholder }) => {
  const [inputValue, setInputValue] = useState("");

  const handleAddTag = () => {
    if (inputValue.trim() && !value.includes(inputValue.trim())) {
      onChange([...value, inputValue.trim()]);
      setInputValue("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.trim()) {
      e.preventDefault();
      handleAddTag();
    }
  };

  const handleRemoveTag = (tag: string) => {
    onChange(value.filter((t) => t !== tag));
  };

  return (
    <div className="flex flex-wrap items-center border-b-2 border-black p-2">
      {value.map((tag, index) => (
        <div
          key={index}
          className="bg-gray-200 text-black rounded-full px-3 py-1 mr-2 mb-2 flex items-center"
        >
          <span>{tag}</span>
          <button
            onClick={() => handleRemoveTag(tag)}
            className="ml-2 text-red-600 hover:text-red-800"
          >
            &times;
          </button>
        </div>
      ))}
      <div className="flex items-center flex-1">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="flex-1 bg-transparent text-black focus:outline-none"
        />
        <button
          onClick={handleAddTag}
          className="ml-2 text-green-600 hover:text-green-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default QuestionCard;
