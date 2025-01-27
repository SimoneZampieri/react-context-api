import { useState, createContext, useContext } from "react";
import axios from "axios";

const GlobalContext = createContext();

const PostProvider = ({ children }) => {
  const baseApiUrl = "http://localhost:3000/posts";
  const [posts, setPosts] = useState([]);

  const fetchPosts = () => {
    axios.get(baseApiUrl).then((res) => {
      setPosts(res.data);
    });
  };

  return (
    <GlobalContext.Provider value={{ posts, setPosts, fetchPosts }}>
      {children}
    </GlobalContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export { useGlobalContext, PostProvider };
