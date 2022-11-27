import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Routes';

function App() {
  return (
    <div className="App text-white container mx-auto">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
