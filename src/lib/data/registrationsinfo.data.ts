export interface RegistrationInfo {
  Name: string;
  Email: string;
  PhoneNumber?: string;
  School?: string;
  Major?: string;
  YearOfStudy?: string;
  TeamName?: string;
  Skills?: string[];
  TeamMotivation?: string;
  LinkedInProfile?: string;
  GitHubPortfolio?: string;
  DiscordID: string;
}

export const registrationQuestions: {
  section: string;
  questions: { label: string; name: keyof RegistrationInfo; type: string; value: string | string[]; options?: string[] }[];
}[] = [
  {
    section: "Personal Information",
    questions: [
      { label: "Full Name *", name: "Name", type: "text", value: "" },
      { label: "Email Address *", name: "Email", type: "email", value: "" },
      { label: "Phone Number *", name: "PhoneNumber", type: "text", value: "" },
    ],
  },
  {
    section: "School and Major",
    questions: [
      {
        label: "School/Faculty (Dropdown, full name options) *",
        name: "School",
        type: "dropdown",
        value: "",
        options: ["ENSIA", "HEC", "ESHRA"],
      },
      {
        label: "Major/Field of Study *",
        name: "Major",
        type: "dropdown",
        value: "",
        options: ["Computer Science", "Business", "Hospitality and Catering"],
      },
      {
        label: "Year of Study *",
        name: "YearOfStudy",
        type: "dropdown",
        value: "",
        options: ["1CP (first year)", "2CP (second year)", "1CS (third year)", "2CS (fourth year; master)", "Final Year"],
      },
    ],
  },
  {
    section: "Team Details",
    questions: [
      {
        label: "Team Name",
        name: "TeamName",
        type: "text",
        value: "",
      },
      {
        label: "Your Skills (Press ‘ENTER’ to register a new tag)",
        name: "Skills",
        type: "tags",
        value: [],
      },
      {
        label: "Team Motivation ",
        name: "TeamMotivation",
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
        label: "GitHub/Portfolio Link (optional, for technical participants)",
        name: "GitHubPortfolio",
        type: "url",
        value: "",
      },
      
    ],
  },
];
