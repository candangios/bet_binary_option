import React, { Fragment } from "react";
import { ThemeProvider } from "emotion-theming";
import theme from "../src/styles/theme";
import Home from './pages/home'

import Navbar from "../src/components/Navbar";
import { Box } from "rebass";
function App() {
  const hiddenNavbar = window.location.hash.indexOf("hide_navbar") >= 0;
  return (
 
    <Fragment>
      <ThemeProvider theme={theme}>
          {!hiddenNavbar && <Navbar />}
          <Box fontSize={1}>
            <Home/>
          </Box>
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
