import GDG from "@/assets/images/gdg.png";
import Excellence from "@/assets/images/excellence.png";
import Technopoly from "@/assets/logo/Minimal_Dark_Transparent_PNG.png";
import HRM from "@/assets/images/hrm.png";

export interface AboutProps {
  id: number;
  title: string;
  image: ImageData | string;
  background: string;
  borderColor: string;
  description: string;
}

export const AboutUsList: AboutProps[] = [
  {
    id: 0,
    title: "Event",
    image: Technopoly,
    background: "bg-third",
    borderColor: "border-third",
    description:
    `
      Technopoly is the ultimate fusion of innovation and strategy,
      a 3-day ideathon and case competition where ideas turn into impactful prototyped and studied solutions.
      In this dynamic arena, teams of technical and business visionaries unite
      to tackle real-world challenges. From crafting cutting-edge prototypes to building robust business plans,
      every move is a step toward creating a winning solution and transforming ideas into realities.`
  },
  {
    id: 1,
    title: "GDG on Campus: ENSIA",
    image: GDG,
    background: "bg-purple",
    borderColor: "border-purple",
    description:
    `
      An official community program powered by Google
      dedicated to cultivating a dynamic tech environment on
      campus. Our primary mission is to empower students by
      equipping them with the necessary technical skills and
      knowledge to thrive in the digital age. Through our club, we
      aim to foster a collaborative community where students can
      learn, create, and connect with like-minded individuals.
    `,
  },
  {
    id: 2,
    title: "Excellence Club",
    image: Excellence,
    background: "bg-lightblue",
    borderColor: "border-lightblue",
    description: `
      Motivation, innovation, and discipline—these are the core
      values that best define this exceptional club. Based at the
      School of Higher Commercial Studies (EHEC) of Koléa
      (formerly INC), the club brings together students from
      diverse backgrounds, united by a thirst for learning and
      mastering new entrepreneurial and cultural topics. They share
      a desire to gain new experiences in the professional field.
    `,
  },
  {
    id: 3,
    title: "HRM Club",
    image: HRM,
    background: "bg-red-400",
    borderColor: "border-red-400",
    description: `
      HRM Club is The heart of students life at the School of Hospitality
      & Restaurant Management in Algiers, bringing together future
      hospitality professionals with a shared passion for the industry. However, it
      is not just about hotels and restaurants—we mix things up with
      cultural events, sports, and community activities too. With an energetic and
      ambitious vibe, we, at HRM Club, turn learning into an exciting journey and experience!
    `
  },
];
