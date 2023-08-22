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

  const NavTitleText = styled('span')(() => ({
    marginLeft: '6px'
  }));

  return (
    <LinksWrapper>
      <LinkWrapper>
        <Link to="/analytics">
          <Button>
            <Tooltip title="View Library usage analytics">
              <NavTitleContainer>
                <PollOutlinedIcon />
                <NavTitleText>Analytics</NavTitleText>
              </NavTitleContainer>
            </Tooltip>
          </Button>
        </Link>
      </LinkWrapper>
      <LinkWrapper style={{ marginRight: 12 }}>
        <Link to="/settings">
          <Button>
            <Tooltip title="Manage your Libary settings">
              <SettingsSuggestOutlinedIcon />
            </Tooltip>
          </Button>
        </Link>
      </LinkWrapper>
    </LinksWrapper>
  );
};
