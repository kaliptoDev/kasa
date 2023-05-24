import { useState, useEffect } from "react";

const useFetchData = (adress) => {
    const [data, setData] = useState(null);
    const [err, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (!adress) {
            alert('Erreur : ' + adress)
            return;
        }
        setIsLoading(true);

        try {
            fetch(adress)
                .then((response) => response.json())
                .then((data) => setData(data));
        } catch (err) {
            setError(err);
        }

        setIsLoading(false);

    },
        [adress]);

    
    return { data, err, isLoading };


}

export default useFetchData;
