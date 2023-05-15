/** @format */

import { useEffect, useState } from "react";

export const useFetch = (url, token) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      if (token) {
        let response = await fetch(url, {
          headers: {
            Authorization: `Token ${token}`,
          },
        });
        if (!response.ok) {
          throw new Error("Oooops! Something Went Wrong.");
        }
        let data = await response.json();
        setData(data);
      } else {
        let response = await fetch(url);
        if (!response.ok) {
          throw new Error("Oooops! Something Went Wrong.");
        }
        let data = await response.json();
        setData(data);
      }
    }

    // =============== try catch here ==============

    setTimeout(async () => {
      try {
        await getData();
      } catch (err) {
        console.log(err);
        setError(err);
      } finally {
        setLoading(false);
      }
    }, );
  }, [url, token]);

  return { data, error, loading };
};