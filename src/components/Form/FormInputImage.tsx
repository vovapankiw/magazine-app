import { useState, useEffect, ChangeEvent } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import { CardPreview } from '../CardPreview';

type FormInputImageProps = {
  name: string;
};

export const FormInputImage = ({ name }: FormInputImageProps) => {
  const { control } = useFormContext();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const showImage = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { files } = e.target as HTMLInputElement;
    if (!files || files.length === 0) {
      setSelectedFile(null);
      return;
    }

    setSelectedFile(files[0]);
  };

  const removeImage = () => {
    setSelectedFile(null);
  };

  useEffect(() => {
    if (!selectedFile) {
      setPreview(null);
      return undefined;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => {
      URL.revokeObjectURL(objectUrl);
    };
  }, [selectedFile]);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange } }) => (
        <Box sx={{ position: 'relative', height: '215px' }}>
          <CardPreview src={preview} height="215" width="400" />
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="label"
            sx={{ position: 'absolute', bottom: '10px', right: '10px' }}
          >
            <input
              hidden
              accept="image/*"
              type="file"
              onChange={(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
                const { files } = e.target as HTMLInputElement;
                showImage(e);
                onChange(files?.[0]);
              }}
            />
            <PhotoCamera sx={{ fill: '#1976d2 !important' }} />
          </IconButton>
          {preview && (
            <IconButton
              component="label"
              onClick={removeImage}
              sx={{ position: 'absolute', bottom: '10px', right: '50px' }}
            >
              <DeleteIcon sx={{ fill: '#1976d2 !important' }} />
            </IconButton>
          )}
        </Box>
      )}
    />
  );
};
