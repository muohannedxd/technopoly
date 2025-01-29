import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Toaster } from "sonner";
import QuestionCard from "@/components/QuestionCard";
import Smallcard from "@/components/Smallcard";
import useRegisterViewModel from "@/components/viewmodels/registrationsViewmodel";
import { registrationQuestions } from "@/lib/data/registrationsinfo.data";

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
    isSubmitting,
  } = useRegisterViewModel();

  const [animationDirection, setAnimationDirection] = useState<"next" | "back" | "none">("none");
  const [isSchoolChanged, setIsSchoolChanged] = useState<string>("");

  useEffect(() => {
    if (formData.School) {
      setIsSchoolChanged(formData.School);
    } else {
      setIsSchoolChanged("");
    }
  }, [formData.School]);

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
    <div className="w-full h-screen flex flex-col">
      {/* Back Button */}
      <Link to="/" className="flex gap-3 m-4 md:m-6">
        <ArrowLeft />
        <p className="text-base md:text-lg">Go Back Home</p>
      </Link>

      {/* Main Content */}
      <div className="w-full flex py-8 items-center justify-center">
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
            questions={registrationQuestions[currentIndex].questions.map((q) => ({
              ...q,
              value: formData[q.name] || q.value,
            }))}
            errors={errors}
            onChange={handleInputChange}
            onNext={handleNextClick}
            onBack={handleBackClick}
            onSubmit={handleSubmit}
            isNextDisabled={currentIndex === registrationQuestions.length - 1}
            isBackDisabled={currentIndex === 0}
            gradient={currentGradient}
            isSchoolChanged={isSchoolChanged}
            isSubmitting={isSubmitting}
          />
        </div>

        {/* Small Cards */}
        {smallCards.map((_, index) => (
          <Smallcard
            key={index}
            gradient={gradientColors[index % gradientColors.length]}
            position={{ top: "62vh", left: `${75 - index * 2}vw` }}
            rotation={`${-6 - index * 5}deg`}
          />
        ))}
      </div>

      {/* Toaster Notifications */}
      <div className="h-0 w-0">
        <Toaster position="bottom-right" expand={false} richColors />
      </div>
    </div>
  );
}
