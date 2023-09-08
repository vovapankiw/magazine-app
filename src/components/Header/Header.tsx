import { useContext, useState } from 'react';
import { Box, Typography, styled, Theme } from '@mui/material';
import { PathMatch, useMatch, Link } from 'react-router-dom';
import { Logo } from '../Logo';
import { HeaderLinks } from '../HeaderLinks';
import { ManageAccount } from '../ManageAccounts';
import { MaterialUISwitch } from '../Switch';
import { ColorModeContext } from '@/providers';
import { Divider } from '../Divider';
// import { ManageAccount } from '../../../components/ManageAccount/ManageAccount';

const HeaderWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  background: theme.palette.background.default,
  padding: '14px',
  minHeight: '54px'
}));

const WelcomeText = styled(Typography)(({ theme }: { theme: Theme }) => ({
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.secondary
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
    <Box position="sticky" top="0" zIndex="2" minHeight="54px">
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
