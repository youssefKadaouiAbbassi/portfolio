import React from 'react';
import {
  Group,
  Button,
  useMantineTheme,
  createStyles,
  ActionIcon,
} from '@mantine/core';
import LinkedinIcon from '../../../../public/assets/images/linkedin.svg';
import GithubIcon from '../../../../public/assets/images/github.svg';
import { useMediaQuery } from '@mantine/hooks';

const useStyles = createStyles((theme) => ({
  calendly: {
    textColor: theme.colors.white,
    fontSize: theme.fontSizes.xs,
    fontWeight: 600,
    width: 210,
    height: 65,
    borderRadius: 10,
  },
  roundButton: {
    width: 70,
    height: 70,
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
          <img src={LinkedinIcon} alt="" />
        </ActionIcon>
        <ActionIcon
          variant="subtle"
          radius="xl"
          className={classes.roundButton}
        >
          <img src={GithubIcon} alt="" />
        </ActionIcon>
      </Group>
    </Group>
  );
};
