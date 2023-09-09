import { Link } from 'react-router-dom';
import { Box, Button, Tooltip, styled } from '@mui/material';
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';
import PollOutlinedIcon from '@mui/icons-material/PollOutlined';

export const HeaderLinks = () => {
  const LinksWrapper = styled(Box)(() => ({
    opacity: '1',
    whiteSpace: 'nowrap'
  }));

  const LinkWrapper = styled('span')(() => ({
    marginRight: '0px'
  }));

  const NavTitleContainer = styled('span')(() => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'left',
    padding: '2px'
  }));

  const HeaderButton = styled(Button)(({ theme }) => ({
    color: theme.palette.mode === 'dark' ? theme.palette.secondary.main : theme.palette.primary.main
  }));

  return (
    <LinksWrapper>
      <LinkWrapper>
        <Link to="/analytics">
          <HeaderButton>
            <Tooltip title="View Library usage analytics">
              <NavTitleContainer>
                <PollOutlinedIcon />
              </NavTitleContainer>
            </Tooltip>
          </HeaderButton>
        </Link>
      </LinkWrapper>
      <LinkWrapper>
        <Link to="/settings">
          <HeaderButton>
            <Tooltip title="Manage your Libary settings">
              <SettingsSuggestOutlinedIcon />
            </Tooltip>
          </HeaderButton>
        </Link>
      </LinkWrapper>
    </LinksWrapper>
  );
};
