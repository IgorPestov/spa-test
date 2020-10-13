import React from "react";
import { Table } from "antd";
import "antd/dist/antd.css";
const Posts = ({ posts, loading }) => {
  const data = [];
  posts.map((el) => {
    data.push({
      cmc_rank: el.cmc_rank,
      name: el.name,
      price: el.quote.USD.price,
      volume_24h: el.quote.USD.volume_24h,
      market_cap: el.quote.USD.market_cap,
    });
  });

  const columns = [
    {
      title: "Cmc_rank",
      dataIndex: "cmc_rank",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Price",
      dataIndex: "price",
    },
    {
      title: "Volume_24h",
      dataIndex: "volume_24h",
    },

    {
      title: "Market_cap",
      dataIndex: "market_cap",
    },
  ];
  return <Table columns={columns} dataSource={data} />;
};

export default Posts;
