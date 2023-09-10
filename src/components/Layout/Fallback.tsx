import { ReactNode } from 'react';
import { Box } from '@mui/material';

type FallBackProps = {
  children: ReactNode;
};

export const FallBack = ({ children }: FallBackProps) => (
  <Box height="100vh" width="100%" display="flex" justifyContent="center" alignItems="center">
    {children}
  </Box>
);
