---
order: 6
title:
  zh-CN: 分组
  en-US: Option Group
---

## zh-CN

用 `OptGroup` 进行选项分组。

## en-US

Using `OptGroup` to group the options.

```jsx
import { Select, Icon, Divider, Switch } from '../../index';
const { Option, OptGroup } = Select;

class App extends React.Component {
  state = {
    isRtl: false,
  };

  toggleRtl = () => {
    this.setState({ isRtl: !this.state.isRtl });
  };

  handleChange = value => {
    console.log(`selected ${value}`);
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
          defaultValue="lucy"
          style={{ width: 200 }}
          onChange={this.handleChange}
        >
          <OptGroup label="Manager">
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
          </OptGroup>
          <OptGroup label="Engineer">
            <Option value="Yiminghe">yiminghe</Option>
          </OptGroup>
        </Select>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```
