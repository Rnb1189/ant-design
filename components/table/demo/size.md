---
order: 10
title:
  en-US: size
  zh-CN: 紧凑型
---

## zh-CN

两种紧凑型的列表，小型列表只用于对话框内。

## en-US

There are two compacted table sizes: `middle` and `small`. The `small` size is used in Modals only.

```jsx
import { Table } from '../../index';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
];

ReactDOM.render(
  <div>
    <h4>Middle size table</h4>
    <Table columns={columns} dataSource={data} size="middle" />
    <h4>Small size table</h4>
    <Table columns={columns} dataSource={data} size="small" />
    <div style={{ margin: 20, backgroundColor: '#fff0f6' }}>Rtl</div>
    <h4>Middle size table</h4>
    <Table isRtl={true} columns={columns} dataSource={data} size="middle" />
    <h4>Small size table</h4>
    <Table isRtl={true} columns={columns} dataSource={data} size="small" />
  </div>,

  mountNode,
);
```

<style>#components-table-demo-size h4 { margin-bottom: 16px; }</style>
