import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Team from './pages/Team'
import Services from './pages/Services'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/equipe" element={<Team />} />
          <Route path="/servicos" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contato" element={<Contact />} />
        </Routes>
      </Layout>
      <WhatsAppButton />
    </div>
  )
}

export default App