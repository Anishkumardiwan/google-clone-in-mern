import { useState, useEffect } from 'react';
// import API_KEY from './keys';

const useGoogleSearch = (context) => {
    const [data, setData] = useState(null);
    const { term, start } = context;

    // console.log(term , start);
    const CONTEXT_KEY = process.env.REACT_APP_CONTEXT_KEY;
    const API_KEY = process.env.REACT_APP_API_KEY;


    useEffect(() => {
        const fetchData = async () => {
            fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}&start=${start}`)
                .then(res => res.json())
                .then(result => {
                    setData(result);
                });
        }
        fetchData();
    }, [term , start]);

    // console.log(data);

    return { data };
}

export default useGoogleSearch;