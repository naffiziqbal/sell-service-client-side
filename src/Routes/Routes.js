import Products from "../Components/Products/Products";
import Login from "../Components/UserData/Login";
import Register from "../Components/UserData/Register";

const { createBrowserRouter } = require("react-router-dom");
const { default: Error } = require("../Components/Shared/Error/Error");
const { default: Home } = require("../Components/Home/Home/Home");
const { default: Main } = require("../Layout/Main");

export const router = createBrowserRouter([{
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
            element: <Register/>
        },
        {
            path: '/products/:category',
            element: <Products />,
            loader: ({ params }) => fetch(`http://localhost:5000/product/${params.category}`)
        }
    ]
}])
