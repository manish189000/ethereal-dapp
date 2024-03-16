import { RouterProvider, createBrowserRouter } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Layout, { loader } from "./Layout";
import "./App.css";
import DashboardPage from "./pages/user-pages/DashboardPage";
import NodePage from "./pages/user-pages/NodePage";
import WithdrawPage from "./pages/user-pages/WithdrawPage";
import AdminPage from "./pages/admin-pages/AdminPage";
import ApproveWithdrawalPage from "./pages/admin-pages/ApproveWithdrawalPage";
import NodezPage from "./pages/admin-pages/NodezPage";
import ConfigPage from "./pages/admin-pages/ConfigPage";
const App = () => {
  const router = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    {
      path: "/user",
      element: <Layout />,
      children: [
        { path: "dashboard", element: <DashboardPage /> },
        { path: "node", element: <NodePage /> },
        { path: "withdraw", element: <WithdrawPage /> },
      ],
      loader: loader,
    },
    {
      path: "/admin",
      element: <Layout />,
      children: [
        { path: "admin", element: <AdminPage /> },
        { path: "nodez", element: <NodezPage /> },
        { path: "config", element: <ConfigPage /> },
        { path: "approve-withdrawal", element: <ApproveWithdrawalPage /> },
      ],
      loader: loader,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
