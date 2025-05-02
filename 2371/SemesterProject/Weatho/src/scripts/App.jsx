import Header from './components/Header';
import Footer from './components/Footer';
import WeatherApp from './components/WeatherApp'; // <- this holds your weather logic
import '../styles/main.scss';

function App() {
  return (
    <>
      <Header />
      <main className="main-content">
        <WeatherApp />
      </main>
      <Footer />
    </>
  );
}

export default App;