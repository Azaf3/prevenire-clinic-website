import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Heart, 
  Shield, 
  Users, 
  Clock,
  Star,
  Quote,
  ArrowRight,
  Brain,
  Smile,
  Target
} from 'lucide-react'

const Home = () => {
  useEffect(() => {
    document.title = 'Prevenire - Cuidado preventivo para sua saúde mental'
    document.querySelector('meta[name="description"]')?.setAttribute('content', 
      'Prevenire - Clínica de saúde mental em Gama-DF. Cuidado preventivo para sua saúde mental com psicanalistas e terapeutas especializados.'
    )
  }, [])

  const features = [
    {
      icon: Brain,
      title: 'Cuidado Preventivo',
      description: 'Focamos na prevenção ao adoecimento mental, promovendo bem-estar e qualidade de vida.'
    },
    {
      icon: Users,
      title: 'Equipe Especializada',
      description: 'Psicanalistas e terapeutas qualificados para atender suas necessidades específicas.'
    },
    {
      icon: Heart,
      title: 'Atendimento Humanizado',
      description: 'Ambiente acolhedor e seguro para sua jornada de autoconhecimento e cura.'
    },
    {
      icon: Clock,
      title: 'Agendamento Fácil',
      description: 'Agende sua consulta rapidamente através do WhatsApp, sem complicações.'
    }
  ]

  const testimonials = [
    {
      name: 'Maria Silva',
      text: 'A Prevenire mudou minha vida. O atendimento é excepcional e me sinto muito acolhida pela equipe.',
      rating: 5
    },
    {
      name: 'João Santos',
      text: 'Excelentes profissionais! O cuidado preventivo me ajudou a desenvolver ferramentas para lidar com o estresse.',
      rating: 5
    },
    {
      name: 'Ana Costa',
      text: 'Ambiente muito acolhedor e profissionais altamente qualificados. Recomendo a todos.',
      rating: 5
    }
  ]

  const stats = [
    { number: '500+', label: 'Pacientes Atendidos' },
    { number: '3+', label: 'Anos de Experiência' },
    { number: '2', label: 'Profissionais Especializados' },
    { number: '100%', label: 'Foco no Bem-estar' }
  ]

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-white">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container-custom section-padding text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-8">
              <img 
                src="/images/logo-hero-160x160.png?v=3" 
                alt="Prevenire - Cuidado preventivo para sua saúde mental" 
                className="w-32 h-32 drop-shadow-2xl bg-transparent"
                style={{ backgroundColor: 'transparent' }}
              />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="text-gradient">Cuidado preventivo</span>
              <br />
              para sua saúde mental
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Na Prevenire, acreditamos que prevenir é sempre melhor que remediar. 
              Nossa equipe especializada está aqui para te acompanhar em sua jornada 
              de bem-estar emocional e autoconhecimento.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://wa.me/5561984670305"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-lg px-8 py-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Agende sua consulta
              </motion.a>
              
              <motion.a
                href="#sobre"
                className="btn-secondary text-lg px-8 py-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Saiba Mais
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-6 h-10 border-2 border-primary-300 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary-500 rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary-500 text-white">
        <div className="container-custom section-padding py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-primary-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Por que escolher a <span className="text-gradient">Prevenire?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos um cuidado integral e personalizado, focado na prevenção 
              e no desenvolvimento de ferramentas para uma vida mais equilibrada.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card p-6 text-center group"
              >
                <div className="flex justify-center mb-4">
                  <div className="flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full group-hover:bg-primary-500 transition-colors duration-300">
                    <feature.icon className="w-8 h-8 text-primary-500 group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Sobre a <span className="text-gradient">Prevenire</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                A Prevenire nasceu da convicção de que a saúde mental deve ser tratada 
                com a mesma importância que a saúde física. Nosso foco está na prevenção 
                ao adoecimento mental e na promoção do bem-estar emocional.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Localizada no coração de Gama-DF, nossa clínica oferece um ambiente 
                acolhedor e seguro, onde cada paciente é tratado com respeito, 
                compreensão e cuidado individualizado.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Target className="w-6 h-6 text-primary-500" />
                  <span className="text-gray-700 font-medium">Missão: Promover saúde mental preventiva</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Smile className="w-6 h-6 text-primary-500" />
                  <span className="text-gray-700 font-medium">Visão: Bem-estar emocional para todos</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-6 h-6 text-primary-500" />
                  <span className="text-gray-700 font-medium">Valores: Ética, acolhimento e excelência</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Nossa Localização</h3>
                <div className="space-y-3">
                  <p className="flex items-center">
                    <span className="font-medium">Gama-DF</span>
                  </p>
                  <p className="flex items-center">
                    <span>Edifício Central, 2º andar</span>
                  </p>
                  <p className="flex items-center">
                    <span>Agendamento: (61) 98467-0305</span>
                  </p>
                </div>
                
                <a
                  href="https://g.co/kgs/Y6qbwyv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-6 bg-white text-primary-600 font-medium py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Ver no Google Maps
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              O que nossos <span className="text-gradient">pacientes dizem</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Depoimentos reais de pessoas que encontraram na Prevenire 
              o apoio necessário para sua jornada de bem-estar mental.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card p-6"
              >
                <div className="flex items-center mb-4">
                  <Quote className="w-8 h-8 text-primary-500 mr-2" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4 italic">
                  "{testimonial.text}"
                </p>
                
                <div className="font-medium text-gray-900">
                  {testimonial.name}
                </div>
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
              Pronto para cuidar da sua saúde mental?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Agende sua consulta agora mesmo pelo WhatsApp e dê o primeiro passo 
              rumo ao seu bem-estar emocional.
            </p>
            
            <motion.a
              href="https://wa.me/5561984670305"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-primary-600 font-bold text-lg py-4 px-8 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Agendar Consulta
              <ArrowRight className="w-6 h-6 ml-2" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home