import { forwardRef } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { NumericFormat, NumericFormatProps } from 'react-number-format';
import TextField from '@mui/material/TextField';

type CustomProps = {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
};

const NumericFormatCustom = forwardRef<NumericFormatProps, CustomProps>((props, ref) => {
  const { onChange, ...other } = props;

  return (
    <NumericFormat
      {...other}
      getInputRef={ref}
      onValueChange={(values: { value: string }) => {
        onChange({
          target: {
            name: props.name,
            value: values.value
          }
        });
      }}
      thousandSeparator
      valueIsNumericString
    />
  );
});

type FormInputNumberProps = {
  name: string;
  label: string;
};

export const FormInputNumber = ({ name, label }: FormInputNumberProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
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
          InputProps={{
            inputComponent: NumericFormatCustom as any
          }}
        />
      )}
    />
  );
};
