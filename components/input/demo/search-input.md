---
order: 4
title:
  zh-CN: 搜索框
  en-US: Search box
---

## zh-CN

带有搜索按钮的输入框，`2.5.0` 时新增。

## en-US

Example of creating a search box by grouping a standard input with a search button, added in `2.5.0`.

```jsx
import { Input, Switch } from '../../index';
const { Search } = Input;

class App extends React.Component {
  state = {
    isRtl: false,
  };

  toggleRtl = () => {
    this.setState({
      ...this.state,
      isRtl: !this.state.isRtl,
    });
  };
  render() {
    const isRtl = this.state.isRtl;
    const dirStyle = { direction: `${isRtl ? 'rtl' : 'ltr'}` };

    return (
      <div>
        <Switch checkedChildren="Rtl" unCheckedChildren="Ltr" onChange={this.toggleRtl} />
        <br />
        <div>
          <Search
            isRtl={isRtl}
            placeholder="input search text"
            onSearch={value => console.log(value)}
            style={{ width: 200 }}
          />
          <br />
          <br />
          <Search
            isRtl={isRtl}
            placeholder="input search text"
            onSearch={value => console.log(value)}
            enterButton
          />
          <br />
          <br />
          <Search
            isRtl={isRtl}
            placeholder="input search text"
            enterButton="Search"
            size="large"
            onSearch={value => console.log(value)}
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```
