import './App.css';
import Company from './components/company/Company';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Right from './components/right/Right';
import Services from './components/services/Services';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Hero />
      <Right />
      <Company />
      <Services />
    </div>
  );
}

export default App;
