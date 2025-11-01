import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  GraduationCap, 
  Award, 
  Heart, 
  Users,
  Clock,
  Star,
  Quote,
  MessageCircle
} from 'lucide-react'

const Team = () => {
  useEffect(() => {
    document.title = 'Nossa Equipe - Prevenire'
    document.querySelector('meta[name="description"]')?.setAttribute('content', 
      'Conheça nossa equipe de psicanalistas e terapeutas especializados da Prevenire. Gildazio Junior e Thauanne Ferreira - profissionais qualificados em saúde mental.'
    )
  }, [])

  const team = [
    {
      name: 'Gildazio Junior',
      role: 'Psicanalista, Terapeuta e Psicólogo',
      image: '/images/gildazio.png?t=' + Date.now(),
      specialties: [
        'Psicanálise Clínica',
        'Terapia Individual',
        'Psicologia Clínica',
        'Orientação Familiar'
      ],
      education: [
        'Graduação em Psicologia',
        'Formação em Psicanálise',
        'Especialização em Terapia Cognitivo-Comportamental'
      ],
      experience: '8+ anos de experiência',
      approach: 'Acredito que cada pessoa possui recursos internos únicos para superar desafios. Minha abordagem combina técnicas psicanalíticas com métodos terapêuticos modernos, sempre respeitando o tempo e as necessidades individuais de cada paciente.',
      whatsapp: 'https://wa.me/5561984670305?text=Olá, gostaria de agendar uma consulta com Gildazio Junior'
    },
    {
      name: 'Thauanne Ferreira',
      role: 'Psicanalista, Terapeuta e Psicóloga',
      image: '/images/thauanne.png?t=' + Date.now(),
      specialties: [
        'Psicanálise Clínica',
        'Terapia de Casal',
        'Psicologia Feminina',
        'Transtornos de Ansiedade'
      ],
      education: [
        'Graduação em Psicologia',
        'Formação em Psicanálise',
        'Especialização em Terapia Familiar'
      ],
      experience: '6+ anos de experiência',
      approach: 'Trabalho com uma escuta acolhedora e sem julgamentos, criando um espaço seguro onde meus pacientes podem explorar seus sentimentos e pensamentos. Acredito no poder transformador da palavra e no potencial de cada pessoa para encontrar seu caminho.',
      whatsapp: 'https://wa.me/5561984670305?text=Olá, gostaria de agendar uma consulta com Thauanne Ferreira'
    }
  ]

  const achievements = [
    {
      icon: Users,
      title: '500+ Pacientes',
      description: 'Atendidos com sucesso'
    },
    {
      icon: Star,
      title: '100% Satisfação',
      description: 'Índice de aprovação'
    },
    {
      icon: Clock,
      title: '1000+ Horas',
      description: 'De formação continuada'
    },
    {
      icon: Award,
      title: 'Certificações',
      description: 'Reconhecidas nacionalmente'
    }
  ]

  const testimonials = [
    {
      text: 'O Gildazio tem uma abordagem muito humana e acolhedora. Me ajudou muito a entender e lidar com meus sentimentos.',
      author: 'Paciente G.J.'
    },
    {
      text: 'A Thauanne é uma profissional excepcional. Sua dedicação e conhecimento fizeram toda a diferença no meu processo terapêutico.',
      author: 'Paciente T.F.'
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
              Nossa <span className="text-gradient">Equipe</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Conheça os profissionais qualificados e experientes que fazem da Prevenire 
              um local de cuidado, acolhimento e transformação para sua saúde mental.
            </p>
          </motion.div>

          {/* Achievements */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-3">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary-100 rounded-full">
                    <achievement.icon className="w-6 h-6 text-primary-500" />
                  </div>
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-1">{achievement.title}</h3>
                <p className="text-gray-600 text-sm">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-20">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Image */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative">
                    <div className="aspect-[3/4] bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl overflow-hidden shadow-2xl">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                        onLoad={(e) => {
                          console.log(`✅ Imagem carregada: ${member.name} - ${member.image}`)
                          e.target.style.display = 'block'
                          e.target.nextSibling.style.display = 'none'
                        }}
                        onError={(e) => {
                          console.log(`❌ Erro ao carregar: ${member.name} - ${member.image}`)
                          e.target.style.display = 'none'
                          e.target.nextSibling.style.display = 'flex'
                        }}
                      />
                      <div className="w-full h-full bg-gradient-to-br from-primary-300 to-primary-500 flex items-center justify-center" style={{display: 'none'}}>
                        <div className="text-center text-white">
                          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-4 mx-auto">
                            <Heart className="w-12 h-12 text-primary-500" />
                          </div>
                          <p className="text-lg font-medium">{member.name}</p>
                          <p className="text-primary-100">{member.role}</p>
                          <p className="text-xs text-primary-200 mt-2">Tentando carregar: {member.image}</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Floating Cards */}
                    <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
                      <div className="flex items-center space-x-2">
                        <GraduationCap className="w-5 h-5 text-primary-500" />
                        <span className="text-sm font-medium text-gray-700">{member.experience}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                        {member.name}
                      </h2>
                      <p className="text-xl text-primary-600 font-medium">
                        {member.role}
                      </p>
                    </div>

                    <p className="text-gray-600 leading-relaxed">
                      {member.approach}
                    </p>

                    {/* Specialties */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        Especialidades
                      </h3>
                      <div className="grid grid-cols-2 gap-2">
                        {member.specialties.map((specialty, i) => (
                          <div key={i} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                            <span className="text-gray-700 text-sm">{specialty}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Education */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        Formação
                      </h3>
                      <div className="space-y-2">
                        {member.education.map((edu, i) => (
                          <div key={i} className="flex items-center space-x-2">
                            <Award className="w-4 h-4 text-primary-500" />
                            <span className="text-gray-700 text-sm">{edu}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <motion.a
                      href={member.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center btn-primary"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Agendar com {member.name.split(' ')[0]}
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Depoimentos sobre nossa <span className="text-gradient">Equipe</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card p-8"
              >
                <Quote className="w-8 h-8 text-primary-500 mb-4" />
                <p className="text-gray-600 mb-4 italic text-lg">
                  "{testimonial.text}"
                </p>
                <div className="font-medium text-gray-900">
                  — {testimonial.author}
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
              Pronto para começar sua jornada?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Nossa equipe está aqui para te acompanhar em cada passo do seu 
              processo de autoconhecimento e bem-estar mental.
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
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Team