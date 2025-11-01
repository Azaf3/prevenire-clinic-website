import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { 
  MapPin, 
  Phone, 
  Clock, 
  Mail,
  MessageCircle,
  Instagram,
  Send,
  CheckCircle,
  ExternalLink,
  Calendar,
  Users,
  Heart
} from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [showSuccess, setShowSuccess] = useState(false)

  useEffect(() => {
    document.title = 'Contato - Prevenire'
    document.querySelector('meta[name="description"]')?.setAttribute('content', 
      'Entre em contato com a Prevenire. Estamos localizados em Gama-DF, Edifício Central. Agendamento via WhatsApp (61) 98467-0305.'
    )
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simular envio de formulário
    setShowSuccess(true)
    setTimeout(() => {
      setShowSuccess(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })
    }, 3000)
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Localização',
      details: ['Gama-DF', 'Edifício Central, 2º andar'],
      action: {
        text: 'Ver no Maps',
        link: 'https://g.co/kgs/Y6qbwyv'
      }
    },
    {
      icon: Phone,
      title: 'Telefone',
      details: ['(61) 98467-0305'],
      action: {
        text: 'Ligar Agora',
        link: 'tel:+5561984670305'
      }
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      details: ['Agendamento exclusivo', 'Resposta rápida'],
      action: {
        text: 'Enviar Mensagem',
        link: 'https://wa.me/5561984670305'
      }
    },
    {
      icon: Instagram,
      title: 'Instagram',
      details: ['@prevenire_', 'Dicas e novidades'],
      action: {
        text: 'Seguir',
        link: 'https://instagram.com/prevenire_'
      }
    }
  ]

  const hours = [
    { day: 'Segunda à Sexta', time: '8:00 - 18:00' },
    { day: 'Sábado', time: '8:00 - 12:00' },
    { day: 'Domingo', time: 'Fechado' }
  ]

  const faqs = [
    {
      question: 'Como faço para agendar uma consulta?',
      answer: 'Todos os agendamentos são feitos exclusivamente via WhatsApp. Entre em contato conosco pelo número (61) 98467-0305 e nossa equipe te ajudará a encontrar o melhor horário.'
    },
    {
      question: 'Qual é a localização da clínica?',
      answer: 'Estamos localizados em Gama-DF, no Edifício Central, 2º andar. Você pode encontrar nossa localização exata através do link do Google Maps.'
    },
    {
      question: 'Vocês atendem emergências?',
      answer: 'Para emergências psiquiátricas, recomendamos procurar o hospital mais próximo ou ligar para o CVV (Centro de Valorização da Vida) no 188.'
    },
    {
      question: 'Qual o tempo de resposta no WhatsApp?',
      answer: 'Respondemos mensagens de segunda a sexta das 8h às 18h, e aos sábados das 8h às 12h. Fora desses horários, responderemos no próximo horário comercial.'
    }
  ]

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Entre em <span className="text-gradient">Contato</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Estamos aqui para ajudar você em sua jornada de bem-estar mental. 
              Entre em contato conosco e dê o primeiro passo rumo à sua transformação.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card p-6 text-center group hover:border-primary-200"
              >
                <div className="flex justify-center mb-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary-100 rounded-full group-hover:bg-primary-500 transition-colors duration-300">
                    <info.icon className="w-6 h-6 text-primary-500 group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {info.title}
                </h3>
                
                <div className="space-y-1 mb-4">
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-gray-600 text-sm">
                      {detail}
                    </p>
                  ))}
                </div>

                <motion.a
                  href={info.action.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary-600 text-sm font-medium hover:text-primary-700 transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  {info.action.text}
                  <ExternalLink className="w-4 h-4 ml-1" />
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="card p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Envie uma Mensagem
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Nome Completo
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                        placeholder="Seu nome"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Telefone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                        placeholder="(61) 9 9999-9999"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      E-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Assunto
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    >
                      <option value="">Selecione um assunto</option>
                      <option value="agendamento">Agendamento de Consulta</option>
                      <option value="informacoes">Informações sobre Serviços</option>
                      <option value="convenio">Convênios e Pagamentos</option>
                      <option value="outros">Outros</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                      placeholder="Descreva como podemos ajudar você..."
                    ></textarea>
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full btn-primary flex items-center justify-center"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={showSuccess}
                  >
                    {showSuccess ? (
                      <>
                        <CheckCircle className="w-5 h-5 mr-2" />
                        Mensagem Enviada!
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Enviar Mensagem
                      </>
                    )}
                  </motion.button>
                </form>

                {showSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg"
                  >
                    <p className="text-green-700 text-sm">
                      Sua mensagem foi enviada com sucesso! Entraremos em contato em breve.
                    </p>
                  </motion.div>
                )}

                <div className="mt-6 p-4 bg-primary-50 border border-primary-200 rounded-lg">
                  <p className="text-primary-700 text-sm">
                    <strong>Preferência de agendamento:</strong> Para um atendimento mais rápido, 
                    recomendamos entrar em contato diretamente pelo WhatsApp.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Map and Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Map */}
              <div className="card p-0 overflow-hidden">
                <div className="h-64 bg-gradient-to-br from-primary-200 to-primary-400 flex items-center justify-center">
                  <div className="text-center text-white">
                    <MapPin className="w-12 h-12 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Nossa Localização</h3>
                    <p className="text-primary-100">Gama-DF, Edifício Central, 2º andar</p>
                    <a
                      href="https://g.co/kgs/Y6qbwyv"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-4 bg-white text-primary-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                    >
                      Abrir no Google Maps
                    </a>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="card p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-primary-500" />
                  Horários de Funcionamento
                </h3>
                <div className="space-y-3">
                  {hours.map((hour, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                      <span className="text-gray-700">{hour.day}</span>
                      <span className="text-gray-900 font-medium">{hour.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="card p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Ações Rápidas
                </h3>
                <div className="space-y-3">
                  <motion.a
                    href="https://wa.me/5561984670305"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded-lg hover:bg-green-100 transition-colors group"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center">
                      <MessageCircle className="w-5 h-5 text-green-600 mr-3" />
                      <span className="text-green-700 font-medium">Agendar pelo WhatsApp</span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-green-600 group-hover:translate-x-1 transition-transform" />
                  </motion.a>

                  <motion.a
                    href="tel:+5561984670305"
                    className="flex items-center justify-between p-3 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 transition-colors group"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 text-blue-600 mr-3" />
                      <span className="text-blue-700 font-medium">Ligar Agora</span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-blue-600 group-hover:translate-x-1 transition-transform" />
                  </motion.a>

                  <motion.a
                    href="https://instagram.com/prevenire_"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 bg-pink-50 border border-pink-200 rounded-lg hover:bg-pink-100 transition-colors group"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center">
                      <Instagram className="w-5 h-5 text-pink-600 mr-3" />
                      <span className="text-pink-700 font-medium">Seguir no Instagram</span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-pink-600 group-hover:translate-x-1 transition-transform" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Perguntas <span className="text-gradient">Frequentes</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-500 to-primary-600 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pronto para dar o primeiro passo?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Nossa equipe está aqui para te acompanhar em sua jornada de bem-estar mental. 
              Entre em contato conosco agora mesmo.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://wa.me/5561984670305"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-white text-primary-600 font-bold text-lg py-4 px-8 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle className="w-6 h-6 mr-2" />
                WhatsApp
              </motion.a>

              <motion.a
                href="tel:+5561984670305"
                className="inline-flex items-center bg-transparent border-2 border-white text-white font-bold text-lg py-4 px-8 rounded-full hover:bg-white hover:text-primary-600 transition-all duration-300 transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-6 h-6 mr-2" />
                Ligar
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Contact