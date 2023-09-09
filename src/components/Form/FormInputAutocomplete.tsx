import { Controller, useFormContext } from 'react-hook-form';
import { Autocomplete } from '../Autocomplete';

type FormAutocompleteProps = {
  name: string;
  getOptionLabel: ({ label }: { label: string }) => string;
  label: string;
  url: string;
};

export const FormAutocomplete = ({ name, getOptionLabel, label, url }: FormAutocompleteProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={null}
      render={({ field: { ref, ...field }, fieldState: { error, invalid } }) => (
        <Autocomplete
          field={field}
          getOptionLabel={getOptionLabel}
          label={label}
          error={error}
          invalid={invalid}
          url={url}
        />
      )}
    />
  );
};
