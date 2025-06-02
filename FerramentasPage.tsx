import { GoogleLogo, ChartBar, PresentationChart, PaintBrush } from '@phosphor-icons/react';

export function FerramentasPage() {
  // Dados de exemplo para as ferramentas
  const ferramentas = [
    {
      id: 1,
      nome: "Google Sheets",
      descricao: "Planilha online gratuita que permite criar, editar e analisar dados. Ideal para pequenos negócios que precisam organizar informações de vendas, clientes e estoque.",
      icone: GoogleLogo,
      iconeCor: "text-green-600",
      iconeBg: "bg-green-100",
      link: "https://sheets.google.com",
      nivel: "Iniciante",
      recursos: ["Gráficos simples", "Fórmulas básicas", "Compartilhamento fácil", "Acesso pelo celular"]
    },
    {
      id: 2,
      nome: "Google Data Studio",
      descricao: "Ferramenta gratuita para criar dashboards e relatórios visuais a partir dos seus dados. Conecta-se facilmente com o Google Sheets e outras fontes.",
      icone: ChartBar,
      iconeCor: "text-blue-600",
      iconeBg: "bg-blue-100",
      link: "https://datastudio.google.com",
      nivel: "Intermediário",
      recursos: ["Dashboards interativos", "Relatórios automáticos", "Compartilhamento online", "Múltiplas fontes de dados"]
    },
    {
      id: 3,
      nome: "Power BI Desktop",
      descricao: "Software gratuito da Microsoft para análise de dados e criação de visualizações profissionais. Versão desktop com recursos avançados.",
      icone: PresentationChart,
      iconeCor: "text-yellow-600",
      iconeBg: "bg-yellow-100",
      link: "https://powerbi.microsoft.com/desktop",
      nivel: "Intermediário/Avançado",
      recursos: ["Análises avançadas", "Visualizações personalizadas", "Conexão com múltiplas fontes", "Relatórios detalhados"]
    },
    {
      id: 4,
      nome: "Canva",
      descricao: "Plataforma de design gráfico online com modelos prontos para criar relatórios visuais, infográficos e apresentações de dados.",
      icone: PaintBrush,
      iconeCor: "text-purple-600",
      iconeBg: "bg-purple-100",
      link: "https://www.canva.com",
      nivel: "Iniciante",
      recursos: ["Templates prontos", "Interface intuitiva", "Infográficos", "Apresentações profissionais"]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Ferramentas Gratuitas</h1>
        <p className="text-gray-600 mb-8">
          Conheça ferramentas gratuitas que podem ajudar seu pequeno negócio a analisar dados e criar relatórios visuais sem necessidade de conhecimentos técnicos avançados.
        </p>

        <div className="space-y-8">
          {ferramentas.map((ferramenta) => (
            <div key={ferramenta.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex flex-col md:flex-row md:items-start">
                <div className={`${ferramenta.iconeBg} p-4 rounded-lg mb-4 md:mb-0 md:mr-6 flex-shrink-0`}>
                  <ferramenta.icone size={32} className={ferramenta.iconeCor} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{ferramenta.nome}</h3>
                  <p className="text-gray-600 mb-4">{ferramenta.descricao}</p>
                  
                  <div className="mb-4">
                    <span className="text-sm font-medium bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                      Nível: {ferramenta.nivel}
                    </span>
                  </div>
                  
                  <h4 className="font-medium mb-2">Principais recursos:</h4>
                  <ul className="list-disc pl-5 mb-4 text-gray-600">
                    {ferramenta.recursos.map((recurso, index) => (
                      <li key={index}>{recurso}</li>
                    ))}
                  </ul>
                  
                  <a 
                    href={ferramenta.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-600 text-white font-medium px-5 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Acessar Ferramenta
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Como escolher a ferramenta certa?</h2>
          <p className="mb-4">
            Se você está começando agora, recomendamos o Google Sheets pela sua simplicidade. 
            À medida que for ganhando confiança, experimente o Google Data Studio para criar relatórios mais visuais.
          </p>
          <p>
            Nos nossos workshops, ensinamos como usar cada uma dessas ferramentas com exemplos práticos para pequenos negócios.
          </p>
        </div>
      </div>
    </div>
  );
}
