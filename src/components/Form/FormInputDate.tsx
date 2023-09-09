import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Controller, useFormContext } from 'react-hook-form';

type FormInputDateProps = {
  name: string;
  label: string;
};

export const FormInputDate = ({ name, label }: FormInputDateProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            {...field}
            label={label}
            format="YYYY"
            views={['year']}
            disableFuture
            slotProps={{
              textField: {
                variant: 'outlined',

                error: !!error,
                helperText: error?.message
              }
            }}
          />
        </LocalizationProvider>
      )}
    />
  );
};
