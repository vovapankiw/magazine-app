import React, { useState, useEffect, ChangeEvent } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Box from '@mui/material/Box';
import { CardPreview } from '../CardPreview';

type FormInputImageProps = {
  name: string;
};

export const FormInputImage = ({ name }: FormInputImageProps) => {
  const { control } = useFormContext();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  // const imageElement = useRef();

  const showImage = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { files } = e.target as HTMLInputElement;
    if (!files || files.length === 0) {
      setSelectedFile(null);
      return;
    }

    setSelectedFile(files[0]);
  };

  useEffect(() => {
    if (!selectedFile) {
      setPreview(null);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    // eslint-disable-next-line consistent-return
    return () => {
      URL.revokeObjectURL(objectUrl);
    };
  }, [selectedFile]);

  // const imagePreview = () => {
  //   if (preview) {
  //     return (
  //       <img
  //         ref={imageElement}
  //         src={preview}
  //         alt="screen"
  //         style={{ height: '215px', width: '400px', objectFit: 'contain' }}
  //       />
  //     );
  //   }
  //   return (
  //     <Box
  //       style={{
  //         width: '100%',
  //         height: '215px',
  //         display: 'flex',
  //         justifyContent: 'center',
  //         alignItems: 'center'
  //       }}
  //     >
  //       No preview
  //     </Box>
  //   );
  // };

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
        </Box>
      )}
    />
  );
};
