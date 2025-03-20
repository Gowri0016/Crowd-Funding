
import './App.css';
import Header from './Component/Header';
import Sign from './Component/Sign';
import Details from './Component/Details';
import About from './Component/About';
import Europ from './Component/Europ';
import Gpg from './Component/Gpg';
import Jpy from './Component/Jpy';
import Footer from './Component/Footer';
import { Route, Router} from 'lucide-react';

function App() {
  return (
    <div className="App">
      <Header />
      <Router >
        <Route path="/Sign" element={<Sign />}></Route>
      </Router>
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
