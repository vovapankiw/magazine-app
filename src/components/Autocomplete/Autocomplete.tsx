import { useEffect, useState } from 'react';
import { FieldError } from 'react-hook-form';

import AutocompleteMui from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';

type AutocompleteProps = {
  label: string;
  getOptionLabel: (option: { title: string }) => string;
  field: { onChange: (...event: any[]) => void };
  invalid: boolean;
  error: FieldError | undefined;
  url: string;
};

export const Autocomplete = ({
  label,
  getOptionLabel,
  field,
  invalid,
  error,
  url
}: AutocompleteProps) => {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState<{ title: string }[]>([]);
  const loading = open && options.length === 0;
  console.log(url);
  async function getOptions() {
    return Promise.resolve([{ title: 'sd' }]);
  }

  useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    void (async () => {
      const inputOptions = await getOptions();

      if (active) {
        setOptions([...inputOptions]);
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  const compareOption = (option: { title: string }, value: { title: string }) =>
    option.title === value.title;

  return (
    <AutocompleteMui
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      isOptionEqualToValue={compareOption}
      getOptionLabel={getOptionLabel}
      options={options}
      loading={loading}
      sx={{ width: '100%', mt: 3 }}
      onChange={(e, value) => field.onChange(value)}
      onInputChange={(_, data) => {
        if (data) field.onChange(data);
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          error={invalid}
          helperText={error?.message}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </>
            )
          }}
        />
      )}
    />
  );
};
