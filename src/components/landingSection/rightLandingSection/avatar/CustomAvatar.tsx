import React from 'react';
import Image from 'next/image';
import { useMediaQuery, useViewportSize } from '@mantine/hooks';

export const CustomAvatar: React.FC = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const { width } = useViewportSize();
  return (
    <Image
      src={
        isMobile
          ? '/assets/images/mobileAvatar.png'
          : '/assets/images/avatar.svg'
      }
      width={width * (isMobile ? 600 / 768 : 600 / 1920)}
      height={width * (isMobile ? 600 / 768 : 600 / 1920)}
      priority
    />
  );
};
