import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import CienciaInnovacionPage from './pages/CienciaInnovacionPage'
import GestionTecnologiaPage from './pages/GestionTecnologiaPage'
import HomePage from './pages/HomePage'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="gestion-tecnologia" element={<GestionTecnologiaPage />} />
        <Route path="ciencia-innovacion" element={<CienciaInnovacionPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}
