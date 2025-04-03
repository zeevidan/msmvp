import React from 'react';
import {
  makeStyles,
  shorthands,
  tokens,
  Text,
  Button,
} from '@fluentui/react-components';
import {
  Home24Regular,
  Chat24Regular,
  Person24Regular,
  Settings24Regular,
} from '@fluentui/react-icons';
import { brandColors, gradients } from '../theme/tokens';

const useStyles = makeStyles({
  sidebar: {
    display: 'flex',
    flexDirection: 'column',
    background: gradients.primaryGradient,
    ...shorthands.padding('24px', '16px'),
    height: '100%',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '40px',
    color: 'white',
  },
  logoText: {
    fontSize: tokens.fontSizeBase600,
    fontWeight: tokens.fontWeightSemibold,
    color: 'white',
  },
  nav: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  navLink: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    ...shorthands.padding('12px', '16px'),
    ...shorthands.borderRadius('8px'),
    color: 'white',
    textDecoration: 'none',
    opacity: 0.8,
    transition: 'all 0.2s ease',
    '&:hover': {
      opacity: 1,
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
  },
  activeNavLink: {
    opacity: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.25)',
    },
  },
  navButton: {
    color: 'white',
    backgroundColor: 'transparent',
    justifyContent: 'flex-start',
    ...shorthands.padding('12px', '16px'),
    ...shorthands.borderRadius('8px'),
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
  },
  activeNavButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.25)',
    },
  },
  navText: {
    fontSize: tokens.fontSizeBase300,
    fontWeight: tokens.fontWeightMedium,
  },
  footer: {
    marginTop: 'auto',
    ...shorthands.padding('16px', 0),
  },
});

export const Sidebar: React.FC = () => {
  const styles = useStyles();

  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <Text className={styles.logoText}>AskRai</Text>
      </div>
      <nav className={styles.nav}>
        <Button
          className={`${styles.navButton} ${styles.activeNavButton}`}
          icon={<Home24Regular />}
          appearance="transparent"
        >
          <Text className={styles.navText}>Dashboard</Text>
        </Button>
        <Button
          className={styles.navButton}
          icon={<Chat24Regular />}
          appearance="transparent"
        >
          <Text className={styles.navText}>Conversations</Text>
        </Button>
        <Button
          className={styles.navButton}
          icon={<Person24Regular />}
          appearance="transparent"
        >
          <Text className={styles.navText}>Users</Text>
        </Button>
      </nav>
      <div className={styles.footer}>
        <Button
          className={styles.navButton}
          icon={<Settings24Regular />}
          appearance="transparent"
        >
          <Text className={styles.navText}>Settings</Text>
        </Button>
      </div>
    </div>
  );
}; 