import { RouterProvider, createBrowserRouter } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import NodePage from "./pages/NodePage";
import WithdrawPage from "./pages/WithdrawPage";
import HomePage from "./pages/HomePage";
import Layout from "./Layout";
import "./App.css";
import AdminPage from "./pages/AdminPage";
import ApproveWithdrawalPage from "./pages/ApproveWithdrawalPage";
import NodezConfigPage from "./pages/NodezConfigPage";
const App = () => {
  const router = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    {
      path: "/dashboard",
      element: <Layout />,
      children: [
        { path: "dashboard", element: <DashboardPage /> },
        { path: "node", element: <NodePage /> },
        { path: "withdraw", element: <WithdrawPage /> },
        { path: "admin", element: <AdminPage /> },
        { path: "nodez-config", element: <NodezConfigPage /> },
        { path: "approve-withdrawal", element: <ApproveWithdrawalPage /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
