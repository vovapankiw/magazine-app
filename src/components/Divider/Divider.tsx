import { styled, Divider as MuiDivider } from '@mui/material';

export const Divider = styled(MuiDivider)(({ theme }) => ({
  borderColor:
    theme.palette.mode === 'dark' ? theme.palette.secondary.main : theme.palette.primary.main
}));
