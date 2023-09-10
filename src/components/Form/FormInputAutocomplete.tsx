import { Control, Controller, FieldValues, Path } from 'react-hook-form';
import { Autocomplete } from '../Autocomplete';

type FormAutocompleteProps<T extends FieldValues> = {
  name: Path<T>;
  getOptionLabel?: ({ label }: { label: string }) => string;
  label: string;
  url: string;
  control: Control<T>;
};

export const FormAutocomplete = <T extends FieldValues>({
  name,
  getOptionLabel = (option) => option.label,
  label,
  url,
  control
}: FormAutocompleteProps<T>) => (
  <Controller
    name={name}
    control={control}
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
