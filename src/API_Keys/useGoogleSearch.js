import { useState, useEffect } from 'react';
// import API_KEY from './keys';

const useGoogleSearch = (term) => {
    const [data, setData] = useState(null);

    const CONTEXT_KEY = process.env.REACT_APP_CONTEXT_KEY;
    const API_KEY = process.env.REACT_APP_API_KEY;

    // console.log(term);
    // console.log(API_KEY);
    // console.log(API_KEY);
    // console.log(CONTEXT_KEY);

    useEffect(() => {
        const fetchData = async () => {
            fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`)
                .then(res => res.json())
                .then(result => {
                    setData(result);
                });
        }
        fetchData();
    }, [term])

    // console.log(data);

    return { data };
}

export default useGoogleSearch;