import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Heart, 
  MapPin, 
  Phone, 
  Instagram, 
  Mail,
  Clock
} from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center mb-4">
              <img 
                src="/images/logo-principal-lado_120px40.png?v=3" 
                alt="Prevenire Logo" 
                className="h-8 w-auto bg-transparent"
                style={{ backgroundColor: 'transparent' }}
              />
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Cuidado preventivo para sua saúde mental. Nossa equipe de psicanalistas 
              e terapeutas está aqui para te ajudar em sua jornada de bem-estar emocional.
            </p>
            <p className="text-primary-400 font-medium">
              "Cuidado preventivo para sua saúde mental!"
            </p>
          </motion.div>

          {/* Links Rápidos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <nav className="space-y-2">
              <Link to="/" className="block text-gray-300 hover:text-primary-400 transition-colors">
                Início
              </Link>
              <Link to="/equipe" className="block text-gray-300 hover:text-primary-400 transition-colors">
                Nossa Equipe
              </Link>
              <Link to="/servicos" className="block text-gray-300 hover:text-primary-400 transition-colors">
                Serviços
              </Link>
              <Link to="/blog" className="block text-gray-300 hover:text-primary-400 transition-colors">
                Blog
              </Link>
              <Link to="/contato" className="block text-gray-300 hover:text-primary-400 transition-colors">
                Contato
              </Link>
            </nav>
          </motion.div>

          {/* Contato e Localização */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Gama-DF</p>
                  <p className="text-gray-300">Edifício Central, 2º andar</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a 
                  href="https://wa.me/5561984670305"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-primary-400 transition-colors"
                >
                  (61) 98467-0305
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <p className="text-gray-300">Agendamento via WhatsApp</p>
              </div>

              <div className="flex items-center space-x-3">
                <Instagram className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a 
                  href="https://instagram.com/prevenire_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-primary-400 transition-colors"
                >
                  @prevenire_
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Linha divisória e copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Prevenire. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a 
                href="https://wa.me/5561984670305"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
              >
                Política de Privacidade
              </a>
              <a 
                href="https://wa.me/5561984670305"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
              >
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer