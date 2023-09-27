// Import Page Elements
import Navbar from './components/elements/Navbar'
import Header from './components/elements/Header'

// Import Content Bodies
import Body from './components/pages/Body'
import About from './components/pages/About'
import './App.css';

function App() {
  return (
    <>
      <Header id={'header'} />
      <Navbar />
      <About />
      <Body id={'first'}/>
      <Body id={'second'}/>
    </>
  );
}

export default App;
// Import Page Elements
import Navbar from './components/elements/Navbar'
import Header from './components/elements/Header'

// Import Content Bodies
import Body from './components/pages/Body'
import About from './components/pages/About'
import './App.css';
import Projects from './components/pages/Projects';

function App() {
  return (
    <>
      <Header id={'header'} />
      <Navbar />
      <About />
      <Projects />
      <Body id={'second'}/>
    </>
  );
}

export default App;
