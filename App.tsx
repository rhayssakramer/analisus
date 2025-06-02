import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { HomePage } from './pages/HomePage';
import { VideosPage } from './pages/VideosPage';
import { MateriaisPage } from './pages/MateriaisPage';
import { FerramentasPage } from './pages/FerramentasPage';
import { AgendaPage } from './pages/AgendaPage';
import { ForumPage } from './pages/ForumPage';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/videos" element={<VideosPage />} />
          <Route path="/materiais" element={<MateriaisPage />} />
          <Route path="/ferramentas" element={<FerramentasPage />} />
          <Route path="/agenda" element={<AgendaPage />} />
          <Route path="/forum" element={<ForumPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
