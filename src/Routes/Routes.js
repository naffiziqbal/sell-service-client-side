import Adminroutes from "../Components/Dashboard/Adminroutes/Adminroutes";
import Allusers from "../Components/Dashboard/Adminroutes/Allusers";
import Dashboard from "../Components/Dashboard/Dashboard";
import Sellers from "../Components/Dashboard/Sellers/Sellers";
import Products from "../Components/Products/Products";
import Login from "../Components/UserData/Login";
import Register from "../Components/UserData/Register";
import DashboardLayOut from "../Layout/DashboardLayOut";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");
const { default: Error } = require("../Components/Shared/Error/Error");
const { default: Home } = require("../Components/Home/Home/Home");
const { default: Main } = require("../Layout/Main");

export const router = createBrowserRouter(

    [
        {
            path: '/',
            element: <Main />,
            children: [
                {
                    path: '/',
                    element: <Home />
                },
                {
                    path: '/login',
                    element: <Login />
                },
                {
                    path: '/register',
                    element: <Register />
                },
                {
                    path: '/products/:category',
                    element:
                        <PrivateRoute>
                            <Products />
                        </PrivateRoute>,
                    loader: ({ params }) => fetch(`http://localhost:5000/product/${params.category}`)
                }
            ]
        },
        {
            path: '/dashboard',
            element:
                <PrivateRoute>
                    <DashboardLayOut>
                        <Dashboard />
                    </DashboardLayOut>
                </PrivateRoute>,
            children:
                [

                    {
                        path: '/dashboard',
                        element: <Dashboard />
                    },
                    {
                        path: '/dashboard/admin/users',
                        element:
                            <Adminroutes>
                                <Allusers />
                            </Adminroutes>

                    },
                    {
                        path: '/dashboard/admin/:sellers',
                        element:
                            <Adminroutes>
                                <Sellers />
                            </Adminroutes>

                    },
                ]
        }

    ])
