import {
  createBrowserRouter,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Chart from "./routes/Chart";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";
import NotFound from "./routes/NotFound";
import Price from "./routes/Price";
import Root from "./routes/Root";
import { useThemeStore } from "./zustand";
import { darkTheme, lightTheme } from "./theme";
// const router = createBrowserRouter(
//   [
//     {
//       path: "/",
//       element: <Root />,
//       errorElement: <NotFound />,
//       children: [
//         {
//           path: "",
//           element: <Coins />,
//         },
//         {
//           path: ":coinId",
//           element: <Coin />,
//           children: [
//             {
//               path: "chart",
//               element: <Chart />,
//             },
//             {
//               path: "price",
//               element: <Price />,
//             },
//           ],
//         },
//       ],
//     },
//   ],
//   { basename: process.env.PUBLIC_URL + "/" }
// );

const BrowserRouter = () => {
  // "/:coinId/*"가 되면 뒤에 뭐가 들어와도 뭔가 보여주려고 함
  const { isLight } = useThemeStore();
  return (
    <ThemeProvider theme={isLight ? lightTheme : darkTheme}>
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Coins />} />
          <Route path="/:coinId" element={<Coin />}>
            <Route path="price" element={<Price />} />
            <Route path="chart" element={<Chart />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default BrowserRouter;
