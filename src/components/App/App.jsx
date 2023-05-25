import './App.css';
import Header from '../Header/Header';
import RoutesTree from '../../router/RoutesTree/RoutesTree';
import Footer from '../Footer/Footer';
import { DataContext } from '../../Context/DataContext'
import useFetchData from '../../utils/useFetchData'
import { useState, useEffect } from 'react';

const App = () => {
  
  const [data, setData] = useState(null);
  
  let res = useFetchData('./Data/data.json')
  
  console.log(data)

  useEffect(() => {
    setData(res.data)
  }
    , [res])

  return (
    <div className='main'>
      <Header />
      <DataContext.Provider value={data}>
        <RoutesTree />
      </DataContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
