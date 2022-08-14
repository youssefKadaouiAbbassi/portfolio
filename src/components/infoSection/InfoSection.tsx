import React from 'react';
import { createStyles, Stack, Text } from '@mantine/core';
import { useTranslation } from 'next-i18next';
import { TypeAnimation } from 'react-type-animation';

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
      <TypeAnimation
        sequence={[
          'Lead Dev chez Goodwave',
          "Co-founder d'Overa",
          "Etudiant à l'EPITA",
          'Software Engineer',
        ]}
      />
    </Stack>
  );
};
