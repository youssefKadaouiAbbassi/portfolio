import React from 'react';
import { createStyles, Stack, Text } from '@mantine/core';
import { TypeAnimatedText } from './TypeAnimatedText/TypeAnimatedText';

const useStyles = createStyles((theme) => ({
  im: {
    color: theme.colors.pink,
    fontSize: theme.fontSizes.sm,
    fontWeight: 600,
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      fontSize: theme.fontSizes.sm - 10,
    },
  },
  name: {
    color: theme.colors.black,
    fontSize: theme.fontSizes.xl,
    fontWeight: 700,
    lineHeight: 1,
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      fontSize: theme.fontSizes.xl - 40,
    },
  },
}));

export const InfoSection: React.FC = () => {
  const { classes } = useStyles();
  return (
    <Stack spacing="sm">
      <Text className={classes.im}>{"I'm"}</Text>
      <Stack>
        <Text className={classes.name}>YOUSSEF KADAOUI</Text>
        <Text className={classes.name}>ABBASSI</Text>
      </Stack>
      <TypeAnimatedText />
    </Stack>
  );
};
