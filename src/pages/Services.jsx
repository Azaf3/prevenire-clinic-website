import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  User, 
  Users, 
  Heart, 
  Brain,
  Shield,
  Clock,
  CheckCircle,
  MessageCircle,
  ArrowRight,
  Target,
  Smile,
  Zap
} from 'lucide-react'

const Services = () => {
  useEffect(() => {
    document.title = 'Nossos Serviços - Prevenire'
    document.querySelector('meta[name="description"]')?.setAttribute('content', 
      'Conheça os serviços de saúde mental da Prevenire: terapia individual, terapia de casal, orientação familiar e prevenção ao adoecimento mental em Gama-DF.'
    )
  }, [])

  const services = [
    {
      icon: User,
      title: 'Terapia Individual',
      description: 'Atendimento personalizado focado nas suas necessidades específicas, promovendo autoconhecimento e bem-estar emocional.',
      features: [
        'Acompanhamento psicológico personalizado',
        'Técnicas de psicanálise e terapia cognitiva',
        'Desenvolvimento de estratégias de enfrentamento',
        'Espaço seguro para expressão e reflexão'
      ],
      duration: '50 minutos por sessão',
      frequency: 'Semanal ou quinzenal',
      price: 'Consulte valores',
      highlighted: true
    },
    {
      icon: Users,
      title: 'Terapia de Casal',
      description: 'Fortalecimento dos vínculos afetivos através de comunicação saudável e resolução de conflitos.',
      features: [
        'Melhoria da comunicação entre parceiros',
        'Resolução de conflitos relacionais',
        'Fortalecimento da intimidade emocional',
        'Desenvolvimento de projetos em comum'
      ],
      duration: '60 minutos por sessão',
      frequency: 'Semanal ou quinzenal',
      price: 'Consulte valores',
      highlighted: false
    },
    {
      icon: Heart,
      title: 'Orientação Familiar',
      description: 'Apoio especializado para famílias que enfrentam desafios relacionais e buscan harmonia no convívio.',
      features: [
        'Mediação de conflitos familiares',
        'Orientação para pais e responsáveis',
        'Fortalecimento dos vínculos familiares',
        'Desenvolvimento de comunicação efetiva'
      ],
      duration: '60 minutos por sessão',
      frequency: 'Quinzenal ou mensal',
      price: 'Consulte valores',
      highlighted: false
    },
    {
      icon: Shield,
      title: 'Prevenção ao Adoecimento Mental',
      description: 'Programa preventivo para identificar e trabalhar fatores de risco antes que se tornem problemas maiores.',
      features: [
        'Avaliação de fatores de risco',
        'Desenvolvimento de estratégias preventivas',
        'Fortalecimento da resiliência emocional',
        'Promoção de hábitos saudáveis'
      ],
      duration: '45 minutos por sessão',
      frequency: 'Mensal ou bimestral',
      price: 'Consulte valores',
      highlighted: false
    },
    {
      icon: Brain,
      title: 'Psicoterapia Psicanalítica',
      description: 'Processo terapêutico profundo baseado na psicanálise para compreensão dos aspectos inconscientes.',
      features: [
        'Análise profunda dos processos inconscientes',
        'Trabalho com traumas e memórias',
        'Desenvolvimento da personalidade',
        'Integração de aspectos psíquicos'
      ],
      duration: '50 minutos por sessão',
      frequency: 'Semanal',
      price: 'Consulte valores',
      highlighted: false
    },
    {
      icon: Smile,
      title: 'Orientação Emocional',
      description: 'Suporte para desenvolvimento de inteligência emocional e gestão de sentimentos no dia a dia.',
      features: [
        'Desenvolvimento da inteligência emocional',
        'Técnicas de regulação emocional',
        'Gestão de stress e ansiedade',
        'Fortalecimento da autoestima'
      ],
      duration: '45 minutos por sessão',
      frequency: 'Quinzenal',
      price: 'Consulte valores',
      highlighted: false
    }
  ]

  const specialties = [
    {
      icon: Target,
      title: 'Transtornos de Ansiedade',
      description: 'Tratamento especializado para ansiedade generalizada, síndrome do pânico e fobias.'
    },
    {
      icon: Brain,
      title: 'Depressão',
      description: 'Acompanhamento terapêutico para diferentes graus de episódios depressivos.'
    },
    {
      icon: Zap,
      title: 'Estresse e Burnout',
      description: 'Estratégias para lidar com estresse excessivo e prevenção da síndrome de burnout.'
    },
    {
      icon: Heart,
      title: 'Questões Relacionais',
      description: 'Apoio para dificuldades nos relacionamentos amorosos, familiares e sociais.'
    }
  ]

  const process = [
    {
      step: '01',
      title: 'Agendamento',
      description: 'Entre em contato via WhatsApp para agendar sua primeira consulta.'
    },
    {
      step: '02',
      title: 'Primeira Consulta',
      description: 'Avaliação inicial e compreensão das suas necessidades e objetivos.'
    },
    {
      step: '03',
      title: 'Plano Terapêutico',
      description: 'Desenvolvimento de um plano personalizado de acompanhamento.'
    },
    {
      step: '04',
      title: 'Acompanhamento',
      description: 'Sessões regulares focadas no seu bem-estar e desenvolvimento pessoal.'
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
              Nossos <span className="text-gradient">Serviços</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Oferecemos uma gama completa de serviços de saúde mental, 
              sempre focados na prevenção e no cuidado integral da sua qualidade de vida.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`card p-8 relative ${
                  service.highlighted ? 'border-2 border-primary-500 transform scale-105' : ''
                }`}
              >
                {service.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Mais Procurado
                    </div>
                  </div>
                )}

                <div className="flex justify-center mb-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full">
                    <service.icon className="w-8 h-8 text-primary-500" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6 text-center">
                  {service.description}
                </p>

                <div className="space-y-3 mb-6">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-100 pt-6 space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Duração:</span>
                    <span className="text-gray-700 font-medium">{service.duration}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Frequência:</span>
                    <span className="text-gray-700 font-medium">{service.frequency}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Investimento:</span>
                    <span className="text-gray-700 font-medium">{service.price}</span>
                  </div>
                </div>

                <motion.a
                  href="https://wa.me/5561984670305"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full mt-6 text-center block"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Agendar Consulta
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossas <span className="text-gradient">Especialidades</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Temos experiência no tratamento de diversas questões relacionadas à saúde mental.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialties.map((specialty, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card p-6 text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary-100 rounded-full">
                    <specialty.icon className="w-6 h-6 text-primary-500" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {specialty.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {specialty.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Como <span className="text-gradient">Funciona</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Um processo simples e acolhedor para começar sua jornada de bem-estar.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center relative"
              >
                {/* Connection Line */}
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full">
                    <div className="h-0.5 bg-primary-200 transform translate-x-4"></div>
                  </div>
                )}

                <div className="flex justify-center mb-4">
                  <div className="flex items-center justify-center w-16 h-16 bg-primary-500 text-white rounded-full text-xl font-bold">
                    {step.step}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                
                <p className="text-gray-600">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-gray-50">
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Como posso agendar uma consulta?
              </h3>
              <p className="text-gray-600">
                Todos os agendamentos são feitos exclusivamente via WhatsApp. 
                Entre em contato conosco pelo número (61) 98467-0305 e nossa equipe 
                te ajudará a encontrar o melhor horário.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Qual a frequência ideal das sessões?
              </h3>
              <p className="text-gray-600">
                A frequência varia de acordo com suas necessidades específicas. 
                Geralmente recomendamos sessões semanais no início, podendo ser 
                ajustada conforme o progresso do tratamento.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="card p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Vocês atendem convênios?
              </h3>
              <p className="text-gray-600">
                Entre em contato conosco para verificar a disponibilidade de 
                atendimento pelo seu convênio. Temos flexibilidade para diferentes 
                formas de pagamento e condições especiais.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="card p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Qual a diferença entre os tipos de terapia?
              </h3>
              <p className="text-gray-600">
                Cada tipo de terapia é adequado para diferentes necessidades. 
                Na primeira consulta, avaliaremos qual abordagem é mais 
                apropriada para seu caso específico.
              </p>
            </motion.div>
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
              Escolha o serviço que melhor atende suas necessidades e dê o primeiro 
              passo rumo ao seu bem-estar emocional.
            </p>
            
            <motion.a
              href="https://wa.me/5561984670305"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-primary-600 font-bold text-lg py-4 px-8 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle className="w-6 h-6 mr-2" />
              Agendar Consulta
              <ArrowRight className="w-6 h-6 ml-2" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Services