import { useSnackbar } from 'notistack';
import { FormProvider, useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@mui/material';
import { FormAutocomplete, FormInputDate, FormInputImage, FormInputText } from '@/components/Form';
import { FormInputNumber } from '@/components/Form/FormInputNumber';
import { FREQUENCY } from '@/constants';

type IFormValue = {
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
  founded: Yup.date().label('Founded').nullable(),
  final_issue: Yup.date()
    .label('Final issue')
    .nullable()
    .when('founded', (founded: Date[] | undefined | null, dateSchema) => {
      const [dayJsDate] = founded || [];

      if (dayJsDate) {
        const foundedYear = dayJsDate.getFullYear();

        return dateSchema.min(foundedYear, 'Founded should be before Final issue');
      }

      return dateSchema;
    }),
  link: Yup.string().label('Link').url(),
  categories: Yup.string().label('Categoty').trim().required()
});

type CreateMagazineDialogProps = {
  open: boolean;
  handleClose: () => void;
};

export const CreateMagazineDialog = ({ open, handleClose }: CreateMagazineDialogProps) => {
  const { enqueueSnackbar } = useSnackbar();

  const methods = useForm({
    mode: 'all',
    defaultValues,
    resolver: yupResolver(schema),
    shouldUnregister: false
  });

  const { handleSubmit, reset, clearErrors } = methods;

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
      console.error(e);
      enqueueSnackbar('Opps something went wrong!', { variant: 'error' });
    }
  };

  return (
    <Dialog open={open} onClose={handleCloseDialog}>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogTitle>Add new magazine</DialogTitle>

          <DialogContent>
            <DialogContentText py={2} height="70vh">
              <FormInputImage name="image" />

              <FormInputText name="name" label="Name*" />

              <FormInputNumber name="circulation" label="Circulation*" />

              <FormAutocomplete name="country" label="Country*" url="/countries" />

              <FormAutocomplete name="language" label="Language*" url="/languages" />

              <FormAutocomplete name="frequency" label="Frequency" url="/frequency" />

              <Box mt={4} display="flex" gap="10px">
                <FormInputDate name="founded" label="Founded" />
                <FormInputDate name="final_issue" label="Final issue" />
              </Box>

              <FormInputText name="link" label="Link" type="url" />

              <FormAutocomplete
                name="categories"
                label="Category"
                getOptionLabel={(option) => option.label}
                url="/category"
              />
            </DialogContentText>
          </DialogContent>

          <DialogActions>
            <Button onClick={handleCloseDialog}>Cancel</Button>
            <Button onClick={handleSubmit(onSubmit)}>Create</Button>
          </DialogActions>
        </form>
      </FormProvider>
    </Dialog>
  );
};
