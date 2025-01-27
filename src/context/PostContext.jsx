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
    <PostContext.Provider value={{ posts, setPosts }}>
      {children}
    </PostContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(PostContext);
};

export { useGlobalContext, PostProvider };
