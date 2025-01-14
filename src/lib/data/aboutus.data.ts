import GDG from "@/assets/images/gdg.png"
import Excellence from "@/assets/images/excellence.png"
import Technopoly from "@/assets/logo/Minimal_Dark_Transparent_PNG.png"
import HRM from "@/assets/images/hrm.png"

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
    background: 'bg-third',
    borderColor: 'border-third',
    description: "TECHNOPOLY Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis leo eget tortor lacinia, vitae egestas risus pretium. Integer id tincidunt risus, et consectetur tellus. Duis turpis metus, vulputate et leo vitae, pretium eleifend lacus. Nunc ornare, metus nec vestibulum lobortis, purus ante feugiat leo, sit amet iaculis massa ipsum et lorem. ",
  },
  {
    id: 1,
    title: "GDG on Campus: ENSIA",
    image: GDG,
    background: 'bg-purple',
    borderColor: 'border-purple',
    description: "GDG Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis leo eget tortor lacinia, vitae egestas risus pretium. Integer id tincidunt risus, et consectetur tellus. Duis turpis metus, vulputate et leo vitae, pretium eleifend lacus. Nunc ornare, metus nec vestibulum lobortis, purus ante feugiat leo, sit amet iaculis massa ipsum et lorem. ",
  },
  {
    id: 2,
    title: "Excellence Club",
    image: Excellence,
    background: 'bg-lightblue',
    borderColor: 'border-lightblue',
    description: "EXCELLENCE Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis leo eget tortor lacinia, vitae egestas risus pretium. Integer id tincidunt risus, et consectetur tellus. Duis turpis metus, vulputate et leo vitae, pretium eleifend lacus. Nunc ornare, metus nec vestibulum lobortis, purus ante feugiat leo, sit amet iaculis massa ipsum et lorem. ",
  },
  {
    id: 3,
    title: "HRM Club",
    image: HRM,
    background: 'bg-red-400',
    borderColor: 'border-red-400',
    description: "HRM Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis leo eget tortor lacinia, vitae egestas risus pretium. Integer id tincidunt risus, et consectetur tellus. Duis turpis metus, vulputate et leo vitae, pretium eleifend lacus. Nunc ornare, metus nec vestibulum lobortis, purus ante feugiat leo, sit amet iaculis massa ipsum et lorem. ",
  }
];