import { useState, useEffect } from "react";

const FetchData = (url: string) => {
  const [state, setState] = useState({ data: "", loading: true });

  useEffect(() => {
    setState({ data: "", loading: true });
    fetch(url)
      .then((response) => response.text())
      .then((data) => {
        setState({ data: data, loading: false });
      });
  }, []);

  return state;
};

export default FetchData;
