import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  typedText: {
    color: theme.colors.black,
    fontSize: theme.fontSizes.md,
    fontWeight: 600,
  },
}));

interface TypeAnimatedTextProps {
  sequences: string[];
}

export const TypeAnimatedText: React.FC<TypeAnimatedTextProps> = ({
  sequences,
}) => {
  const { classes } = useStyles();
  return (
    <TypeAnimation
      sequence={sequences.map((sequence) => [sequence, 2000]).flat()}
      speed={10}
      wrapper="div"
      cursor={true}
      repeat={Infinity}
      className={classes.typedText}
    />
  );
};
