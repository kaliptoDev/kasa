import './App.css';
import Header from '../Header/Header';
import RoutesTree from '../../router/RoutesTree/RoutesTree';
import Footer from '../Footer/Footer';


const App = () => {
  return (
    <div className='main'>
      <Header />
      <RoutesTree />
      <Footer />
    </div>
  );
}

export default App;
