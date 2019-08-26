---
order: 2
title:
  zh-CN: 自定义选项
  en-US: Customized
---

## zh-CN

也可以直接传 `AutoComplete.Option` 作为 `AutoComplete` 的 `children`，而非使用 `dataSource`。

## en-US

You could pass `AutoComplete.Option` as children of `AutoComplete`, instead of using `dataSource`。

```jsx
import { AutoComplete, Switch } from '../../index';

const { Option } = AutoComplete;

class Complete extends React.Component {
  state = { isRtl: false, result: [] };

  toggleRtl = () => {
    this.setState({ isRtl: !this.state.isRtl });
  };

  handleSearch = value => {
    let result;
    if (!value || value.indexOf('@') >= 0) {
      result = [];
    } else {
      result = ['gmail.com', '163.com', 'qq.com'].map(domain => `${value}@${domain}`);
    }
    this.setState({ result });
  };

  render() {
    const { result, isRtl } = this.state;
    const children = result.map(email => <Option key={email}>{email}</Option>);
    return (
      <div>
        <Switch checkedChildren="Rtl" unCheckedChildren="Ltr" onChange={this.toggleRtl} />
        <br />
        <div>
          <AutoComplete
            style={{ width: 200 }}
            onSearch={this.handleSearch}
            placeholder="input here"
          >
            {children}
          </AutoComplete>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Complete />, mountNode);
```
