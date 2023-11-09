import logo from './logo.svg';
import './App.css';
import '@mantine/core/styles.css';
import { MantineProvider, createTheme } from '@mantine/core';
import Color from './Components/Color';
import ColorShemes from './Components/Color-shemes';
import Typography from './Components/Typography';


const theme = createTheme({
  /** Put your mantine theme override here */
});

function App() {
  return (
    <MantineProvider theme={theme}>
      <Color/>
      <ColorShemes />
      <Typography/>
    </MantineProvider>
  );
}

export default App;
