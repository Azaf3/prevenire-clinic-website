import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Calendar, 
  Clock, 
  ArrowRight,
  Search,
  Tag,
  BookOpen,
  Heart,
  Brain,
  Smile,
  Users,
  Shield,
  Target
} from 'lucide-react'

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos')
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    document.title = 'Blog e Dicas - Prevenire'
    document.querySelector('meta[name="description"]')?.setAttribute('content', 
      'Blog da Prevenire com dicas e artigos sobre saúde mental, bem-estar emocional, prevenção ao adoecimento mental e qualidade de vida.'
    )
  }, [])

  const categories = [
    'Todos',
    'Saúde Mental',
    'Bem-estar',
    'Relacionamentos',
    'Autocuidado',
    'Prevenção'
  ]

  const posts = [
    {
      id: 1,
      title: '5 Sinais de que Você Precisa Cuidar da Sua Saúde Mental',
      excerpt: 'Reconhecer os primeiros sinais de que nossa saúde mental precisa de atenção é fundamental para prevenir problemas maiores.',
      category: 'Saúde Mental',
      date: '2024-10-15',
      readTime: '5 min',
      image: '/api/placeholder/400/250',
      author: 'Equipe Prevenire',
      featured: true,
      icon: Brain
    },
    {
      id: 2,
      title: 'Como Criar uma Rotina de Autocuidado Eficaz',
      excerpt: 'Desenvolva hábitos saudáveis que promovam seu bem-estar físico e emocional no dia a dia.',
      category: 'Autocuidado',
      date: '2024-10-12',
      readTime: '7 min',
      image: '/api/placeholder/400/250',
      author: 'Thauanne Ferreira',
      featured: false,
      icon: Heart
    },
    {
      id: 3,
      title: 'Ansiedade: Quando é Normal e Quando Buscar Ajuda',
      excerpt: 'Entenda a diferença entre ansiedade normal e transtorno de ansiedade, e saiba quando procurar ajuda profissional.',
      category: 'Saúde Mental',
      date: '2024-10-10',
      readTime: '6 min',
      image: '/api/placeholder/400/250',
      author: 'Gildazio Junior',
      featured: false,
      icon: Shield
    },
    {
      id: 4,
      title: 'Comunicação Não-Violenta nos Relacionamentos',
      excerpt: 'Aprenda técnicas de comunicação que fortalecem vínculos e reduzem conflitos em relacionamentos.',
      category: 'Relacionamentos',
      date: '2024-10-08',
      readTime: '8 min',
      image: '/api/placeholder/400/250',
      author: 'Thauanne Ferreira',
      featured: false,
      icon: Users
    },
    {
      id: 5,
      title: 'Mindfulness: O Poder do Momento Presente',
      excerpt: 'Descubra como a prática da atenção plena pode transformar sua qualidade de vida e reduzir o estresse.',
      category: 'Bem-estar',
      date: '2024-10-05',
      readTime: '6 min',
      image: '/api/placeholder/400/250',
      author: 'Equipe Prevenire',
      featured: false,
      icon: Smile
    },
    {
      id: 6,
      title: 'Prevenção ao Burnout: Sinais e Estratégias',
      excerpt: 'Identifique os sinais do burnout e aprenda estratégias eficazes para prevenir esta síndrome.',
      category: 'Prevenção',
      date: '2024-10-03',
      readTime: '9 min',
      image: '/api/placeholder/400/250',
      author: 'Gildazio Junior',
      featured: false,
      icon: Target
    },
    {
      id: 7,
      title: 'A Importância do Sono para a Saúde Mental',
      excerpt: 'Compreenda como a qualidade do sono impacta diretamente seu bem-estar emocional e mental.',
      category: 'Bem-estar',
      date: '2024-09-28',
      readTime: '5 min',
      image: '/api/placeholder/400/250',
      author: 'Equipe Prevenire',
      featured: false,
      icon: Clock
    },
    {
      id: 8,
      title: 'Construindo Relacionamentos Saudáveis',
      excerpt: 'Dicas práticas para desenvolver e manter relacionamentos equilibrados e nutritivos.',
      category: 'Relacionamentos',
      date: '2024-09-25',
      readTime: '7 min',
      image: '/api/placeholder/400/250',
      author: 'Thauanne Ferreira',
      featured: false,
      icon: Heart
    },
    {
      id: 9,
      title: 'Gerenciando Emoções Difíceis',
      excerpt: 'Estratégias eficazes para lidar com emoções intensas de forma saudável e construtiva.',
      category: 'Autocuidado',
      date: '2024-09-22',
      readTime: '6 min',
      image: '/api/placeholder/400/250',
      author: 'Gildazio Junior',
      featured: false,
      icon: Brain
    }
  ]

  const filteredPosts = posts.filter(post => {
    const matchesCategory = selectedCategory === 'Todos' || post.category === selectedCategory
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const featuredPost = posts.find(post => post.featured)
  const regularPosts = filteredPosts.filter(post => !post.featured)

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('pt-BR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  }

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
              Blog & <span className="text-gradient">Dicas</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Conteúdos especializados sobre saúde mental, bem-estar emocional 
              e dicas práticas para uma vida mais equilibrada e feliz.
            </p>

            {/* Search and Filter */}
            <div className="max-w-2xl mx-auto space-y-6">
              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Buscar artigos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap justify-center gap-2">
                {categories.map((category) => (
                  <motion.button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      selectedCategory === category
                        ? 'bg-primary-500 text-white'
                        : 'bg-white text-gray-600 hover:bg-primary-50 hover:text-primary-600'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (!searchTerm && selectedCategory === 'Todos') && (
        <section className="section-padding bg-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Artigo em <span className="text-gradient">Destaque</span>
              </h2>
            </motion.div>

            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card overflow-hidden max-w-4xl mx-auto"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Image */}
                <div className="relative h-64 lg:h-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                    <div className="text-center text-white">
                      <featuredPost.icon className="w-16 h-16 mx-auto mb-4" />
                      <p className="text-lg font-medium">Artigo em Destaque</p>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-white text-primary-600 px-3 py-1 rounded-full text-sm font-medium">
                      Destaque
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {formatDate(featuredPost.date)}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {featuredPost.readTime}
                    </div>
                    <div className="flex items-center">
                      <Tag className="w-4 h-4 mr-1" />
                      {featuredPost.category}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {featuredPost.title}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      Por {featuredPost.author}
                    </div>
                    <motion.button
                      className="btn-primary"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Ler Artigo
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.article>
          </div>
        </section>
      )}

      {/* Posts Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Todos os <span className="text-gradient">Artigos</span>
            </h2>
            <p className="text-xl text-gray-600">
              {filteredPosts.length} artigo{filteredPosts.length !== 1 ? 's' : ''} encontrado{filteredPosts.length !== 1 ? 's' : ''}
            </p>
          </motion.div>

          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card overflow-hidden group"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-300 to-primary-500 flex items-center justify-center">
                      <post.icon className="w-12 h-12 text-white" />
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-white text-primary-600 px-2 py-1 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-xs text-gray-500 mb-3">
                      <div className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {formatDate(post.date)}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {post.readTime}
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="text-xs text-gray-500">
                        {post.author}
                      </div>
                      <motion.button
                        className="text-primary-600 text-sm font-medium flex items-center hover:text-primary-700 transition-colors"
                        whileHover={{ x: 5 }}
                      >
                        Ler mais
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </motion.button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-500 mb-2">
                Nenhum artigo encontrado
              </h3>
              <p className="text-gray-400">
                Tente ajustar seus filtros ou termos de busca.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding bg-gradient-to-r from-primary-500 to-primary-600 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Fique por dentro das novidades
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Entre em contato conosco pelo WhatsApp para receber dicas exclusivas 
              sobre saúde mental e bem-estar diretamente no seu celular.
            </p>
            
            <motion.a
              href="https://wa.me/5561984670305?text=Olá! Gostaria de receber dicas sobre saúde mental"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-primary-600 font-bold text-lg py-4 px-8 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Receber Dicas no WhatsApp
              <ArrowRight className="w-6 h-6 ml-2" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Blog