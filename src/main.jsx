import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router/dom";
import { router } from './routes/routes';
import BookProvider from './context/BookContext';
import { ToastContainer } from 'react-toastify';






createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BookProvider>

      <RouterProvider router={router} />
      <ToastContainer className='mt-15'/>
      </BookProvider>
          
  </StrictMode>,
)
