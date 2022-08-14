import React from 'react';
import { Center, Container, Stack } from '@mantine/core';
import { LeftLandingSection } from './leftLandingSection/LeftLandingSection';
import { RightLandingSection } from './rightLandingSection/RightLandingSection';
import { useMediaQuery } from '@mantine/hooks';

export const LandingSection: React.FC = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  return isMobile ? (
    <Container px="xs" sx={{ marginTop: 40 }}>
      <Stack spacing={250}>
        <LeftLandingSection />
        <RightLandingSection />
      </Stack>
    </Container>
  ) : (
    <Center>
      <LeftLandingSection />
      <RightLandingSection />
    </Center>
  );
};
