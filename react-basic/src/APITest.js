import { useState } from "react";
import axios from "axios";
/*

When using the Fetch API, the .catch block is only triggered if there is a network error (e.g., no internet connection). It does not trigger for HTTP error responses like 404 (Not Found), 500 (Internal Server Error), etc. Instead, these are considered successful responses by Fetch in terms of resolving the promise; it's just that the HTTP response status indicates a server error or similar.



*/

const url = "http://localhost:3004/list";

export default function APITest() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);


  //use fetch to get data from server
  const handleLoadData = () => {
    setLoading(true);
    fetch(url)
      .then((response) => {
        console.log(response);
        if (!response.ok) {
          // Throw an error with the status text, which can be handled in the catch block
          throw new Error(
            `response not ok: ${response.status} ${response.statusText}`)
        }
        return response.json();
      })
      .then((data) => {
        setLoading(false);
        setData(data);
      })
      .catch((error) => {
        setLoading(false);
        console.log("error happens:  " + error);
      });
  };

  //use axios to get data from server
  const handleLoadData2 = () => {
    setLoading(true);
    getList();
    // sleep2(fetchData, 2000);

  };

  //axios async await way
  const getList = async ()=>{
    try {
      await sleep(2000);

      const response = await axios.get(url);
      console.log(response);
      setData(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log("error happens:  " + error);
    }
  }

  //axios chaining way
  const fetchData = ()=>{
    sleep(2000);
    axios.get(url).then(
        (response) => {
            console.log(response);
            setData(response.data);
            setLoading(false);
        }
    ).catch(
        (error) => {
            setLoading(false);
            console.log("error happens:  " + error);
        }
    );

  }


  //mimic loading
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }


  function sleep2(cb, ms) {
    setTimeout(()=>cb(), ms);
  }


  return (
    <div>
      <h2>API Test</h2>

      <button onClick={handleLoadData2}>load data</button>

      {loading ? (
        <h2>loading...</h2>
      ) : (
        data.map((item, index) => {
          return <p key={index}>{JSON.stringify(item)}</p>;
        })
      )}
    </div>
  );
}
