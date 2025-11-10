import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'flowbite';
import './assets/css/index.css'
import App from './App.jsx'

// Inicializar tema antes de renderizar
const initTheme = () => {
    const theme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (theme === 'dark' || (!theme && prefersDark)) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
};

initTheme();

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>,
)
