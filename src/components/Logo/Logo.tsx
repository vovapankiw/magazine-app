import library from '../../assets/library.svg';

type Props = {
  width: string;
};

export const Logo = ({ width }: Props) => <img src={library} alt="logo" width={`${width}px`} />;
