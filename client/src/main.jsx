import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Login from './pages/auth/Login.jsx'
import Home from './pages/home/Home.jsx'
import Register from './pages/auth/Register.jsx'
import { Provider } from 'react-redux'
import { persistor, store } from './store/store.js'
import ProtectedRoute from './api/utilities/ProtectedRoute.jsx'
import { PersistGate } from 'redux-persist/integration/react'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: 
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
      <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </StrictMode>,
)
