// COMPONENTS
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skill from './components/Skill/Skill';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About/>
        <Skill/>
      </main>
    </>
  );
};

export default App;
