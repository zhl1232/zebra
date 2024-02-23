import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {
  Home,
  About,
  Arts,
  CardDetail,
  Contact,
  Engineering,
  ErrorPage,
  Favorites,
  Math,
  Science,
  Shop,
  Technology
} from 'pages/index'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { store } from './app/store'
import { Provider } from 'react-redux'
import './styles.css'
import '@unocss/reset/normalize.css'
import 'virtual:uno.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // element: <App2 />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/arts',
        element: <Arts />
      },
      {
        path: '/:category/:id',
        element: <CardDetail />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/engineering',
        element: <Engineering />
      },
      {
        path: '/my-favorites',
        element: <Favorites />
      },
      {
        path: '/math',
        element: <Math />
      },
      {
        path: '/science',
        element: <Science />
      },
      {
        path: '/shop',
        element: <Shop />
      },
      {
        path: '/technology',
        element: <Technology />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root')!)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
