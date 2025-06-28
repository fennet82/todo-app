import { Navbar } from "../components/Navbar/Navbar";
import { createTheme, MantineProvider } from '@mantine/core';

// Import Mantine core styles
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/notifications/styles.css';
import '@mantine/charts/styles.css';

const theme = createTheme({
});

export function App() {
  return (
    <MantineProvider theme={theme}>
        <Navbar></Navbar>
    </MantineProvider>
  );
}

export default App;
