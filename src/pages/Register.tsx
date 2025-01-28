// views/Register.tsx
import useRegisterViewModel from "../components/viewmodels/registrationsViewmodel";
import Smallcard from "../components/Smallcard";
import QuestionCard from "../components/QusetionCard";
import { registrationQuestions } from "@/lib/data/registrationsinfo.data";

export default function Register() {
  const {
    formData,
    errors,
    currentIndex,
    smallCards,
    isAnimating,
    gradients,
    handleInputChange,
    handleNext,
    handleBack,
    handleSubmit,
  } = useRegisterViewModel();

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter") {
      if (currentIndex === registrationQuestions.length - 1) {
        handleSubmit();
      } else {
        handleNext();
      }
    }
    else if (event.key === "Escape") {
      if (currentIndex !== 0) {
        handleBack();
      }
    }
  };

  return (
    <div
      className="w-full h-screen flex flex-col items-center justify-center relative"
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      {/* Main QuestionCard */}
      <div
        className={`w-full h-full flex items-center justify-center absolute transition-all duration-300 transform ${
          isAnimating ? "opacity-0 -translate-x-full" : "opacity-100 translate-x-0"
        }`}
      >
        <QuestionCard
          label={registrationQuestions[currentIndex].label}
          name={registrationQuestions[currentIndex].name}
          type={registrationQuestions[currentIndex].type}
          value={formData[registrationQuestions[currentIndex].name]}
          error={errors[registrationQuestions[currentIndex].name] || ""}
          onChange={handleInputChange}
          onNext={handleNext}
          onBack={handleBack}
          isNextDisabled={currentIndex === registrationQuestions.length - 1}
          isBackDisabled={currentIndex === 0}
          onSubmit={handleSubmit}
          gradient={gradients[currentIndex % gradients.length]}
        />
      </div>

      {/* Smallcards for decoration */}
      {smallCards.map((_, index) => (
        <Smallcard
          key={index}
          gradient={gradients[index % gradients.length]}
          position={{
            top: `${65 + (index % 2)}vh`,
            left: `${75 + (index % 3)}vw`,
          }}
          rotation={`${(index % 4) * -5}deg`}
        />
      ))}
    </div>
  );
}
