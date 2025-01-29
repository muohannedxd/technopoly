export interface RegistrationInfo {
  Name: string;
  Email: string;
  PhoneNumber?: string;
  School?: string;
  OtherSchool?: string;
  Major?: string;
  YearOfStudy?: string;
  Skills?: string[];
  Motivation?: string;
  LinkedInProfile?: string;
  GitHubPortfolio?: string;
  DiscordID: string;
  CardNumber?: string; 
}

export const registrationQuestions: {
  section: string;
  questions: {
    label: string;
    name: keyof RegistrationInfo;
    type: string;
    value: string | string[];
    options?: string[];
    additionalField?: boolean;
    disabled?: boolean;
  }[];
}[] = [
  {
    section: "Personal Information",
    questions: [
      { label: "Full Name *", name: "Name", type: "text", value: "" },
      { label: "Email Address *", name: "Email", type: "email", value: "" },
      { label: "Phone Number *", name: "PhoneNumber", type: "text", value: "" },
      { label: "Student Card Number *", name: "CardNumber", type: "text", value: "" },
    ],
  },
  {
    section: "School and Major",
    questions: [
      {
        label: "School (Faculty) *",
        name: "School",
        type: "dropdown",
        value: "",
        options: [
          "The National School of Artificial Intelligence (ENSIA)",
          "The School of Higher Commercial Studies (HEC)",
          "School of Hotel & Restaurant Management (ESHRA)",
          "Other", 
        ],
      },
      {
        label: "If other, please specify the School Name:",
        name: "OtherSchool",
        type: "text",
        value: "",
        
      },
      {
        label: "Major (Field) of Study *",
        name: "Major",
        type: "dropdown",
        value: "",
        options: ["Artificial Intelligence / Computer Science", "Business / Commerce", "Hospitality and Catering"],
      },
      {
        label: "Year of Study *",
        name: "YearOfStudy",
        type: "dropdown",
        value: "",
        options: [
          "1CP (first year)",
          "2CP (second year)",
          "1CS (third year)",
          "2CS (fourth year/master)",
          "Final Year",
        ],
      },
    ],
  },
  {
    section: "Team Details",
    questions: [
      {
        label: "Your Skills (Press ‘ENTER’ or the '+' sign to register a new skill)",
        name: "Skills",
        type: "tags",
        value: [],
      },
      {
        label: "Team Motivation ",
        name: "Motivation",
        type: "textarea",
        value: "",
      },
    ],
  },
  {
    section: "Additional",
    questions: [
      {
        label: "Discord ID *",
        name: "DiscordID",
        type: "text",
        value: "",
      },
      {
        label: "LinkedIn Profile (optional)",
        name: "LinkedInProfile",
        type: "url",
        value: "",
      },
      {
        label: "GitHub / Portfolio Link (optional)",
        name: "GitHubPortfolio",
        type: "url",
        value: "",
      },
    ],
  },
];
