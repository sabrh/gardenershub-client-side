import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from './layouts/MainLayout.jsx'
import Home from './pages/Home.jsx'
import ExploreGardners from './pages/ExploreGardners.jsx'
import BrowseTips from './pages/BrowseTips.jsx'
import ShareTip from './pages/ShareTip.jsx'
import MyTips from './pages/MyTips.jsx'
import Login from './auth/Login.jsx'
import Signup from './auth/Signup.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import PrivateRoute from './components/PrivateRoute.jsx'

const router=createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/signup",
        Component: Signup,
      },
      {
        path: "/explore-gardners",
        Component: ExploreGardners,
      },
      {
        path: "/browse-tips",
        Component: BrowseTips,
      },
      {
        path: "/share-tip",
        Component: ShareTip,
      },
      {
        path: "/my-tips",
        Component: MyTips,
      },
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
