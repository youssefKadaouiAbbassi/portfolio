import React from 'react';
import {
  Group,
  Button,
  useMantineTheme,
  createStyles,
  ActionIcon,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import Image from 'next/image';

const useStyles = createStyles((theme) => ({
  calendly: {
    textColor: theme.colors.white,
    fontSize: '1.5vw',
    fontWeight: 600,
    width: '11vw',
    height: '4vw',
    borderRadius: 10,
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      fontSize: theme.fontSizes.xs,
      width: 210,
      height: 65,
    },
  },
  roundButton: {
    width: '4vw',
    height: '4vw',
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      width: 70,
      height: 70,
    },
  },
}));

export const ButtonsSection: React.FC = () => {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const isMobile = useMediaQuery('(max-width: 768px)');
  return (
    <Group spacing={isMobile ? 30 : 74}>
      <Button
        variant="gradient"
        gradient={{ from: theme.colors.pink[0], to: theme.colors.purple[0] }}
        className={classes.calendly}
      >
        Calendly
      </Button>
      <Group spacing={6}>
        <ActionIcon
          variant="subtle"
          radius="xl"
          className={classes.roundButton}
        >
          <Image
            src="/assets/images/linkedin.svg"
            alt=""
            width={70}
            height={70}
          />
        </ActionIcon>
        <ActionIcon
          variant="subtle"
          radius="xl"
          className={classes.roundButton}
        >
          <Image
            src="/assets/images/github.svg"
            alt=""
            width={70}
            height={70}
          />
        </ActionIcon>
      </Group>
    </Group>
  );
};
