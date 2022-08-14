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
import Link from 'next/link';
import { actions } from '../../../../constant/actions';

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
      <Link href={actions.calendly} passHref>
        <Button
          component="a"
          target="_blank"
          variant="gradient"
          gradient={{ from: theme.colors.pink[0], to: theme.colors.purple[0] }}
          className={classes.calendly}
        >
          Calendly
        </Button>
      </Link>
      <Group spacing={6}>
        <Link href={actions.linkedin} passHref>
          <ActionIcon
            component="a"
            target="_blank"
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
        </Link>
        <Link href={actions.github} passHref>
          <ActionIcon
            component="a"
            target="_blank"
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
        </Link>
      </Group>
    </Group>
  );
};
