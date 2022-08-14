import React from 'react';
import { createStyles, Stack, Text } from '@mantine/core';
import { useTranslation } from 'next-i18next';

const useStyles = createStyles((theme) => ({
  im: {
    color: theme.colors.pink,
    fontSize: theme.fontSizes.sm,
    fontWeight: 600,
  },
  name: {
    color: theme.colors.black,
    fontSize: theme.fontSizes.xl,
    fontWeight: 700,
    lineHeight: 1,
  },
  job: {
    color: theme.colors.black,
    fontSize: theme.fontSizes.md,
    fontWeight: 600,
  },
}));

export const InfoSection: React.FC = () => {
  const { classes } = useStyles();
  const { t } = useTranslation('landingSection');
  return (
    <Stack spacing="sm">
      <Text className={classes.im}>{"I'm"}</Text>
      <Stack>
        <Text className={classes.name}>YOUSSEF KADAOUI</Text>
        <Text className={classes.name}>ABBASSI</Text>
      </Stack>
      <Text className={classes.job}>{t('App Designer')}</Text>
    </Stack>
  );
};
