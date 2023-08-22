import { Box, Typography, styled, Divider } from '@mui/material';
import { PathMatch, useMatch, Link } from 'react-router-dom';
import { Logo } from '../Logo';
import { HeaderLinks } from '../HeaderLinks';
import { ManageAccount } from '../ManageAccounts';
// import { ManageAccount } from '../../../components/ManageAccount/ManageAccount';

const HeaderWrapper = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  background: 'linear-gradient(rgb(255, 255, 255), 75%, rgb(255, 255, 255))',
  padding: '14px'
}));

const WelcomeText = styled(Typography)(() => ({
  backgroundColor: 'transparent'
}));

const NavGroup = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}));

interface HeaderProps {
  userName: string | undefined;
  onLogOut: () => void;
}

const renderLogoSection = (isHome: PathMatch<string> | null, userName = 'guest') => {
  const homoLogo = isHome ? (
    <WelcomeText>
      Welcome back, <b>{userName}</b>
    </WelcomeText>
  ) : (
    <Link to="/">
      <Logo width="50" />
    </Link>
  );

  return homoLogo;
};

export const Header = ({ userName, onLogOut }: HeaderProps) => {
  const isHome = useMatch('/');

  return (
    <>
      <HeaderWrapper>
        {renderLogoSection(isHome, userName)}
        <NavGroup>
          <HeaderLinks />
          <ManageAccount avatar="" name={userName} logOut={onLogOut} />
        </NavGroup>
      </HeaderWrapper>
      <Divider orientation="horizontal" flexItem />
    </>
  );
};
