import { Navigate, Route, Routes } from 'react-router-dom'
import { TitlePage } from '@/pages/TitlePage'
import { AboutPage } from '@/pages/AboutPage'
import { ContactPage } from '@/pages/ContactPage'
import { NavBar } from '@/Components/NavBar'

function App() {
  return (
    <main className="coming-soon-stage">
      <div className="shape-left" aria-hidden="true" />
      <div className="shape-center" aria-hidden="true" />

      <div className="page-shell">
        <NavBar />

        <Routes>
          <Route path="/" element={<TitlePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </main>
  )
}

export default App
