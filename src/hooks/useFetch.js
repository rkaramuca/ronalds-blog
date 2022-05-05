import { useState, useEffect } from 'react';

// Hooks are used so that we may reuse this code in many places without having to re-write
const useFetch = (url) => {
  const [ data, setData ] = useState(null);
  const [ isPending, setIsPending ] = useState(true);
  const [ error, setError ] = useState(null);

  // [] is the dependency array. If any state in the array changes, useEffect is ran.
  // useEffect also runs when the component is first rendered
  useEffect(() => {
    // AbortController to stop memory leaks when someone tries to fetch data then 
    // quickly switch to another page before the promise is fulfilled
    const abortCont = new AbortController();

    // setTimeout to simulate data fetching delay (also to show "Loading..." state works)
    setTimeout(() => {
      // get request to fetch the json information, then the data from that json
      fetch(url, { signal: abortCont.signal })
        .then(res => {
          if(!res.ok) {
            // this error is caught by .catch as well...
            throw Error('Could not fetch the data for that resource');
          }
          return res.json();
        })
        .then(data => {
          // update data state with the data from the json server
          setData(data);
          // remove our "Loading..." message
          setIsPending(false);
          // make sure the error state is reset/null
          setError(null);
        })
        // look for any errors in fetching the data
        .catch(err => {
          // if the fetch is aborted, log in the console, but don't change the state
          if(err.name === 'AbortError') {
            console.log('fetch aborted');
          } else {
            // set the loading to false to remove the "Loading..." message
            setIsPending(false);
            // change the state of error to display the error message
            setError(err.message);
          }
        });
    }, 1000);

    return () => abortCont.abort();
  // re-run this function any time url changes
  }, [ url ]);

  // We return these to get the properties from the hook to use in other components
  return { data, isPending, error };
}

export default useFetch;