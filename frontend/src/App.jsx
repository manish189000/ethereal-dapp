import { RouterProvider, createBrowserRouter } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import NodePage from "./pages/NodePage";
import WithdrawPage from "./pages/WithdrawPage";
import HomePage from "./pages/HomePage";
import Layout from "./Layout";

const App = () => {
  const router = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    {
      path: "/dashboard",
      element: <Layout />,
      children: [
        { index: true, element: <DashboardPage /> },
        { path: "node", element: <NodePage /> },
        { path: "withdraw", element: <WithdrawPage /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
