import React from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Blob } from 'react-interactive-blob';
import { useMantineTheme } from '@mantine/core';
import { useMediaQuery, useViewportSize } from '@mantine/hooks';

export const CustomBlob: React.FC = () => {
  const theme = useMantineTheme();
  const isMobile = useMediaQuery('(max-width: 768px)');
  const { width, height } = useViewportSize();
  return (
    <Blob
      height={height}
      width={isMobile ? width : (width * 1000) / 1920}
      radius={width * (isMobile ? 1 / 2 : 700 / 1920 / 2)}
      markers={false}
      sensitivity={0.3}
      color={theme.colors.blue[0]}
    />
  );
};
