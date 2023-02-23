import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import router from "./Router";
// import { theme } from "./theme";
import { darkTheme, lightTheme } from "./theme";
import { useState } from "react";

const queryClient = new QueryClient();
// const [isDark, setIsDark] = useState(false);
// const toggleDark = () => setIsDark((current) => !current);

const isDark = localStorage.getItem("mode");
console.log(isDark);

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      {/* <ThemeProvider theme={theme}> */}
      <ThemeProvider theme={!isDark ? darkTheme : lightTheme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
