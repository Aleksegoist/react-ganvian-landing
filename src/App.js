import './App.css';
import Develop from './components/app_develop/Develop';
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
      <Develop />
    </div>
  );
}

export default App;
