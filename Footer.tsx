import { EnvelopeSimple, FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react';

export function Footer() {
  return (
    <footer className="bg-gray-100 mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Informações de contato */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="flex items-center mb-2">
              <EnvelopeSimple size={20} className="text-blue-600 mr-2" />
              <span>projeto.dados@universidade.edu.br</span>
            </div>
            <p className="mt-2">Universidade Federal de Exemplo</p>
            <p>Departamento de Ciência da Computação</p>
          </div>

          {/* Links rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-700 hover:text-blue-600">Início</a></li>
              <li><a href="/agenda" className="text-gray-700 hover:text-blue-600">Agenda de Workshops</a></li>
              <li><a href="/forum" className="text-gray-700 hover:text-blue-600">Fórum de Dúvidas</a></li>
              <li><a href="/ferramentas" className="text-gray-700 hover:text-blue-600">Ferramentas Gratuitas</a></li>
            </ul>
          </div>

          {/* Parceiros e redes sociais */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Parceiros</h3>
            <p className="mb-4">Associação Comercial de Exemplo</p>
            <p className="mb-4">Secretaria de Desenvolvimento Econômico</p>
            
            <h3 className="text-lg font-semibold mb-4 mt-6">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-700 hover:text-blue-600" aria-label="Facebook">
                <FacebookLogo size={24} />
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600" aria-label="Instagram">
                <InstagramLogo size={24} />
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600" aria-label="LinkedIn">
                <LinkedinLogo size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-300 mt-8 pt-6 text-center">
          <p>&copy; {new Date().getFullYear()} Projeto de Extensão - Capacitação em Análise de Dados para Microempresas</p>
        </div>
      </div>
    </footer>
  );
}
