import './App.css';
import Header from './components/Header';
import Hero from "./components/Hero";
import Video from './components/Video';
import Writing from './components/Writing';
import Advantage from './components/Advantage';
import Footer from "./components/Footer";
import Quote from './components/Quote';
import Deposit from './components/Deposit';

function App() {
  return (
    <>
      <main className='mb_20'>
        <Header/>
        <Hero/>
      </main>
      <Video/>
      <Deposit/>
      <Writing/>
      <Advantage/>
      <Quote/>
      <Footer />
    </>
  );
}

export default App;
