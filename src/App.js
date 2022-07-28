import './App.css';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Right from './components/right/Right';

function App() {
  return (
    <div className='container'>
      <Navbar />
      <Right />
      <Hero />
    </div>
  );
}

export default App;
