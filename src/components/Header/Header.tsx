import { useContext, useState } from 'react';
import { Box, Typography, styled, Divider } from '@mui/material';
import { PathMatch, useMatch, Link } from 'react-router-dom';
import { Logo } from '../Logo';
import { HeaderLinks } from '../HeaderLinks';
import { ManageAccount } from '../ManageAccounts';
import { MaterialUISwitch } from '../Switch';
import { ColorModeContext } from '@/providers';
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
    <Link to="/app/dashboard">
      <Logo width="50" />
    </Link>
  );

  return homoLogo;
};

export const Header = ({ userName, onLogOut }: HeaderProps) => {
  const [checked, setChecked] = useState(false);
  const colorMode = useContext(ColorModeContext);
  const isHome = useMatch('/app/dashboard');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    colorMode.toggleColorMode();
    setChecked(event.target.checked);
  };

  return (
    <Box position="sticky" top="0" zIndex="2">
      <HeaderWrapper>
        {renderLogoSection(isHome, userName)}
        <NavGroup>
          <HeaderLinks />
          <MaterialUISwitch
            checked={checked}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'controlled' }}
          />
          <ManageAccount avatar="" name={userName} logOut={onLogOut} />
        </NavGroup>
      </HeaderWrapper>
      <Divider orientation="horizontal" flexItem />
    </Box>
  );
};
