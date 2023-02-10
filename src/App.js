import ImgCarousel from './components/carousel/ImgCaroulsel';
import Destination from './components/destination/Destination';
import Footer from './components/footer/Footer';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Search from './components/search/Search';
import Select from './components/select/Select';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Destination />
      <Search />
      <Select />
      <ImgCarousel />
      <Footer />
    </div>
  );
};

export default App;
