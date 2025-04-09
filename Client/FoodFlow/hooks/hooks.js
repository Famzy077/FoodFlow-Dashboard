"use client";

import { useEffect, useState } from "react";

const useFetchData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const userData = localStorage.getItem("my-data");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  useEffect(() => {
    const savedToken = localStorage.getItem("auth_token");
    setToken(savedToken);
  }, []);

  // useEffect(() => {
  //   if (user && token) {
  //     //console.log(token, "this is the token");
  //     const fetchData = async () => {
  //       setLoading(true);
  //       try {
  //         const response = await fetch(
  //           `${process.env.NEXT_PUBLIC_API}/seller/${user._id}`,
  //           {
  //             method: "GET",
  //             headers: {
  //               "Content-Type": "application/json",
  //               Authorization: `Bearer ${token}`,
  //             },
  //           }
  //         );
  //         if (response.ok) {
  //           const result = await response.json();
  //           setData(result);
  //         } else {
  //           throw new Error("Network response was not ok");
  //         }
  //       } catch (error) {
  //         if (error instanceof Error) {
  //           setError(error.message);
  //         } else {
  //           setError("An unknown error occurred");
  //         }
  //       } finally {
  //         setLoading(false);
  //       }
  //     };

  //     fetchData();
  //   }
  // }, [user, token]);

  return { data, loading, error };
};

export default useFetchData;
