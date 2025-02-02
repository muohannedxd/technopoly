export interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

export const FAQList: FAQProps[] = [
  {
    question: "Who can participate?",
    answer: "Technopoly is open to students and young professionals with backgrounds in technical fields or business studies.",
    value: "item-1",
  },
  {
    question: "How are the teams formed, and do I need to have a team before registering?",
    answer:
      "You will tackle challenges that require technical prototyping and business-focused strategies. Thus, teams are a mix of both. And, teams will be assigned randomly to reflect real-world environments.",
    value: "item-2",
  },
  {
    question:
      "What resources will be available to participants during the event?",
    answer:
      "Participants will have access to mentoring sessions and workshops in technical and entrepreneurial fields. Furthermore, a supportive environment and plenty of networking opportunities.",
    value: "item-3",
  },
  {
    question: "Do I need to have prior experience?",
    answer: "Only a slight experience with prototyping or business planning is required. Plus, Mentors and workshops will guide you throughout the event.",
    value: "item-4",
  }
];