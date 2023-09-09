import { Controller, useFormContext } from 'react-hook-form';
import TextField from '@mui/material/TextField';

type FormInputTextProps = {
  name: string;
  label: string;
};

export const FormInputText = ({ name, label }: FormInputTextProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextField
          type="url"
          helperText={error ? error.message : null}
          autoFocus
          fullWidth
          multiline
          margin="dense"
          variant="standard"
          error={!!error}
          onChange={onChange}
          value={value}
          label={label}
        />
      )}
    />
  );
};
