import React from 'react';
import { useMediaQuery, useViewportSize } from '@mantine/hooks';
import { Center, useMantineTheme } from '@mantine/core';
import Image from 'next/image';

export const CustomAvatar: React.FC = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const { width } = useViewportSize();
  const theme = useMantineTheme();

  return (
    <Center
      style={{
        width: width * (isMobile ? 750 / 768 : 600 / 1920),
        height: width * (isMobile ? 750 / 768 : 600 / 1920),
        backgroundColor: theme.colors.blue[0],
        borderRadius: '50%',
      }}
    >
      <Image
        src={'/assets/images/avatar.png'}
        width={width * (isMobile ? 700 / 768 : 530 / 1920)}
        height={width * (isMobile ? 700 / 768 : 530 / 1920)}
        alt=""
        priority
      />
    </Center>
  );
};
