import React from 'react';
import { Center, Container, createStyles } from '@mantine/core';
import { CustomBlob } from './customBlob/CustomBlob';
import { CustomAvatar } from './avatar/CustomAvatar';
import { useMediaQuery } from '@mantine/hooks';

const useStyles = createStyles((theme) => ({
  container: {
    zIndex: -1,
    width: '100%',
    [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
      right: 150,
      width: '50%',
      marginLeft: -100,
    },
  },
}));
export const RightLandingSection: React.FC = () => {
  const { classes } = useStyles();
  const isMobile = useMediaQuery('(max-width: 768px)');
  return (
    <div className={classes.container}>
      <Center>
        {!isMobile && <CustomBlob />}
        <Container sx={{ position: 'absolute' }}>
          <CustomAvatar />
        </Container>
      </Center>
    </div>
  );
};
