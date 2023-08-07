import {useEffect, useState} from 'react';
import axios from 'axios';

const usePollingData = (fetchFn, pollInterval) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    const fetchData = () => {
        fetchFn()
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setError('Error fetching data. Please try again later.');
            });
    };

    useEffect(() => {
        fetchData();
        const intervalId = setInterval(fetchData, pollInterval);

        return () => {
            clearInterval(intervalId);
        };
    }, [fetchFn, pollInterval]);

    return {data, error};
};

export default usePollingData;
