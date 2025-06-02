import { ArrowRight } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';

export function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Capacitação em Análise de Dados para Microempresas
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Ajudamos pequenos negócios a usarem dados para tomar melhores decisões e crescer de forma sustentável.
            </p>
            <Link 
              to="/agenda" 
              className="inline-flex items-center bg-white text-blue-700 font-medium px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Inscreva-se <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Como podemos ajudar seu negócio</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Entenda seus dados</h3>
              <p className="text-gray-700">
                Aprenda a organizar e interpretar informações do seu negócio de forma simples e prática.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Tome decisões melhores</h3>
              <p className="text-gray-700">
                Use dados reais para identificar oportunidades e resolver problemas no seu negócio.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Cresça com segurança</h3>
              <p className="text-gray-700">
                Planeje o futuro do seu negócio com base em informações confiáveis e análises simples.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre o projeto */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Sobre o Projeto</h2>
            
            <p className="text-gray-700 mb-4">
              O projeto "Capacitação em Análise de Dados para Microempresas" é uma iniciativa de extensão universitária 
              que visa democratizar o acesso ao conhecimento sobre análise de dados para pequenos empreendedores.
            </p>
            
            <p className="text-gray-700 mb-4">
              Nossos workshops e materiais são desenvolvidos por professores e estudantes universitários, 
              adaptados especialmente para quem não tem familiaridade com tecnologia.
            </p>
            
            <p className="text-gray-700 mb-6">
              Participando do nosso programa, você terá acesso a:
            </p>
            
            <ul className="list-disc pl-6 mb-8 space-y-2 text-gray-700">
              <li>Workshops online gratuitos</li>
              <li>Materiais didáticos simplificados</li>
              <li>Tutoriais em vídeo passo a passo</li>
              <li>Suporte da nossa equipe</li>
              <li>Comunidade de outros empreendedores</li>
            </ul>
            
            <div className="flex justify-center">
              <Link 
                to="/videos" 
                className="inline-flex items-center bg-blue-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors mr-4"
              >
                Ver Tutoriais
              </Link>
              
              <Link 
                to="/agenda" 
                className="inline-flex items-center border border-blue-600 text-blue-600 font-medium px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Ver Agenda
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">O que dizem nossos participantes</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <p className="italic text-gray-700 mb-4">
                "Nunca imaginei que poderia usar análise de dados no meu pequeno restaurante. 
                Hoje consigo prever melhor meu estoque e reduzir desperdícios."
              </p>
              <p className="font-medium">Maria Silva, Restaurante Sabor Caseiro</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <p className="italic text-gray-700 mb-4">
                "Os workshops me ajudaram a entender melhor o comportamento dos meus clientes. 
                Consegui aumentar minhas vendas em 30% com as estratégias que aprendi."
              </p>
              <p className="font-medium">João Oliveira, Loja de Roupas Estilo</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Pronto para transformar seu negócio?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Inscreva-se agora em nossos workshops gratuitos e comece a usar o poder dos dados para melhorar seu negócio.
          </p>
          <Link 
            to="/agenda" 
            className="inline-flex items-center bg-white text-blue-700 font-medium px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
          >
            Participar Agora <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}
