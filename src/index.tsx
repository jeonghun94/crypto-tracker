import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { RouterProvider } from "react-router-dom";
import App from "./App";
import BrowserRouter from "./Router";
import router from "./Router";

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      {/* <RouterProvider router={router} /> */}
      {/* <BrowserRouter /> */}
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
