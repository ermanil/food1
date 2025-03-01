import { useEffect, useState } from "react";
import yelp from "../api/yelp";
import { mockData } from "./data";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "san jose",
        },
      });
      const data = response.data ? response.data.businesses : mockData;
      setResults(data);
    } catch (err) {
      setErrorMessage("Something went wrong");
    }
  };

  // Call searchApi when component
  // is first rendered.  BAD CODE!
  // searchApi('pasta');
  useEffect(() => {
    searchApi("pasta");
  }, []);

  return [searchApi, results, errorMessage];
};
