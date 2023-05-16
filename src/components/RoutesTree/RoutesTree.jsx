import { Route, Routes} from 'react-router-dom';
import ErrorPage from '../ErrorPage/ErrorPage';
import About from '../About/About';
import Home from '../Home/Home';
import FicheLogement from '../FicheLogement/FicheLogement';

const RoutesTree = () => {

    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/a-propos' element={<About />} />
            <Route path='/fiche-logement'>
                <Route path='/fiche-logement/:id' element={<FicheLogement />} />
            </Route>
            <Route path='*' component={<ErrorPage /> } />
        </Routes>
    )

}

export default RoutesTree;