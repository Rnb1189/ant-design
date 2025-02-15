---
order: 8
title:
  en-US: Customized filter panel
  zh-CN: 自定义筛选菜单
---

## zh-CN

通过 `filterDropdown` 自定义的列筛选功能，并实现一个搜索列的示例。

## en-US

Implement a customized column search example via `filterDropdown`.

```jsx
import { Table, Input, Button, Icon, Switch } from '../../index';
import Highlighter from 'react-highlight-words';

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Joe Black',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Jim Green',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park',
  },
];

class App extends React.Component {
  state = { isRtl: false, searchText: '' };

  toggleRtl = () => {
    this.setState({
      isRtl: !this.state.isRtl,
    });
  };

  getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8, direction: this.state.isRtl ? 'rtl' : 'ltr' }}>
        <Input
          isRtl={this.state.isRtl}
          ref={node => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => this.handleSearch(selectedKeys, confirm)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Button
          isRtl={this.state.isRtl}
          type="primary"
          onClick={() => this.handleSearch(selectedKeys, confirm)}
          icon="search"
          size="small"
          style={{
            width: 90,
            marginRight: this.state.isRtl ? 0 : 8,
            marginLeft: this.state.isRtl ? 8 : 0,
          }}
        >
          Search
        </Button>
        <Button
          isRtl={this.state.isRtl}
          onClick={() => this.handleReset(clearFilters)}
          size="small"
          style={{ width: 90 }}
        >
          Reset
        </Button>
      </div>
    ),
    filterIcon: filtered => (
      <Icon type="search" style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => this.searchInput.select());
      }
    },
    render: text => (
      <Highlighter
        isRtl={this.state.isRtl}
        highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
        searchWords={[this.state.searchText]}
        autoEscape
        textToHighlight={text.toString()}
      />
    ),
  });

  handleSearch = (selectedKeys, confirm) => {
    confirm();
    this.setState({ searchText: selectedKeys[0] });
  };

  handleReset = clearFilters => {
    clearFilters();
    this.setState({ searchText: '' });
  };

  render() {
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        width: '30%',
        ...this.getColumnSearchProps('name'),
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
        width: '20%',
        ...this.getColumnSearchProps('age'),
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
        ...this.getColumnSearchProps('address'),
      },
    ];
    const isRtl = this.state.isRtl;
    return (
      <div>
        <Switch checkedChildren="Rtl" unCheckedChildren="Ltr" onChange={this.toggleRtl} />
        <br />
        <Table isRtl={isRtl} columns={columns} dataSource={data} />{' '}
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```
