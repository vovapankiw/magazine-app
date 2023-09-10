import { Controller, useFormContext } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import { IFormValue } from '@/features/magazines/components/CreateMagazineDialog';

type FormInputTextProps = {
  name: keyof IFormValue;
  label: string;
  type?: 'text' | 'url';
};

export const FormInputText = ({ name, label, type = 'text' }: FormInputTextProps) => {
  const { control } = useFormContext<IFormValue>();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextField
          type={type}
          helperText={error ? error.message : null}
          error={!!error}
          autoFocus
          fullWidth
          multiline
          margin="dense"
          variant="standard"
          onChange={onChange}
          value={value}
          label={label}
        />
      )}
    />
  );
};
