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
import AuthProvider from './context/AuthProvider.jsx'
import PrivateRoute from './routes/PrivateRoute.jsx'
import TipDetails from './pages/TipDetails.jsx'
import UpdateTip from './pages/UpdateTip.jsx'

const router=createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    Component: MainLayout,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/explore-gardners",
        element: <ExploreGardners />,
      },
      {
        path: "/browse-tips",
        loader: ()=> fetch('http://localhost:3000/sharetips'),
        element: <BrowseTips />,
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <TipDetails />
          </PrivateRoute>
        )
      },
      {
        path: "/share-tip",
        element: (
          <PrivateRoute>
            <ShareTip />
          </PrivateRoute>
        )
      },
      {
        path: "/my-tips",
        element:(
          <PrivateRoute>
            <MyTips />
          </PrivateRoute>
        )
      },
      {
        path: "/update-tip/:id",
        element:(
          <PrivateRoute>
            <UpdateTip />
          </PrivateRoute>
        )
      },
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
