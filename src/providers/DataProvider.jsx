import { useState, createContext, useEffect } from 'react'
import useFetchData from '../utils/useFetchData';

// CONTEXT = definition et/ou valeurs par default
export const DataContext = createContext({
    data: [],
    err: null
})

// PROVIDER = fournisseur du context
const DataProvider = ({children}) => {
    const [data, setData] = useState([]);
    const [err, setError] = useState(null);
  
    useEffect(() => {
        fetch('http://localhost:3000/Data/data.json')
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((err) => setError(err))
    }, [])

    return (
        <DataContext.Provider value={{data, err}}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider