import Navbar, { type NavbarLinkProps } from "../components/Navbar/Navbar";
import { createTheme, MantineProvider, BackgroundImage, Box } from '@mantine/core';
import BackgroundImg from '../assets/backgrounds/okinawa_sea.jpeg';
import classes from './app.module.css';
import {
  IconCalendarStats,
  IconDeviceDesktopAnalytics,
  IconFingerprint,
  IconGauge,
  IconHome2,
  IconSettings,
  IconUser,
} from '@tabler/icons-react';

// Import Mantine core styles
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/notifications/styles.css';
import '@mantine/charts/styles.css';

const navbarLinks: NavbarLinkProps[] = [
  { icon: IconHome2, label: 'Home' },
  { icon: IconGauge, label: 'Dashboard' },
  { icon: IconDeviceDesktopAnalytics, label: 'Analytics' },
  { icon: IconCalendarStats, label: 'Releases' },
  { icon: IconUser, label: 'Account' },
  { icon: IconFingerprint, label: 'Security' },
  { icon: IconSettings, label: 'Settings' },
];

const theme = createTheme({});

export function App() {
  return (
    <MantineProvider theme={theme}>
      <BackgroundImage
        src={BackgroundImg}
        className={classes.backgroundImage}
      >
        <Box
          className={classes.backgroundBox}
        >
          <Navbar navProps={navbarLinks} />
        </Box>
      </BackgroundImage>
    </MantineProvider>
  );
}

export default App;
