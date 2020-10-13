import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Pagination from "./Pagination";
import Posts from "./post";
import axios from "axios";
import superagent from "superagent";


const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const MainPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(20);

 console.log(posts)
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
        const res = await axios.get(
           "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=84f46ae4-4bc6-48f7-8ce4-f7fa6d8b861a",
          { params: { start: 1, limit: 5000 } }
        );
        setPosts(res.data.data);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <React.Fragment>
      <Wrapper>
        <Title>Crypto charts</Title>
      </Wrapper>
      <Posts posts={posts} loading={loading} />
    </React.Fragment>
  );
};
export default MainPage;
