import { BrowserRouter } from 'react-router-dom'
import NavBar from './components/layout/NavBar'
import Footer from './components/layout/Footer'
import AppRoutes from './routes/AppRoutes'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <NavBar />
      <main className="min-h-screen">
        <AppRoutes />
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
