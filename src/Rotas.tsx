import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './frontend/paginas/Home';
import CadastroUsuario from './frontend/paginas/CadastroUsuario';
import LoginUsuario from './frontend/paginas/LoginUsuario';

export default function Rotas() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />}/>
                    <Route path='/login' element={<LoginUsuario />}/>
                    <Route path='/cadastrar' element={<CadastroUsuario />}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}