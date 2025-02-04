import Tassili from "@/assets/images/tassili.png"
import Amour from "@/assets/images/amour.png"
import Hassnaoui from "@/assets/images/hassnaoui.png"
// import MegaAgri from "@/assets/images/megaargri.png"

export interface SponsorProps {
  id: number;
  image: ImageData | string;
  link: string
}

export const SponsorList: SponsorProps[] = [
  {
    id: 0,
    image: Tassili,
    link: 'https://tassilitravailaerien.dz/'
  },
  {
    id: 1,
    image: Amour,
    link: 'https://groupeamour.com/'
  },
  {
    id: 2,
    image: Hassnaoui,
    link: 'https://www.groupe-hasnaoui.com/fr/'
  },
  // {
  //   id: 3,
  //   image: MegaAgri,
  //   link: 'https://mega-agri.com/'
  // },
];