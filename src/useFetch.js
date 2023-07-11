import React, { useEffect, useState } from 'react'

function useFetch(url) {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
  
    useEffect(() => {
      fetch(url)
        .then((response) => response.json())
        .then((results) => {
          setIsLoading(false);
          setData(results);
          console.log(results);
        })
        .catch(error => {
          setIsLoading(false);
          setErrorMessage("There was an error!");
        });
    }, [url]);

  return {data, isLoading, errorMessage};
}

export default useFetch