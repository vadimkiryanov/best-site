import './App.css';
import OurTeam from './components/OurTeam';
import Preview from './components/Preview';
import MainLayout from './layouts/MainLayout';

function App() {
  return (
    <MainLayout>
      <Preview />
      <OurTeam />
    </MainLayout>
  );
}

export default App;
