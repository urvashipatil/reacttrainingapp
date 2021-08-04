import { response } from "msw";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function useFetch(url) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);
  const [options, setOptions] = useState({});

  useEffect(() => {
    if (!isLoading) {
      return false;
    }

    callApi(options);
  }, [isLoading, url]);

  const doFetch = (options) => {
    setIsLoading(true);
    setOptions({ ...options });
  };

  const callApi = async (options) => {
    const resp = await axios.create({
      url,
      options,
    });
    setIsLoading(false);
    if (resp.data) {
      setResponse(resp.data);
    }
  };

  return [isLoading, response, error, doFetch];
}
