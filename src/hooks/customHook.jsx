import axios from "axios";
import { useState, useEffect } from "react";

export const useFetchData = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [pending, setPending] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setPending(true);
        const { data } = await axios("https://dummyjson.com/quotes");
        setPending(false);
        setData(data.quotes);
      } catch (error) {
        if (error) {
          setError(error);
        }
      }
    };
    getData();
  }, []);

  return { data, error, pending };
};
