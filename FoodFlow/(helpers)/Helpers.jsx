"use client";

import { useEffect, useState } from "react";

export const Token = () => {
  const token = localStorage.getItem("token");
  return token;
};

export const useUser = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [userId, setUserId] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedData = localStorage.getItem("my-data");
    if (storedData) {
      try {
        const parsedData = JSON.parse(storedData);
        setUserId(parsedData._id);
      } catch (error) {
        setError("Error parsing localStorage data");
      }
    }
  }, []);

  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    setToken(savedToken);
  }, []);

  return { data, error, userId, token };
};

export const useSellerDetails = () => {
  const [details, setDetails] = useState(null);
  const [error, setError] = useState(null);
  const { userId } = useUser();
  const token = Token();

  const getDetails = async () => {
    if (userId) {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API}/seller/${userId}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await response.json();
        setDetails(data.data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unknown error occurred");
        }
      }
    }
  };

  useEffect(() => {
    getDetails();
  }, [userId, token]);

  return { details, error, getDetails };
};
