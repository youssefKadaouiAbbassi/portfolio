import { Avatar } from '@mantine/core';
import React from 'react';
import { useMediaQuery } from '@mantine/hooks';

export const CustomAvatar: React.FC = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  return <Avatar src="/assets/images/avatar.svg" size={isMobile ? 400 : 600} />;
};
