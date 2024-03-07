import { useState } from "react";
import axios from "axios";
/*

When using the Fetch API, the .catch block is only triggered if there is a network error (e.g., no internet connection). It does not trigger for HTTP error responses like 404 (Not Found), 500 (Internal Server Error), etc. Instead, these are considered successful responses by Fetch in terms of resolving the promise; it's just that the HTTP response status indicates a server error or similar.



*/

const url = "http://localhost:3004/list";

export default function APITest() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState("");

  //use fetch to get data from server
  const handleLoadData = () => {
    setLoading(true);
    fetch(url)
      .then((response) => {
        console.log(response);
        if (!response.ok) {
          // Throw an error with the status text, which can be handled in the catch block
          throw new Error(
            `response not ok: ${response.status} ${response.statusText}`
          );
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
  const getList = async () => {
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
  };

  //axios chaining way
  const fetchData = () => {
    sleep(2000);
    axios
      .get(url)
      .then((response) => {
        console.log(response);
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log("error happens:  " + error);
      });
  };

  //mimic loading
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  function sleep2(cb, ms) {
    setTimeout(() => cb(), ms);
  }

  //use axios to post data to server
  const handleOnChange = (e) => {
    // console.log(e.target.value);
    setContent(e.target.value);
  };

  //   const handleAddData = () => {
  //     if (content) {
  //       const usertest = {
  //         uid: 123123,
  //         avatar: "http://toutiao.itheima.net/resources/images/98.jpg",
  //         uname: "周杰",
  //       };
  //       axios
  //         .post(url, { id: 11, content: content, like: 100, user: usertest })
  //         .then((response) => {
  //           console.log("post: =============");
  //           console.log(response);
  //           setContent("");
  //           getList();
  //         })
  //         .catch((error) => {
  //           console.log("error happens:  " + error);
  //         });
  //     }
  //   };

  // aync await way
  const handleAddData = async () => {
    if (content) {
      const usertest = {
        uid: 123123,
        avatar: "http://toutiao.itheima.net/resources/images/98.jpg",
        uname: "周杰",
      };
      try {
        const res = await axios.post(url, {
          id: 11,
          content: content,
          like: 100,
          user: usertest,
        });
        console.log("post: =============");
        console.log(res);
        setContent("");
        await getList(); //异步操作都要加 await
      } catch (error) {
        console.log("error happens:  " + error);
      }
    }
  };




  const handleDelData = () => {
    axios
      .delete(url + "/11")
      .then((response) => {
        console.log("del: =============");
        console.log(response);
        getList();
      })
      .catch((error) => {
        console.log("error happens:  " + error);
      });
  };

  //这里的input 用 ref 也可以
  return (
    <div>
      <h2>API Test</h2>
      <label htmlFor="content">input content</label> <br />
      <input
        type="text"
        name="content"
        id="content"
        placeholder="your comment"
        value={content}
        onChange={handleOnChange}
      />
      <br />
      <button onClick={handleLoadData2}>load data</button>

      <button onClick={handleAddData}>add data</button>
      <button onClick={handleDelData}>del test data</button>
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
