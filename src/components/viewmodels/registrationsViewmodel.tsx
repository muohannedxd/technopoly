import { useState } from "react";
import {
  RegistrationInfo,
  registrationQuestions,
} from "../../lib/data/registrationsinfo.data";
import { toast } from "sonner";

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
    // Trim the value before validation
    const trimmedValue = typeof value === "string" ? value.trim() : value;

    // Check if the field is empty
    if (
      !trimmedValue ||
      (typeof trimmedValue === "string" && !trimmedValue.trim())
    ) {
      // Allow optional fields to be empty
      if (
        name === "LinkedInProfile" ||
        name === "GitHubPortfolio" ||
        (name === "OtherSchool" &&
          formData.School &&
          formData.School !== "Other")
      ) {
        return null;
      }
      return `${name} is required.`;
    }

    // Name validation (full name with at least two words, letters, hyphens, and apostrophes allowed)
    if (
      name === "Name" &&
      typeof trimmedValue === "string" &&
      !/^[a-zA-ZÀ-ÖØ-öø-ÿ'-]+(?:\s[a-zA-ZÀ-ÖØ-öø-ÿ'-]+)+$/.test(trimmedValue)
    ) {
      return "Please enter a valid full name (at least two words, letters only, may include hyphens or apostrophes).";
    }

    // Email validation
    if (
      name === "Email" &&
      typeof trimmedValue === "string" &&
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(trimmedValue)
    ) {
      return "Invalid email format.";
    }

    // Phone number validation (only digits allowed)
    if (
      name === "PhoneNumber" &&
      typeof trimmedValue === "string" &&
      !/^\d+$/.test(trimmedValue)
    ) {
      return "Phone number should only contain digits.";
    }

    // Student Card Number validation (must be exactly 12 digits)
    if (
      name === "CardNumber" &&
      typeof trimmedValue === "string" &&
      !/^\d{12}$/.test(trimmedValue)
    ) {
      return "Student Card Number must be exactly 12 digits long and contain only numbers.";
    }

    // OtherSchool should be empty if School is not "Other"
    if (
      name === "OtherSchool" &&
      formData.School &&
      formData.School !== "Other"
    ) {
      if (
        trimmedValue &&
        typeof trimmedValue === "string" &&
        trimmedValue.trim()
      ) {
        return "OtherSchool should be empty when School is not 'Other'.";
      }
    }

    // LinkedIn Profile URL validation (optional but should be valid if provided)
    if (name === "LinkedInProfile" && typeof trimmedValue === "string") {
      const urlPattern =
        /^(https?:\/\/)?([\w\d-]+\.)+[\w\d]{2,}(\/[\w\d-_.~:/?#[\]@!$&'()*+,;=]*)?$/;
      if (trimmedValue && !urlPattern.test(trimmedValue)) {
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
      // console.log("Submitting form: ", formData);

      try {
        const response = await fetch(
          "https://sheetdb.io/api/v1/kwjli0gr9dmcp",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );

        if (response.ok) {
          console.log("Data successfully sent to Google Sheets!");
          setFormData({} as RegistrationInfo);
          setIsSubmitting(false);
          setCurrentIndex(0);
          toast.success("Registered successfully!", {
            description: "Keep an eye out for updates in your inbox.",
          });
          // navigate("/");
        } else {
          console.error("Failed to send data to Google Sheets.");
          setIsSubmitting(false);
          toast.error("Failed to register", {
            description: "Something is missing, Try again later",
          });
        }
      } catch (error) {
        console.error("Error submitting the form: ", error);
        setIsSubmitting(false);
        toast.error("Failed to register!", {
          description: "An error occured, try again later.",
        });
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
    isSubmitting,
  };
}
