const { createBrowserRouter } = require("react-router-dom");
const { default: Error } = require("../Components/Error/Error");
const { default: Home } = require("../Components/Home/Home/Home");
const { default: Main } = require("../Layout/Main");

export const router = createBrowserRouter([{
path : '/',
element : <Main/>,
errorElement : <Error/>,
children : [
{
    path: '/',
    element : <Home/>
}
]
}])
