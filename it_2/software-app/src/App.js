import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import ExtraSection from './components/ExtraSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="page">
      <Header />
      <main className="main-layout">
        <Content />
        <ExtraSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
