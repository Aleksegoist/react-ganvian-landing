import './App.css';
import Company from './components/company/Company';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Right from './components/right/Right';

function App() {
  return (
    <div className='container'>
      <Navbar />
      <Hero />
      <Right />
      <Company />
    </div>
  );
}

export default App;
