import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Contact from './components/Contact.jsx'
import About from './components/About.jsx'
import Layout from './components/Layout.jsx'
import Artwork from './components/Artwork.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

const route = createBrowserRouter([
    {
        path:'/',
        element: <Layout />,
        children:[
            {
                path:'/',
                element: <Artwork />
            },
            {
                path:'/artwork',
                element: <App />
            },
            {
                path:'/about',
                element: <About />
            },
            {
                path:'/contact',
                element: <Contact />
            }

        ]
    }

])

    createRoot(document.getElementById('root')).render(
    <StrictMode>
      <RouterProvider router = {route}/>
    </StrictMode>,
    )