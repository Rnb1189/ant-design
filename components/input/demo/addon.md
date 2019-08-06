---
order: 2
title:
  zh-CN: 前置/后置标签
  en-US: Pre / Post tab
---

## zh-CN

用于配置一些固定组合。

## en-US

Using pre & post tabs example.

```jsx
import { Input, Tooltip, Select, Icon, Switch } from '../../index';
const { Option } = Select;

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
    const selectBefore = (
      <Select defaultValue="Http://" style={{ width: 90 }}>
        <Option value="Http://">Http://</Option>
        <Option value="Https://">Https://</Option>
      </Select>
    );
    const selectAfter = (
      <Select defaultValue=".com" style={{ width: 80 }}>
        <Option value=".com">.com</Option>
        <Option value=".jp">.jp</Option>
        <Option value=".cn">.cn</Option>
        <Option value=".org">.org</Option>
      </Select>
    );

    const isRtl = this.state.isRtl;
    const dirStyle = { direction: `${isRtl ? 'rtl' : 'ltr'}` };
    return (
      <div>
        <Switch checkedChildren="Rtl" unCheckedChildren="Ltr" onChange={this.toggleRtl} />
        <br />
        <div style={{}}>
          <div style={{ marginBottom: 16 }}>
            <Input isRtl={isRtl} addonBefore="Http://" addonAfter=".com" defaultValue="mysite" />
          </div>
          <div style={{ marginBottom: 16 }}>
            <Input
              isRtl={isRtl}
              addonBefore={selectBefore}
              addonAfter={selectAfter}
              defaultValue="mysite"
            />
          </div>
          <div style={{ marginBottom: 16 }}>
            <Input isRtl={isRtl} addonAfter={<Icon type="setting" />} defaultValue="mysite" />
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```
