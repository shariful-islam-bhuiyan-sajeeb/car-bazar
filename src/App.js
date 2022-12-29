import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { Children } from 'react';
import { router } from './componets/Routes/Routes/Routes';

function App() {
  return (
    <div className='w-11/12 mx-auto' >
      <RouterProvider router={router}>
        
      </RouterProvider>
    </div>
  );
}

export default App;
