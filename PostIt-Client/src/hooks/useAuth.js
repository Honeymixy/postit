/** @format */

import { useState, useEffect } from "react";

export const useAuth = (endPoint, method, body, token) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    if (method === "POST") {
      try {
        let fetchData = async () => {
          let response = fetch(`${endPoint}`, {
            method: method,
            headers: {
              Authorization: `Token ${token}`,
              "Content-Type": "application/json",
            },
            body: body,
          });
          let data = await response.json();
          setData(data);
        };
        fetchData();
      } catch (err) {
        console.log(err);
        setError(err);
      } finally {
        setLoading(false);
      }
    }
  }, [endPoint]);

  return { data, error, loading };
};
