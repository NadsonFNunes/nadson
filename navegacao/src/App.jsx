import { useContext } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import AuthContext from './contexts/AuthContext'
import Erro404 from './pages/Erro404'
import Home from './pages/Home'
import Login from './pages/Login'
import Perfil from './pages/Perfil'

export default function App() {
  const { logado } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Routes>
        {logado ?
          <>
            <Route path="/" element={<Layout />} >
              <Route index element={<Home  />} />
              <Route path="perfil/:id" element={<Perfil />} />            
            </Route>
          </>
          :
          <Route path="/login" element={<Login />} />
        }
        <Route path="*" element={<Erro404 />} />
      </Routes>
    </BrowserRouter>
  )
}
