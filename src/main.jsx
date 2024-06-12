import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'



import { GlobalStyle, theme, ThemeProvider } from '@empuls/dsm';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <App />
    <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>,

)
