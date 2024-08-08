
import './App.css';
import Header from './Header';
import ImageCarousel from './ImageCarousel';
import Moreimage from './Moreimage';
import Nav from './Nav';
import Navbar from './Navbar';
import NavHead from './NavHead';

function App() {
  const offerEndTime='2024-12-31T23:59:59';
  return (
    <div className='maindiv'>
      <Header/>
      <Nav/>
      <ImageCarousel/>
      <Navbar />
      <NavHead offerEndTime={offerEndTime}/>
      <Moreimage />
    </div>
    
  );
}

export default App;
