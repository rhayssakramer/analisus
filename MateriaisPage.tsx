import { FileArrowDown, FilePdf, FileText } from '@phosphor-icons/react';

export function MateriaisPage() {
  // Dados de exemplo para os materiais
  const materiais = [
    {
      id: 1,
      title: "Introdução à Análise de Dados",
      description: "Slides da aula introdutória sobre conceitos básicos de análise de dados para pequenos negócios.",
      tipo: "slides",
      formato: "PDF",
      tamanho: "2.4 MB",
      icone: FilePdf
    },
    {
      id: 2,
      title: "Planilha de Controle de Vendas",
      description: "Modelo pronto para você registrar e analisar suas vendas diárias, semanais e mensais.",
      tipo: "planilha",
      formato: "XLSX",
      tamanho: "1.8 MB",
      icone: FileText
    },
    {
      id: 3,
      title: "Guia Prático: Google Sheets para Iniciantes",
      description: "Passo a passo para começar a usar o Google Sheets, com exemplos práticos para pequenos negócios.",
      tipo: "guia",
      formato: "PDF",
      tamanho: "3.5 MB",
      icone: FilePdf
    },
    {
      id: 4,
      title: "Exercícios: Análise de Clientes",
      description: "Série de exercícios para praticar a análise de perfil de clientes usando dados simples.",
      tipo: "exercícios",
      formato: "PDF",
      tamanho: "1.2 MB",
      icone: FilePdf
    },
    {
      id: 5,
      title: "Dashboard de Vendas - Modelo",
      description: "Modelo de dashboard para visualização de vendas, pronto para você adaptar ao seu negócio.",
      tipo: "template",
      formato: "XLSX",
      tamanho: "2.1 MB",
      icone: FileText
    },
    {
      id: 6,
      title: "Checklist: Preparando seus Dados",
      description: "Lista de verificação para organizar seus dados antes de começar a análise.",
      tipo: "checklist",
      formato: "PDF",
      tamanho: "0.8 MB",
      icone: FilePdf
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Slides e Exercícios</h1>
        <p className="text-gray-600 mb-8">
          Acesse e baixe materiais didáticos para aprender no seu próprio ritmo. 
          Todos os materiais são desenvolvidos com linguagem simples e exemplos práticos para pequenos negócios.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {materiais.map((material) => (
            <div key={material.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <material.icone size={24} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{material.title}</h3>
                  <p className="text-gray-600 mb-4">{material.description}</p>
                  <div className="flex flex-wrap items-center text-sm text-gray-500 mb-4">
                    <span className="mr-4">Tipo: {material.tipo}</span>
                    <span className="mr-4">Formato: {material.formato}</span>
                    <span>Tamanho: {material.tamanho}</span>
                  </div>
                  <button 
                    className="flex items-center text-blue-600 hover:text-blue-800 font-medium"
                    aria-label={`Baixar ${material.title}`}
                  >
                    <FileArrowDown size={20} className="mr-2" />
                    Baixar Material
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Como usar estes materiais?</h2>
          <p className="mb-4">
            Recomendamos começar pelos slides de introdução e depois explorar os exercícios práticos. 
            Os templates e planilhas podem ser usados diretamente no seu negócio - basta baixar e adaptar 
            com seus próprios dados.
          </p>
          <p>
            Se tiver dúvidas sobre como usar qualquer material, participe de nossos workshops online ou 
            deixe sua pergunta no fórum.
          </p>
        </div>
      </div>
    </div>
  );
}
