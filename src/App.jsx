import { Routes, Route } from 'react-router'
import Inicio from './pages/Inicio'
import Favoritos from './pages/Favoritos'
import './styles.css'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/favoritos" element={<Favoritos />} />
    </Routes>
  )
}

export default App
