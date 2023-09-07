import { Magazine } from '@/api/magazine-api';

type MagazineDescriptionProps = {
  magazine: Magazine;
};

export const MagazineDescription = ({ magazine }: MagazineDescriptionProps) => {
  console.log(magazine);
  return <>MagazineDescription</>;
};
