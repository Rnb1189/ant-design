---
order: 17
title:
  en-US: Fixed Header
  zh-CN: 固定表头
---

## zh-CN

方便一页内展示大量数据。

需要指定 column 的 `width` 属性，否则列头和内容可能不对齐。如果指定 `width` 不生效，请尝试建议留一列不设宽度以适应弹性布局，或者检查是否有[超长连续字段破坏布局](https://github.com/ant-design/ant-design/issues/13825#issuecomment-449889241)。

## en-US

Display large amounts of data in scrollable view.

> Specify width of columns if header and cell do not align properly. If specified width is not working, please try to leave one column at least without width to fit fluid layout, or make sure no [long word to break table layout](https://github.com/ant-design/ant-design/issues/13825#issuecomment-449889241).

```jsx
import { Table } from '../../index';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    width: 150,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    width: 150,
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}

ReactDOM.render(
  <div>
    <Table columns={columns} dataSource={data} pagination={{ pageSize: 50 }} scroll={{ y: 240 }} />
    <div style={{ margin: 20, backgroundColor: '#fff0f6' }}>Rtl</div>
    <Table
      isRtl={true}
      columns={columns}
      dataSource={data}
      pagination={{ pageSize: 50 }}
      scroll={{ y: 240 }}
    />
  </div>,
  mountNode,
);
```
