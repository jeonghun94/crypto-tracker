import { createBrowserRouter } from "react-router-dom";
import Chart from "./routes/Chart";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";
import NotFound from "./routes/NotFound";
import Price from "./routes/Price";
import Root from "./routes/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <Coins />,
      },
      {
        path: ":coinId",
        element: <Coin />,
        children: [
          {
            path: "chart",
            element: <Chart />,
          },
          {
            path: "price",
            element: <Price />,
          },
        ],
      },
    ],
  },
]);

export default router;
