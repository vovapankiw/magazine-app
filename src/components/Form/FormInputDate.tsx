import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';

type FormInputDateProps<T extends FieldValues> = {
  name: Path<T>;
  label: string;
  control: Control<T>;
};

export const FormInputDate = <T extends FieldValues>({
  name,
  label,
  control
}: FormInputDateProps<T>) => (
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
