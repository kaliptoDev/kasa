import './App.css';
import Header from '../Header/Header';
import RoutesTree from '../../router/RoutesTree/RoutesTree';
import Footer from '../Footer/Footer';
import { DataContext } from '../../Context/DataContext'
import useFetchData from '../../utils/useFetchData'
import { useState, useEffect } from 'react';


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
