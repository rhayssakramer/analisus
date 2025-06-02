import { Play, FileArrowDown } from '@phosphor-icons/react';

export function VideosPage() {
  // Dados de exemplo para os vídeos
  const videos = [
    {
      id: 1,
      title: "O que é análise de dados?",
      description: "Uma introdução simples sobre o que é análise de dados e como ela pode ajudar pequenos negócios.",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
      videoId: "dQw4w9WgXcQ"
    },
    {
      id: 2,
      title: "Como usar o Google Sheets para gráficos",
      description: "Aprenda a criar gráficos simples e informativos usando o Google Sheets, uma ferramenta gratuita e acessível.",
      thumbnail: "https://img.youtube.com/vi/jNQXAC9IVRw/maxresdefault.jpg",
      videoId: "jNQXAC9IVRw"
    },
    {
      id: 3,
      title: "Organizando dados de vendas",
      description: "Técnicas simples para organizar seus dados de vendas e extrair informações úteis para seu negócio.",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
      videoId: "dQw4w9WgXcQ"
    },
    {
      id: 4,
      title: "Entendendo seu público-alvo com dados",
      description: "Como coletar e analisar informações sobre seus clientes para melhorar seus produtos e serviços.",
      thumbnail: "https://img.youtube.com/vi/jNQXAC9IVRw/maxresdefault.jpg",
      videoId: "jNQXAC9IVRw"
    },
    {
      id: 5,
      title: "Previsão de vendas para pequenos negócios",
      description: "Métodos simples para prever suas vendas futuras e planejar melhor seu estoque e fluxo de caixa.",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
      videoId: "dQw4w9WgXcQ"
    },
    {
      id: 6,
      title: "Criando relatórios visuais com Canva",
      description: "Como transformar seus dados em relatórios visuais atraentes usando a ferramenta gratuita Canva.",
      thumbnail: "https://img.youtube.com/vi/jNQXAC9IVRw/maxresdefault.jpg",
      videoId: "jNQXAC9IVRw"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Vídeos Explicativos e Tutoriais</h1>
        <p className="text-gray-600 mb-8">
          Aprenda no seu próprio ritmo com nossos vídeos tutoriais. Todos os vídeos são feitos especialmente 
          para pequenos empresários, com linguagem simples e exemplos práticos.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {videos.map((video) => (
            <div key={video.id} className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
              <div className="relative pb-[56.25%] bg-gray-100">
                <img 
                  src={video.thumbnail} 
                  alt={`Miniatura do vídeo ${video.title}`}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button 
                    className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 transition-colors"
                    aria-label={`Reproduzir vídeo: ${video.title}`}
                  >
                    <Play size={24} weight="fill" />
                  </button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{video.title}</h3>
                <p className="text-gray-600 mb-4">{video.description}</p>
                <div className="flex justify-between items-center">
                  <a 
                    href={`https://www.youtube.com/watch?v=${video.videoId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
                  >
                    Assistir <Play size={16} className="ml-1" />
                  </a>
                  <a 
                    href="#"
                    className="text-gray-600 hover:text-gray-800 flex items-center"
                  >
                    Material <FileArrowDown size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Não encontrou o que procurava?</h2>
          <p className="mb-4">
            Estamos sempre adicionando novos vídeos. Se você tem alguma sugestão de tema ou dúvida específica, 
            deixe sua mensagem no nosso fórum.
          </p>
          <a 
            href="/forum"
            className="inline-block bg-blue-600 text-white font-medium px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Ir para o Fórum
          </a>
        </div>
      </div>
    </div>
  );
}
