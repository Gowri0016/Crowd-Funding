
import './App.css';
import Header from './Component/Header';
import Details from './Component/Details';
import About from './Component/About';
import Europ from './Component/Europ';
import Gpg from './Component/Gpg';
import Jpy from './Component/Jpy';
import Footer from './Component/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Details />
      <About />
      <Europ />
      <Gpg />
      <Jpy />
      <Footer />
    </div>
  );
}

export default App;
