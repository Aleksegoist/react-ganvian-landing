import './App.css';
import Company from './components/company/Company';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Services from './components/services/Services';


function App() {
  return (
    <div className='App'>
      <Navbar />
      <Hero />
      <Company />
      <Services />
    </div>
  );
}

export default App;
