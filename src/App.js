import './App.css';
import Develop from './components/app_develop/Develop';
import Budget from './components/budget/Budget';
import Clients from './components/clients/Clients';
import Company from './components/company/Company';
import Featured from './components/featured/Featured';
import Footer from './components/footer/Footer';
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
      <Budget />
      <Featured />
      <Footer />
    </div>
  );
}

export default App;
