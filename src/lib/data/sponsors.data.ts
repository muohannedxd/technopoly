import Technopoly from "@/assets/logo/Inline_Dark_Transparent_PNG.png"

export interface SponsorProps {
  id: number;
  image: ImageData | string;
}

export const SponsorList: SponsorProps[] = [
  {
    id: 0,
    image: Technopoly,
  },
  {
    id: 1,
    image: Technopoly,
  },
  {
    id: 2,
    image: Technopoly,
  },
];