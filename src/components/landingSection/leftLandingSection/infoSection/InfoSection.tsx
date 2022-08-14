import React from 'react';
import { createStyles, Stack, Text } from '@mantine/core';
import { TypeAnimatedText } from './TypeAnimatedText/TypeAnimatedText';
import { useTranslation } from 'next-i18next';

const useStyles = createStyles((theme) => ({
  im: {
    color: theme.colors.pink,
    fontSize: '2vw',
    fontWeight: 600,
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      fontSize: theme.fontSizes.sm - 15,
    },
  },
  name: {
    color: theme.colors.black,
    fontSize: '4.5vw',
    fontWeight: 700,
    lineHeight: 1,
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      fontSize: theme.fontSizes.xl - 40,
    },
  },
}));

export const InfoSection: React.FC = () => {
  const { classes } = useStyles();
  const { t } = useTranslation('landingSection');
  return (
    <Stack spacing="sm">
      <Text className={classes.im}>{t('im')}</Text>
      <Stack>
        <Text className={classes.name}>YOUSSEF KADAOUI</Text>
        <Text className={classes.name}>ABBASSI</Text>
      </Stack>
      <TypeAnimatedText />
    </Stack>
  );
};
