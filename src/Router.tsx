import { createBrowserRouter } from "react-router-dom";
import Chart from "./routes/Chart";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";
import NotFound from "./routes/NotFound";
import Price from "./routes/Price";
import Root from "./routes/Root";

const router = createBrowserRouter([
  {
    path: `${process.env.PUBLIC_URL}/`,
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: `${process.env.PUBLIC_URL}/}`,
        element: <Coins />,
      },
      {
        // path: ":coinId",
        path: `${process.env.PUBLIC_URL}/:coinId`,
        element: <Coin />,
        children: [
          {
            path: `${process.env.PUBLIC_URL}/:coinId/chart`,
            element: <Chart />,
          },
          {
            path: `${process.env.PUBLIC_URL}/:coinId/price`,
            element: <Price />,
          },
        ],
      },
    ],
  },
]);

export default router;
