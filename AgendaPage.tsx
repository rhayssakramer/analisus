import { Calendar, CalendarCheck, CalendarX, Users } from '@phosphor-icons/react';
import { useState } from 'react';

// Definindo a interface para o tipo Workshop
interface Workshop {
  id: number;
  titulo: string;
  data: string;
  horario: string;
  instrutor: string;
  vagas: number;
  vagasDisponiveis: number;
  status: 'disponivel' | 'lotado' | 'realizado';
  descricao: string;
}

export function AgendaPage() {
  const [selectedMonth, setSelectedMonth] = useState('Junho');
  
  // Dados de exemplo para os workshops
  const workshops: Workshop[] = [
    {
      id: 1,
      titulo: "Introdução à Análise de Dados",
      data: "10 de Junho, 2025",
      horario: "19:00 - 20:30",
      instrutor: "Profa. Ana Souza",
      vagas: 25,
      vagasDisponiveis: 8,
      status: "disponivel", // disponivel, lotado, realizado
      descricao: "Workshop introdutório sobre conceitos básicos de análise de dados e como aplicá-los em pequenos negócios."
    },
    {
      id: 2,
      titulo: "Google Sheets na Prática",
      data: "15 de Junho, 2025",
      horario: "19:00 - 20:30",
      instrutor: "Prof. Carlos Mendes",
      vagas: 20,
      vagasDisponiveis: 0,
      status: "lotado",
      descricao: "Aprenda a usar o Google Sheets para organizar dados de vendas, clientes e estoque do seu negócio."
    },
    {
      id: 3,
      titulo: "Criando seu Primeiro Dashboard",
      data: "22 de Junho, 2025",
      horario: "19:00 - 21:00",
      instrutor: "Profa. Ana Souza",
      vagas: 25,
      vagasDisponiveis: 15,
      status: "disponivel",
      descricao: "Workshop prático para criar seu primeiro painel de visualização de dados usando ferramentas gratuitas."
    },
    {
      id: 4,
      titulo: "Análise de Dados para Decisões de Marketing",
      data: "29 de Junho, 2025",
      horario: "19:00 - 20:30",
      instrutor: "Prof. Roberto Alves",
      vagas: 25,
      vagasDisponiveis: 20,
      status: "disponivel",
      descricao: "Como usar dados para tomar melhores decisões de marketing e aumentar suas vendas."
    },
    {
      id: 5,
      titulo: "Previsão de Vendas para Pequenos Negócios",
      data: "5 de Julho, 2025",
      horario: "19:00 - 20:30",
      instrutor: "Profa. Mariana Lima",
      vagas: 20,
      vagasDisponiveis: 20,
      status: "disponivel",
      descricao: "Técnicas simples para prever vendas futuras e planejar melhor seu estoque e fluxo de caixa."
    }
  ];

  // Função para renderizar o status do workshop
  const renderStatus = (workshop: Workshop) => {
    if (workshop.status === 'disponivel') {
      return (
        <span className="flex items-center text-green-600">
          <CalendarCheck size={18} className="mr-1" />
          {workshop.vagasDisponiveis} vagas disponíveis
        </span>
      );
    } else if (workshop.status === 'lotado') {
      return (
        <span className="flex items-center text-red-600">
          <CalendarX size={18} className="mr-1" />
          Workshop lotado
        </span>
      );
    } else {
      return (
        <span className="flex items-center text-gray-600">
          <Calendar size={18} className="mr-1" />
          Workshop realizado
        </span>
      );
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Agenda de Workshops</h1>
        <p className="text-gray-600 mb-8">
          Participe dos nossos workshops online gratuitos e aprenda a usar dados para melhorar seu negócio. 
          Todos os workshops são realizados via Microsoft Teams e incluem material de apoio.
        </p>

        {/* Seletor de mês */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center justify-center md:justify-start space-x-2 mb-2">
            <button 
              className={`px-4 py-2 rounded-lg ${selectedMonth === 'Maio' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'}`}
              onClick={() => setSelectedMonth('Maio')}
            >
              Maio
            </button>
            <button 
              className={`px-4 py-2 rounded-lg ${selectedMonth === 'Junho' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'}`}
              onClick={() => setSelectedMonth('Junho')}
            >
              Junho
            </button>
            <button 
              className={`px-4 py-2 rounded-lg ${selectedMonth === 'Julho' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'}`}
              onClick={() => setSelectedMonth('Julho')}
            >
              Julho
            </button>
          </div>
          <p className="text-sm text-gray-500">
            Mostrando workshops para {selectedMonth} e meses seguintes
          </p>
        </div>

        {/* Lista de workshops */}
        <div className="space-y-6">
          {workshops.map((workshop) => (
            <div key={workshop.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-3/4">
                  <h3 className="text-xl font-semibold mb-2">{workshop.titulo}</h3>
                  <p className="text-gray-600 mb-4">{workshop.descricao}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-500">Data e Horário</p>
                      <p className="font-medium">{workshop.data}, {workshop.horario}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Instrutor</p>
                      <p className="font-medium flex items-center">
                        <Users size={18} className="mr-2 text-blue-600" />
                        {workshop.instrutor}
                      </p>
                    </div>
                  </div>
                  
                  <div className="mb-4 md:mb-0">
                    {renderStatus(workshop)}
                  </div>
                </div>
                
                <div className="md:w-1/4 flex items-center justify-center mt-4 md:mt-0">
                  <button 
                    className={`px-6 py-3 rounded-lg font-medium w-full md:w-auto text-center ${
                      workshop.status === 'disponivel' 
                        ? 'bg-blue-600 text-white hover:bg-blue-700' 
                        : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                    }`}
                    disabled={workshop.status !== 'disponivel'}
                  >
                    {workshop.status === 'disponivel' ? 'Inscrever-se' : 'Indisponível'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Informações adicionais */}
        <div className="mt-12 bg-blue-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Informações importantes</h2>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Todos os workshops são gratuitos e realizados online via Microsoft Teams.</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Após a inscrição, você receberá um e-mail com o link de acesso.</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Os materiais de apoio serão disponibilizados na seção "Materiais" após cada workshop.</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Em caso de dúvidas, entre em contato pelo e-mail: projeto.dados@universidade.edu.br</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
