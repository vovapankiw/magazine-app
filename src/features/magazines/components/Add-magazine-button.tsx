import { Fab, styled } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const AddButton = styled(Fab)(() => ({
  position: 'fixed',
  bottom: '16px',
  right: '16px'
}));

type AddMagazineButtonProps = {
  addMagazine: () => void;
};

export const AddMagazineButton = ({ addMagazine }: AddMagazineButtonProps) => (
  <AddButton color="info" aria-label="add" onClick={addMagazine}>
    <AddIcon />
  </AddButton>
);
