import { useCallback, useEffect, useState } from 'react';
import { FieldError } from 'react-hook-form';

import AutocompleteMui from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';
import { fetchOptions } from '@/api/autocomplete-api';

type AutocompleteProps = {
  label: string;
  getOptionLabel: (option: { label: string }) => string;
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
  const [options, setOptions] = useState<{ label: string }[]>([]);
  const loading = open && options.length === 0;

  const getOptions = useCallback(async () => {
    try {
      return await fetchOptions(url);
    } catch (err) {
      console.error(err);
      return [];
    }
  }, [url]);

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
  }, [loading, getOptions]);

  useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  const compareOption = (option: { label: string }, value: { label: string }) =>
    option.label === value.label;

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
      onChange={(e, value) => field.onChange(value?.label)}
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
