import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home'
import Image from './Components/Images/Images'
const myRouter=createBrowserRouter([

  {
    path:'/',
    element:<Home />


  },
  {
    path:'/Images',
    element:<Image />

  }

])
function App() {
  return (

    <>
    <RouterProvider
      router={myRouter}>
    </RouterProvider>

    </>
  );
}

export default App;
