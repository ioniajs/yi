/**
 *  @description 表格组件
 */

import { useRequest } from "ahooks";
import { Table } from "antd";
import React from "react";
import "./index.less";

const loadData = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          key: 1,
          name: "江西金磊科技",
          address: "西湖区力高滨江国际",
          phone: "0791-86659123",
        },
        {
          key: 2,
          name: "江西金磊科技",
          address: "西湖区力高滨江国际",
          phone: "0791-86659123",
        },
        {
          key: 3,
          name: "江西金磊科技",
          address: "西湖区力高滨江国际",
          phone: "0791-86659123",
        },
        {
          key: 4,
          name: "江西金磊科技",
          address: "西湖区力高滨江国际",
          phone: "0791-86659123",
        },
        {
          key: 5,
          name: "江西金磊科技",
          address: "西湖区力高滨江国际",
          phone: "0791-86659123",
        },
        {
          key: 6,
          name: "江西金磊科技",
          address: "西湖区力高滨江国际",
          phone: "0791-86659123",
        },
        {
          key: 7,
          name: "江西金磊科技",
          address: "西湖区力高滨江国际",
          phone: "0791-86659123",
        },
        {
          key: 8,
          name: "江西金磊科技",
          address: "西湖区力高滨江国际",
          phone: "0791-86659123",
        },
        {
          key: 9,
          name: "江西金磊科技",
          address: "西湖区力高滨江国际",
          phone: "0791-86659123",
        },
        {
          key: 10,
          name: "江西金磊科技",
          address: "西湖区力高滨江国际",
          phone: "0791-86659123",
        },
        {
          key: 11,
          name: "江西金磊科技",
          address: "西湖区力高滨江国际",
          phone: "0791-86659123",
        },
      ]);
    }, 3000);
  });
};

export default () => {
  const columns = [
    {
      title: "公司名称",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "地址",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "电话号码",
      dataIndex: "phone",
      key: "phone",
    },
  ];

  const { data, loading } = useRequest(() => loadData());

  return (
    <div className="wp-Table">
      <Table
        loading={loading}
        columns={columns}
        dataSource={data}
        rowSelection={{}}
      ></Table>
    </div>
  );
};
