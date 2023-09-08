import { FormProvider, useForm } from 'react-hook-form';
import {
  Alert,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Snackbar
} from '@mui/material';
import { useState } from 'react';
import { FormAutocomplete, FormInputText } from '@/components/Form';

type FormData = {
  name: string;
  circulation: number;
  country: string;
  language: string;
  image: string | null;
  frequency: string;
  founded: string;
  final_issue: string;
  link: string;
  categories: string;
};

type CreateMagazineDialogProps = {
  open: boolean;
  handleClose: () => void;
};

export const CreateMagazineDialog = ({ open, handleClose }: CreateMagazineDialogProps) => {
  const [snackbarMessage, setSnackbar] = useState('');

  const closeSnackbar = () => {
    // if (reason === 'clickaway') {
    //   return;
    // }

    setSnackbar('');
  };

  const methods = useForm({
    mode: 'all',
    defaultValues: {
      name: '',
      circulation: 0,
      country: '',
      language: '',
      image: null,
      frequency: '',
      founded: '',
      final_issue: '',
      link: '',
      categories: ''
    },
    shouldUnregister: false
  });

  const { handleSubmit } = methods;
  const onSubmit = async (formData: FormData) => {
    await Promise.resolve(formData);
  };

  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <DialogTitle>Create new project</DialogTitle>

            <DialogContent>
              <DialogContentText>
                Here you can create new project with all necessary info
              </DialogContentText>

              {/* <FormInputImage name="image" /> */}

              <FormInputText name="name" label="Name*" rules={{ required: 'Required' }} />

              <FormInputText
                name="description"
                label="Description*"
                rules={{ required: 'Required' }}
              />

              <FormAutocomplete
                name="productOwner"
                label="Assigne PO*"
                getOptionLabel={(option) => option.title}
                rules={{ required: 'Required' }}
                url="/api/v1/owners"
              />

              <FormAutocomplete
                name="team"
                label="Assigne team*"
                getOptionLabel={(option) => option.title}
                rules={{ required: 'Required' }}
                url="/api/v1/teams"
              />
            </DialogContent>

            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button onClick={handleSubmit(onSubmit)}>Create</Button>
            </DialogActions>
          </form>
        </FormProvider>
      </Dialog>
      <Snackbar open={!!snackbarMessage} autoHideDuration={6000} onClose={closeSnackbar}>
        <Alert onClose={closeSnackbar} severity="error" sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </>
  );
};
