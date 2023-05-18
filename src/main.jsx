import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
import '../public/css/styles.css'
import App from './App.jsx'

// const router = createBrowserRouter([
//   { path: '/', element: <HomePage/> },
//   { path: '/HomePage', element: <HomePage/> },
//   { path: '/IniciarSesion', element: <HomePage/> }
// ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    
  {/* //   <RouterProvider router={router} /> */}
  </React.StrictMode>,
  
)