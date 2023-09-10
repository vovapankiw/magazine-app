import { ElementType, forwardRef } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { NumericFormat, NumericFormatProps } from 'react-number-format';
import { InputBaseComponentProps } from '@mui/material';
import TextField from '@mui/material/TextField';
import { IFormValue } from '@/features/magazines/components/CreateMagazineDialog';

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
        console.log(values);
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
  name: keyof IFormValue;
  label: string;
};

export const FormInputNumber = ({ name, label }: FormInputNumberProps) => {
  const { control } = useFormContext<IFormValue>();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextField
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
          InputProps={{
            // issue: https://github.com/mui/material-ui/issues/32420 with forwardref type, we need type cast
            inputComponent: NumericFormatCustom as unknown as ElementType<InputBaseComponentProps>
          }}
        />
      )}
    />
  );
};
