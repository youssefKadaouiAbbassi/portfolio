import React from 'react';
import { Center, Group } from '@mantine/core';
import { LeftLandingSection } from './leftLandingSection/LeftLandingSection';
import { CustomAvatar } from './avatar/CustomAvatar';

export const LandingSection: React.FC = () => {
  return (
    <Center>
      <Group spacing={95}>
        <LeftLandingSection />
        <CustomAvatar />
      </Group>
    </Center>
  );
};
