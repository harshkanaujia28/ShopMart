import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client';
import './index.css'
import ShopContextProvider from './Context/ShopContext'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <ShopContextProvider>
    <App />
    </ShopContextProvider>,
)



// import reportWebVitals from './reportWebVitals';




