import './App.css';
import Excursion from './components/Excursion';
import Header from './components/Header';
import Main from './components/Main/Main';
import Title from './components/Title/Title';
import SliderMain from './components/SliderMain/SliderMain';
import VirtualGallary from './components/VirtualGallary';
import SliderImg from './components/SliderImg';
import ProjectText from './components/ProjectText';
import textCel from './data/textCel';
import textGallary from './data/textGallary';
import MoreButton from './components/MoreButton';
import Zal from './components/Zal';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Excursion />
      <SliderMain />
      <VirtualGallary />
      <ProjectText text={textCel} />
      <Title title="ГАЛЕРЕЯ" />
      <SliderImg />
      <Title title="О МУЗЕЕ" />
      <ProjectText text={textGallary} />
      <MoreButton />
      <Zal />
      <Footer />
    </div>
  );
}

export default App;
