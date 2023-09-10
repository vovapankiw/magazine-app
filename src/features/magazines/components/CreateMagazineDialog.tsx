import { useSnackbar } from 'notistack';
import { FormProvider, useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

import {
  FormAutocomplete,
  FormInputDate,
  FormInputImage,
  FormInputText,
  FormInputNumber
} from '@/components/Form';
import { FREQUENCY } from '@/constants';

export type IFormValue = {
  name: string;
  circulation: string;
  country: string;
  language: string;
  image?: string;
  frequency?: string;
  founded?: Date | null;
  final_issue?: Date | null;
  link?: string;
  categories: string;
};

const defaultValues: IFormValue = {
  name: '',
  circulation: '',
  country: '',
  language: '',
  image: '',
  frequency: '',
  founded: null,
  final_issue: null,
  link: '',
  categories: ''
};

const schema = Yup.object().shape({
  name: Yup.string().label('Name').trim().required().min(5).max(64),
  circulation: Yup.string().label('Circulation').required(),
  country: Yup.string().label('Country').trim().required(),
  language: Yup.string().label('Language').trim().required(),
  // image: Yup.string().required(),
  frequency: Yup.string().label('Frequency').oneOf(FREQUENCY),
  founded: Yup.date().label('Founded').nullable().typeError('Invalid date'),
  final_issue: Yup.date()
    .label('Final issue')
    .nullable()
    .when('founded', (founded: Date[] | undefined | null, dateSchema) => {
      const [date] = founded || [];

      if (date && date instanceof Date && !Number.isNaN(date.valueOf())) {
        const foundedYear = date.getFullYear();

        return dateSchema.min(foundedYear, 'Founded should be before Final issue');
      }

      return dateSchema;
    })
    .typeError('Invalid date'),
  link: Yup.string().label('Link').url(),
  categories: Yup.string().label('Categoty').trim().required()
});

type CreateMagazineDialogProps = {
  open: boolean;
  handleClose: () => void;
};

export const CreateMagazineDialog = ({ open, handleClose }: CreateMagazineDialogProps) => {
  const { enqueueSnackbar } = useSnackbar();

  const methods = useForm<IFormValue>({
    mode: 'all',
    defaultValues,
    resolver: yupResolver(schema),
    shouldUnregister: true
  });

  const { handleSubmit, reset, clearErrors, control } = methods;

  const handleCloseDialog = () => {
    handleClose();
    reset();
    clearErrors();
  };

  const onSubmit = async (formData: IFormValue) => {
    console.log(formData);
    reset();
    try {
      await Promise.resolve(formData);
      handleCloseDialog();
      enqueueSnackbar(`Magazine ${formData.name} was created`, { variant: 'success' });
    } catch (e) {
      enqueueSnackbar('Opps something went wrong!', { variant: 'error' });
    }
  };

  return (
    <Dialog open={open} onClose={handleCloseDialog}>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogTitle>Add new magazine</DialogTitle>

          <DialogContent sx={{ height: '70vh' }} dividers>
            <FormInputImage name="image" control={control} />

            <Box height="71px">
              <FormInputText name="name" label="Name*" control={control} />
            </Box>

            <Box height="71px">
              <FormInputNumber name="circulation" label="Circulation*" control={control} />
            </Box>

            <Box height="71px">
              <FormAutocomplete
                name="country"
                label="Country*"
                url="/countries"
                control={control}
              />
            </Box>

            <Box height="71px">
              <FormAutocomplete
                name="language"
                label="Language*"
                url="/languages"
                control={control}
              />
            </Box>

            <Box height="71px">
              <FormAutocomplete
                name="frequency"
                label="Frequency"
                url="/frequency"
                control={control}
              />
            </Box>

            <Box mt={4} display="flex" gap="10px" height="71px" flexBasis="50%">
              <FormInputDate name="founded" label="Founded" control={control} />
              <FormInputDate name="final_issue" label="Final issue" control={control} />
            </Box>

            <Box height="71px">
              <FormInputText name="link" label="Link" type="url" control={control} />
            </Box>

            <Box height="71px">
              <FormAutocomplete
                control={control}
                name="categories"
                label="Category"
                getOptionLabel={(option) => option.label}
                url="/category"
              />
            </Box>
          </DialogContent>

          <DialogActions sx={{ padding: '10px' }}>
            <Button onClick={handleCloseDialog}>Cancel</Button>
            <Button onClick={handleSubmit(onSubmit)}>Create</Button>
          </DialogActions>
        </form>
      </FormProvider>
    </Dialog>
  );
};
