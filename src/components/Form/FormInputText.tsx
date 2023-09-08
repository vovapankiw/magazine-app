import { Controller, useFormContext } from 'react-hook-form';
import TextField from '@mui/material/TextField';

type FormInputTextProps = {
  name: string;
  label: string;
  rules: any;
};

export const FormInputText = ({ name, label, rules }: FormInputTextProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextField
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
