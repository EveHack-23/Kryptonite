import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = function(url){
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(function(){
    const fetchData = async function(){
      setLoading(true);
      try {
        const res = await axios.get(url);
        setData(res.data);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };
    fetchData();
  }, [url]);

  const reFetch = async (url1) => {
    setLoading(true);
    try {
    const res = await axios.get(url1);
      setData(res.data);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };
  
  return { data, loading, error, reFetch };
};

export default useFetch;