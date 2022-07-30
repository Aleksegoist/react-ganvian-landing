import './App.css';
import Develop from './components/app_develop/Develop';
import Clients from './components/clients/Clients';
import Company from './components/company/Company';
import Hero from './components/hero/Hero';
import Landscape from './components/landscape/Landscape';
import Navbar from './components/navbar/Navbar';
import Services from './components/services/Services';


function App() {
  return (
    <div className='App'>
      <Navbar />
      <Hero />
      <Company />
      <Services />
      <Develop />
      <Landscape />
      <Clients />
    </div>
  );
}

export default App;
