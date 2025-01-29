import { useState } from "react";
import {
  RegistrationInfo,
  registrationQuestions,
} from "../../lib/data/registrationsinfo.data";

export default function useRegisterViewModel() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<RegistrationInfo>(
    {} as RegistrationInfo
  );
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [smallCards, setSmallCards] = useState<number[]>(
    Array.from({ length: registrationQuestions.length }, (_, index) => index)
  );
  const [isAnimating, setIsAnimating] = useState(false);

  const gradients = [
    "linear-gradient(to right, #F79A02, #F8EEC8)",
    "linear-gradient(to right, #009EFF, #8A2BE2)",
  ];

  const validateField = (
    name: keyof RegistrationInfo,
    value: string | string[]
  ): string | null => {
    // Check if the field is empty or contains just whitespace
    if (!value || (typeof value === "string" && !value.trim())) {
      // If the field is "LinkedIn Profile" or "GitHub/Portfolio Link", it's optional, so don't return an error
      if (name === "LinkedInProfile" || name === "GitHubPortfolio") {
        return null;
      }
      return `${name} is required.`; // All other fields are required
    }

    // Name validation
    if (
      name === "Name" &&
      typeof value === "string" &&
      !/^[a-zA-ZÀ-ÖØ-öø-ÿ'-]+(?:\s[a-zA-ZÀ-ÖØ-öø-ÿ'-]+)+$/.test(value)
    ) {
      return "Please enter a valid full name (at least two words, letters only, may include hyphens or apostrophes).";
    }

    // Email validation
    if (
      name === "Email" &&
      typeof value === "string" &&
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)
    ) {
      return "Invalid email format.";
    }

    // Phone number validation
    if (
      name === "PhoneNumber" &&
      typeof value === "string" &&
      !/^\d+$/.test(value)
    ) {
      return "Phone number should only contain digits.";
    }

    // Optional fields validation (LinkedIn and GitHub/Portfolio links) if provided
    if (
      (name === "LinkedInProfile" || name === "GitHubPortfolio") &&
      typeof value === "string"
    ) {
      const urlPattern =
        /^(https?:\/\/)?([\w\d-]+\.)+[\w\d]{2,}(\/[\w\d-_.~:/?#[\]@!$&'()*+,;=]*)?$/;
      if (value && !urlPattern.test(value)) {
        return "Invalid URL format.";
      }
    }

    return null;
  };

  const handleInputChange = (name: string, value: string | string[]) => {
    const error = validateField(name as keyof RegistrationInfo, value);
    setErrors((prevErrors) => ({ ...prevErrors, [name]: error || "" }));
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleNext = () => {
    const currentQuestions = registrationQuestions[currentIndex].questions;
    const currentErrors: Record<string, string> = {};

    currentQuestions.forEach((q) => {
      const error = validateField(q.name, formData[q.name] || "");
      if (error) {
        currentErrors[q.name] = error;
      }
    });

    setErrors(currentErrors);

    if (Object.keys(currentErrors).length === 0 && !isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => prevIndex + 1);
        setSmallCards((prevCards) => prevCards.slice(1));
        setIsAnimating(false);
      }, 300);
    }
  };

  const handleBack = () => {
    if (currentIndex > 0 && !isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => prevIndex - 1);
        setIsAnimating(false);
      }, 300);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    const finalErrors: { [key: string]: string } = {};

    registrationQuestions.forEach((section) => {
      section.questions.forEach((q) => {
        const error = validateField(q.name, formData[q.name] || "");
        if (error) {
          finalErrors[q.name] = error;
        }
      });
    });

    setErrors(finalErrors);

    if (Object.keys(finalErrors).length > 0) {
      setIsSubmitting(false);
      return;
    }

    if (Object.keys(finalErrors).length === 0) {
      console.log("Submitting form: ", formData);

      try {
        const response = await fetch("https://sheetdb.io/api/v1/kwjli0gr9dmcp", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        

        if (response.ok) {
          console.log("Data successfully sent to Google Sheets!");
          setFormData({} as RegistrationInfo);
          setIsSubmitting(false);
          setCurrentIndex(0);
          // navigate("/");
        } else {
          console.error("Failed to send data to Google Sheets.");
          setIsSubmitting(false);
        }
      } catch (error) {
        console.error("Error submitting the form: ", error);
        setIsSubmitting(false);
      }
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
    isSubmitting
  };
}
