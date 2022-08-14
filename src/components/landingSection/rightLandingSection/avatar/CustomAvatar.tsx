import React from 'react';
import { useMediaQuery, useViewportSize } from '@mantine/hooks';
import Image from 'next/image';

export const CustomAvatar: React.FC = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const { width } = useViewportSize();
  return (
    <Image
      src={
        isMobile
          ? '/assets/images/mobileAvatar.png'
          : '/assets/images/avatar.png'
      }
      width={width * (isMobile ? 750 / 768 : 600 / 1920)}
      height={width * (isMobile ? 750 / 768 : 600 / 1920)}
      alt=""
      priority
    />
  );
};
