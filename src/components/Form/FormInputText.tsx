import { Control, Controller, FieldValues, Path } from 'react-hook-form';
import TextField from '@mui/material/TextField';

type FormControlFieldProps<T extends FieldValues> = {
  name: Path<T>;
  label: string;
  type?: 'text' | 'url';
  control: Control<T>;
};

export const FormInputText = <T extends FieldValues>({
  control,
  name,
  label,
  type = 'text'
}: FormControlFieldProps<T>) => (
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
        value={value as string}
        label={label}
      />
    )}
  />
);
