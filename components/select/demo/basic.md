---
order: 0
title:
  zh-CN: 基本使用
  en-US: Basic Usage
---

## zh-CN

基本使用。

## en-US

Basic Usage .

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
        <div>
          <Select
            isRtl={isRtl}
            defaultValue="lucy"
            style={{ width: 120 }}
            onChange={this.handleChange}
          >
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="disabled" disabled>
              Disabled
            </Option>
            <Option value="Yiminghe">yiminghe</Option>
          </Select>
          <Select isRtl={isRtl} defaultValue="lucy" style={{ width: 120 }} disabled>
            <Option value="lucy">Lucy</Option>
          </Select>
          <Select isRtl={isRtl} defaultValue="lucy" style={{ width: 120 }} loading>
            <Option value="lucy">Lucy</Option>
          </Select>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```
