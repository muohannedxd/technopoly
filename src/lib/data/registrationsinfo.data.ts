export interface RegistrationInfo {
  Name: string;
  Email: string;
  School : string;
}

export const registrationQuestions: { label: string; name: keyof RegistrationInfo; type: string; value: string }[] = [
  {
    label: "What is your name?",
    name: "Name",
    type: "text",
    value: "",
  },
  {
    label: "What is your email?",
    name: "Email",
    type: "email",
    value: "",
  },
  {
    label: "What is your School?",
    name: "School",
    type: "school",
    value: "",
  },
  
];
