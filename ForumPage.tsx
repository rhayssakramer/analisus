import { useState, FormEvent } from 'react';
import { User, ChatCircleText, PaperPlaneTilt } from '@phosphor-icons/react';

// Definindo a interface para o tipo Pergunta
interface Pergunta {
  id: number;
  autor: string;
  data: string;
  pergunta: string;
  resposta: string;
  respondido: boolean;
}

export function ForumPage() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  // Dados de exemplo para as perguntas do fórum
  const perguntas: Pergunta[] = [
    {
      id: 1,
      autor: "Maria Silva",
      data: "28 de Maio, 2025",
      pergunta: "Como posso começar a analisar os dados de vendas da minha loja de roupas?",
      resposta: "Olá Maria! Recomendamos começar organizando seus dados em uma planilha simples no Google Sheets. Crie colunas para data, produto, quantidade, valor e forma de pagamento. Depois de algumas semanas coletando esses dados, você já conseguirá identificar padrões como dias de maior movimento e produtos mais vendidos. Temos um modelo pronto na seção de Materiais que pode te ajudar!",
      respondido: true
    },
    {
      id: 2,
      autor: "João Oliveira",
      data: "30 de Maio, 2025",
      pergunta: "Qual ferramenta gratuita é melhor para criar gráficos de vendas mensais?",
      resposta: "João, para iniciantes, o Google Sheets é excelente para criar gráficos simples e eficientes. Ele permite criar gráficos de barras, linhas e pizza com poucos cliques. Se você já tem alguma experiência, o Google Data Studio permite criar dashboards mais completos. Temos tutoriais para ambas as ferramentas na seção de Vídeos!",
      respondido: true
    },
    {
      id: 3,
      autor: "Ana Pereira",
      data: "1 de Junho, 2025",
      pergunta: "Como posso prever a demanda futura do meu restaurante com base nos dados históricos?",
      resposta: "",
      respondido: false
    }
  ];

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aqui seria implementada a lógica para enviar a pergunta
    alert('Sua pergunta foi enviada com sucesso! Em breve nossa equipe irá respondê-la.');
    setNome('');
    setEmail('');
    setMensagem('');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Fórum de Dúvidas e Interação</h1>
        <p className="text-gray-600 mb-8">
          Tire suas dúvidas sobre análise de dados e compartilhe experiências com outros empreendedores. 
          Nossa equipe e comunidade estão aqui para ajudar.
        </p>

        {/* Formulário para enviar pergunta */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-10">
          <h2 className="text-xl font-semibold mb-4">Envie sua pergunta</h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">
                  Seu nome
                </label>
                <input
                  type="text"
                  id="nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Seu e-mail
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-1">
                Sua pergunta
              </label>
              <textarea
                id="mensagem"
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="flex items-center bg-blue-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Enviar Pergunta <PaperPlaneTilt size={20} className="ml-2" />
            </button>
          </form>
        </div>

        {/* Lista de perguntas */}
        <h2 className="text-2xl font-semibold mb-6">Perguntas Recentes</h2>
        <div className="space-y-6">
          {perguntas.map((pergunta) => (
            <div key={pergunta.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-start mb-4">
                <div className="bg-gray-100 rounded-full p-2 mr-3">
                  <User size={24} className="text-gray-600" />
                </div>
                <div>
                  <h3 className="font-medium">{pergunta.autor}</h3>
                  <p className="text-sm text-gray-500">{pergunta.data}</p>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="flex items-start mb-2">
                  <ChatCircleText size={20} className="text-blue-600 mr-2 mt-1 flex-shrink-0" />
                  <p className="font-medium">{pergunta.pergunta}</p>
                </div>
              </div>
              
              {pergunta.respondido ? (
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm font-medium text-blue-800 mb-2">Resposta da equipe:</p>
                  <p className="text-gray-700">{pergunta.resposta}</p>
                </div>
              ) : (
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <p className="text-yellow-700">Esta pergunta ainda não foi respondida. Nossa equipe responderá em breve.</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Informações adicionais */}
        <div className="mt-12 bg-blue-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Diretrizes do Fórum</h2>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Seja claro e específico em suas perguntas para receber respostas mais úteis.</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Respostas podem levar até 48 horas em dias úteis.</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Para dúvidas urgentes, recomendamos participar dos nossos workshops ao vivo.</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Perguntas e respostas podem ser compartilhadas com outros participantes para fins educacionais.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
