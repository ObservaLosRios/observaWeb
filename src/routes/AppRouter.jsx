import { Routes, Route } from 'react-router-dom';
import PublicLayout from '../layouts/PublicLayout';
import PrivateLayout from '../layouts/PrivateLayout';
import Home from '../pages/Home';
import { Noticias } from '../pages/Noticias';
import Responsables from '../pages/Responsables';
import Ejecutores from '../pages/Ejecutores';
import { Participa } from '../pages/Participa';
import Gobernanza from '../pages/Gobernanza';
import { NotFound } from '../pages/NotFound';
import General from '../pages/General';
import Politica from '../pages/Politica';   

import { Plataforma } from '../pages/plataforma/Plataforma';
import Infogram from '../pages/plataforma/Infogram';
import { Mapas } from '../pages/plataforma/Mapas';
import { Fichas } from '../pages/plataforma/Fichas';
import { Informacion } from '../pages/plataforma/Informacion';
import Plan from '../components/molecules/Plan/Plan';

import { PrivateRoute } from './PrivateRoute';
import LoginLayout from '../layouts/LoginLayout';
import Login from '../pages/Login';
import { IndicadoresLineamiento } from '../pages/plataforma/IndicadoresLineamiento';
import IndicadoresIniciativa from '../pages/plataforma/IndicadoresIniciativa';
import IndicadoresEntorno from '../pages/plataforma/IndicadoresEntorno';
import IndicadoresGeorreferenciados from '../pages/plataforma/IndicadoresGeorreferenciados';
import { PlanesProvider } from '../context/PlanesContext';

const AppRouter = () => (
    <Routes>
        <Route path="/" element={<PublicLayout />}>
            <Route index element={<Home />} />
            <Route path="proyecto/general" element={<General />} />
            <Route path="proyecto/politica" element={<Politica />} />
            <Route path="proyecto/gobernanza" element={<Gobernanza />} />
            <Route path="instituciones/responsables" element={<Responsables />} />
            <Route path="instituciones/ejecutores" element={<Ejecutores />} />
            <Route path="noticias" element={<Noticias />} />
            <Route path="participa" element={<Participa />} />
        </Route>

        {/* Plataforma sin protección de login */}
        <Route path="/plataforma" element={
            <PlanesProvider>
                <PrivateLayout />
            </PlanesProvider>
        }>
            <Route index element={<Plataforma />} />
            <Route path='infogram' element={<Infogram />} />
            <Route path="mapas" element={<Mapas />} />
            <Route path="fichas" element={<Fichas />} />
            <Route path="informacion" element={<Informacion />} />
            <Route path="indicadoreslineamiento" element={<IndicadoresLineamiento />} />
            <Route path="indicadoresentorno" element={<IndicadoresEntorno />} />
            <Route path="indicadoresiniciativa" element={<IndicadoresIniciativa />} />
            <Route path="indicadoresgeorreferenciados" element={<IndicadoresGeorreferenciados />} />
            <Route path="planes/:id" element={<Plan />} />
            
            {/* Login dentro de plataforma */}
            <Route path='login' element={<LoginLayout />}>
                <Route index element={<Login />} />
            </Route>

        </Route>
        
        <Route path="*" element={<NotFound />} />
    </Routes>

)

export default AppRouter;