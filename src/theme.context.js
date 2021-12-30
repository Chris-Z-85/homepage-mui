import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { deepPurple } from "@mui/material/colors/";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

export const ColorModeContextProvider = ({ children }) => {
  const [mode, setMode] = React.useState("dark");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const bg = "linear-gradient(120deg, #232a2d, #000 60%)";

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: `${deepPurple[500]}`,
            mainGradient: "linear-gradient(to right, tomato, cyan)",
          },
          background: {
            default: "linear-gradient(120deg, #232a2d, #000 60%);",
          },
        },
        typography: {
          fontFamily: [
            "Roboto",
            "Helvetica",
            "Arial",
            "sans-serif",
            "Rubik",
          ].join(","),
          fontSize: 16,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export const useColorMode = () => React.useContext(ColorModeContext);
