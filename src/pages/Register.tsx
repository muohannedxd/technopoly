import useRegisterViewModel from "../components/viewmodels/registrationsViewmodel";
import Smallcard from "../components/Smallcard";
import QuestionCard from "@/components/QuestionCard";
import { registrationQuestions } from "@/lib/data/registrationsinfo.data";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function Register() {
  const {
    formData,
    errors,
    currentIndex,
    smallCards,
    gradients,
    handleInputChange,
    handleNext,
    handleBack,
    handleSubmit,
  } = useRegisterViewModel();

  const [animationDirection, setAnimationDirection] = useState<
    "next" | "back" | "none"
  >("none");

  const currentGradient = gradients[currentIndex % gradients.length];

  const gradientColors = [
    "linear-gradient(to right, #F79A02, #F8EEC8)",
    "linear-gradient(to right, #009EFF, #8A2BE2)",
  ];

  const handleNextClick = () => {
    setAnimationDirection("next");
    handleNext();
  };

  const handleBackClick = () => {
    setAnimationDirection("back");
    handleBack();
  };

  return (
    <div className="relative">
      <Link to="/" className="absolute flex justify-center items-center gap-3 p-4 md:p-6">
        <ArrowLeft />
        <p className="text-base md:text-lg">Go Back Home</p>
      </Link>
      <div className="w-full h-screen flex items-center justify-center">
        <div
          className={`transition-transform duration-500 ease-in-out ${
            animationDirection === "next"
              ? "-translate-x-full"
              : animationDirection === "back"
              ? "translate-x-full"
              : ""
          }`}
          onTransitionEnd={() => {
            if (animationDirection !== "none") {
              setAnimationDirection("none");
            }
          }}
        >
          <QuestionCard
            section={registrationQuestions[currentIndex].section}
            questions={registrationQuestions[currentIndex].questions.map(
              (q) => ({
                ...q,
                value: formData[q.name] || q.value,
              })
            )}
            errors={errors}
            onChange={handleInputChange}
            onNext={handleNextClick}
            onBack={handleBackClick}
            onSubmit={handleSubmit}
            isNextDisabled={currentIndex === registrationQuestions.length - 1}
            isBackDisabled={currentIndex === 0}
            gradient={currentGradient}
          />
        </div>

        {smallCards.map((_, index) => (
          <Smallcard
            key={index}
            gradient={gradientColors[index % gradientColors.length]}
            position={{ top: "68vh", left: `${75 - index * 2}vw` }}
            rotation={`${-6 - index * 5}deg`}
          />
        ))}
      </div>
    </div>
  );
}
