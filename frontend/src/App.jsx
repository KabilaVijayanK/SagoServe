import { BrowserRouter } from 'react-router-dom'
import NavBar from './components/layout/NavBar'
import Footer from './components/layout/Footer'
import AppRoutes from './routes/AppRoutes'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <main className="min-h-screen">
        <AppRoutes />
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
