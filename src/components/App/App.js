import './App.css';
import Header from '../Header/Header';
import Tag from '../Tag/Tag';
import Card from '../Card/Card';
import Dropdown from '../Dropdowns/Dropdown/Dropdown';


const App = () => {
  return (
    <div className='main'>
      <span className='componentDesc'>HEADER</span>
    <Header />
      <span className='componentDesc'>TAG</span>
    <Tag text='tag-name' />
      <span className='componentDesc'>CARD</span>
    <Card title="Titre de la location" />
      <span className='componentDesc'>SCROLL DESC</span>
    <Dropdown text = "Description Test" list={["Test1","Test2","Test3","Test4"]}/>
    </div>
  );
}

export default App;
