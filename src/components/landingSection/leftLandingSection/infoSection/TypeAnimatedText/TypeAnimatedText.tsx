import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { createStyles } from '@mantine/core';
import { useTranslation } from 'next-i18next';

const useStyles = createStyles((theme) => ({
  typedText: {
    color: theme.colors.black,
    fontSize: '3vw',
    fontWeight: 600,
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      fontSize: theme.fontSizes.md - 25,
    },
  },
}));

export const TypeAnimatedText: React.FC = () => {
  const { classes } = useStyles();
  const { t } = useTranslation('landingSection');
  return (
    <TypeAnimation
      sequence={[
        t('leadDevGoodwave'),
        2000,
        t('coFounder'),
        2000,
        t('studentAt'),
        2000,
        t('SoftwareEngineer'),
      ]}
      wrapper="div"
      cursor={true}
      repeat={Infinity}
      className={classes.typedText}
    />
  );
};
