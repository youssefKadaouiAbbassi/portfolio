import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { createStyles } from '@mantine/core';

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
  return (
    <TypeAnimation
      sequence={[
        'Lead Dev chez Goodwave',
        1000,
        "Co-founder d'Overa",
        1000,
        "Etudiant à l'EPITA",
        1000,
        'Software Engineer',
      ]}
      wrapper="div"
      cursor={true}
      repeat={Infinity}
      className={classes.typedText}
    />
  );
};
