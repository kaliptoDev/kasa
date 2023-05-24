import { Route, Routes} from 'react-router-dom';
import ErrorPage from '../../pages/ErrorPage/ErrorPage';
import About from '../../pages/About/About';
import Home from '../../pages/Home/Home';
import FicheLogement from '../../pages/FicheLogement/FicheLogement';

const RoutesTree = () => {

    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/a-propos' element={<About />} />
            <Route path='/fiche-logement/:id' element={<FicheLogement />} />
            <Route path='/*' element={<ErrorPage /> } />
        </Routes>
    )

}

export default RoutesTree;