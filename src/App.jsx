import { DataProvider } from "./Context";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { SnackbarProvider } from "notistack";
function App() {
  const theme = createTheme({
    direction: "rtl",
  });

  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });

  return (
    <div className="flex justify-center m-0 items-center w-full h-full bg-white md:bg-gradient-to-r from-cyan-800 to-blue-900">
      <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={theme}>
          <DataProvider>
            <SnackbarProvider maxSnack={3}>
              <RouterProvider router={router} />
            </SnackbarProvider>
          </DataProvider>
        </ThemeProvider>
      </CacheProvider>
    </div>
  );
}
export default App;
