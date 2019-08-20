---
order: 1
title:
  zh-CN: 带搜索框
  en-US: Select with search field
---

## zh-CN

展开后可对选项进行搜索。

## en-US

Search the options while expanded.

```jsx
import { Select, Switch } from '../../index';
const { Option } = Select;

class App extends React.Component {
  state = {
    isRtl: false,
  };

  toggleRtl = () => {
    this.setState({ isRtl: !this.state.isRtl });
  };

  onChange = value => {
    console.log(`selected ${value}`);
  };

  onBlur = () => {
    console.log('blur');
  };

  onFocus = () => {
    console.log('focus');
  };

  onSearch = val => {
    console.log('search:', val);
  };

  render() {
    const isRtl = this.state.isRtl;
    const dirStyle = { direction: `${isRtl ? 'rtl' : 'ltr'}` };
    return (
      <div>
        <Switch checkedChildren="Rtl" unCheckedChildren="Ltr" onChange={this.toggleRtl} />
        <br />
        <Select
          isRtl={isRtl}
          showSearch
          style={{ width: 200 }}
          placeholder="Select a person"
          optionFilterProp="children"
          onChange={this.onChange}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          onSearch={this.onSearch}
          filterOption={(input, option) =>
            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          <Option value="امید">امید</Option>
          <Option value="علی">علی</Option>
          <Option value="علی رضا">علی رضا</Option>
        </Select>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```
