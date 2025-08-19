import { BrowserRouter } from 'react-router-dom';
import AppRouter from "./routes/AppRouter";
import { UserProvider } from './context/UserContext';
import { ToastContainer, toast } from 'react-toastify';

function App() {
    return (
        <UserProvider>
            <BrowserRouter>
                <AppRouter />
            </BrowserRouter>
        </UserProvider>
    )
}

export default App
