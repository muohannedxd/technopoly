// viewmodels/RegisterViewModel.ts
import { useState } from "react";
import { RegistrationInfo, registrationQuestions } from "../../lib/data/registrationsinfo.data";

export default function useRegisterViewModel() {
  const [formData, setFormData] = useState<RegistrationInfo>({
    Name: "",
    Email: "",
    School: "",
  });
  const [errors, setErrors] = useState<{ [key in keyof RegistrationInfo]?: string }>({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [smallCards, setSmallCards] = useState<number[]>(
    Array.from({ length: registrationQuestions.length }, (_, index) => index)
  );
  const [isAnimating, setIsAnimating] = useState(false);

  const gradients = [
    "linear-gradient(to right, #F79A02, #F8EEC8)",
    "linear-gradient(to right, #009EFF, #8A2BE2)",
  ];

  const validateField = (name: keyof RegistrationInfo, value: string): string | null => {
    const trimmedValue = value.trim();

    if (!trimmedValue) return `${name} is required.`;

    if (name === "Email" && !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(trimmedValue)) {
      return "Invalid email format.";
    }

    return null;
  };

  const handleInputChange = (name: keyof RegistrationInfo, value: string) => {
    const error = validateField(name, value);
    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleNext = () => {
    const currentField = registrationQuestions[currentIndex].name;
    const error = validateField(currentField, formData[currentField]);

    if (error) {
      setErrors((prevErrors) => ({ ...prevErrors, [currentField]: error }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, [currentField]: null }));
      if (currentIndex < registrationQuestions.length - 1 && !isAnimating) {
        setIsAnimating(true);
        setTimeout(() => {
          setCurrentIndex((prevIndex) => prevIndex + 1);
          setSmallCards((prevCards) => prevCards.slice(1));
          setIsAnimating(false);
        }, 300);
      }
    }
  };

  const handleBack = () => {
    if (currentIndex > 0 && !isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => prevIndex - 1);
        setSmallCards((prevCards) => {
          const newSmallCards = [...prevCards];
          newSmallCards.unshift(prevCards[0] - 1);
          return newSmallCards;
        });
        setIsAnimating(false);
      }, 300);
    }
  };

  const handleSubmit = async () => {
    const newErrors: { [key in keyof RegistrationInfo]?: string } = {};

    Object.keys(formData).forEach((key) => {
      const fieldName = key as keyof RegistrationInfo;
      const error = validateField(fieldName, formData[fieldName]);
      if (error) {
        newErrors[fieldName] = error;
      }
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    try {
      console.log(formData);
      /*
      const response = await fetch("API_URL", {
        method: "POST",
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Form successfully submitted:", result);
      } else {
        console.error("Failed to submit form:", response.statusText);
      }
      */
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return {
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
  };
}