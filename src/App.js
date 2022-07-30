import './App.css';
import Company from './components/company/Company';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';


function App() {
  return (
    <div className='App'>
      <Navbar />
      <Hero />
      <Company />
    </div>
  );
}

export default App;
