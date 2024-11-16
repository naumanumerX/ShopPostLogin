//import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import Image from "./Components/Images/Images";
import Layout from "./Layout/Layout";
import NotFound from "./Components/NotFound/NotFound";
import Login from "./Components/Login/Login";
import Profile from "./Components/Profile/Profile";
import "animate.css";
import Protected from "./Components/Protected/Protected";

// const myRouter=createBrowserRouter([

//   {
//     path:'/',
//     element: <Layout> <Home /></Layout>

//   },
//   {
//     path:'/Images',
//     element: <Layout> <Image /></Layout>

//   },
//   {
//     path:'/Login',
//     element: <Layout> <Login /></Layout>
//   },
//   {
//     path:'/Profile',
//     element: <Layout> <Profile /></Layout>
//   }
//   ,
//   {
//   path:'/*',
//   element: <Layout> <NotFound /></Layout>
//   }

// ])
function App() {
  return (
    <>
      {/* <RouterProvider
      router={myRouter}>
    </RouterProvider> */}
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
              
                <Home />
              </Layout>
            }
          />
          <Route
            path="/Images"
            element={
              <Layout>
              
                <Image />
              </Layout>
            }
          />
          <Route element={<Protected />}>
          <Route
            path="/Profile"
            element={
              <Layout>
               
                <Profile />
              </Layout>
            }
          />
          </Route>
           <Route
            path="/Login"
            element={
              <Layout>
               
                <Login />
              </Layout>
            }
          />
          

          <Route
            path="/*"
            element={
              <Layout>
               
                <NotFound />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
