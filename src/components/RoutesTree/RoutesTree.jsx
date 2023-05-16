import { Route, Routes } from 'react-router-dom';
import ErrorPage from '../ErrorPage/ErrorPage';
import About from '../About/About';
import Home from '../Home/Home';


const RoutesTree = () => {

    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/a-propos' element={<About />} />
            <Route path='*' component={<ErrorPage /> } />
        </Routes>
    )

}

export default RoutesTree;