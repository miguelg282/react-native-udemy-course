import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
    const [bizResults, setBizResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async searchTerm => {
        console.log("Hi There!")
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'Long Beach'
                }
            });
            setBizResults(response.data.businesses);
        } catch (err) {
            setErrorMessage('Something went wrong :(');
        }
    };

    // Call searchAPI when component is first rendered
    // Bad code:
    // searchApi('pasta')

    useEffect(() => {
        searchApi('pasta');
    }, []);

  return [searchApi, bizResults, errorMessage];
};

