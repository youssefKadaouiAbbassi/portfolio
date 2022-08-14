import { Avatar, useMantineTheme } from '@mantine/core';
import React from 'react';
import { useMediaQuery, useViewportSize } from '@mantine/hooks';

export const CustomAvatar: React.FC = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const { width } = useViewportSize();
  const theme = useMantineTheme();
  return (
    <Avatar
      src={
        isMobile
          ? '/assets/images/mobileAvatar.png'
          : '/assets/images/avatar.svg'
      }
      size={width * (isMobile ? 600 / 768 : 600 / 1920)}
      color={theme.colors.purple[0]}
    />
  );
};
