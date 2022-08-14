import React from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Blob } from 'react-interactive-blob';
import { useMantineTheme } from '@mantine/core';

export const CustomBlob: React.FC = () => {
  const theme = useMantineTheme();
  return (
    <Blob
      height={800}
      radius={400}
      markers={false}
      sensitivity={0.8}
      color={theme.colors.blue[0]}
    />
  );
};
