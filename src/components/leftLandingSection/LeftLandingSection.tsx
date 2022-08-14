import React from 'react';
import { Stack } from '@mantine/core';
import { InfoSection } from './infoSection/InfoSection';
import { ButtonsSection } from './buttonsSection/ButtonsSection';

export const LeftLandingSection: React.FC = () => {
  return (
    <Stack spacing={45}>
      <InfoSection />
      <ButtonsSection />
    </Stack>
  );
};
