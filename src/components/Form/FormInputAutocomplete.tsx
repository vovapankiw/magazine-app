import { Controller, useFormContext } from 'react-hook-form';
import { Autocomplete } from '../Autocomplete';

type FormAutocompleteProps = {
  name: string;
  rules: Record<string, string>;
  getOptionLabel: ({ title }: { title: string }) => string;
  label: string;
  url: string;
};

export const FormAutocomplete = ({
  name,
  rules,
  getOptionLabel,
  label,
  url
}: FormAutocompleteProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
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
