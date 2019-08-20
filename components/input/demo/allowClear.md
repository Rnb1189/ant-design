---
order: 11
title:
  zh-CN: 带移除图标
  en-US: With clear icon
---

## zh-CN

带移除图标的输入框，点击图标删除所有内容。

## en-US

Input box with the remove icon, click the icon to delete everything.

```jsx
import { Input, Switch } from '../../index';

class App extends React.Component {
  state = {
    isRtl: false,
  };

  toggleRtl = () => {
    this.setState({ isRtl: !this.state.isRtl });
  };

  render() {
    const isRtl = this.state.isRtl;
    const dirStyle = { direction: `${isRtl ? 'rtl' : 'ltr'}` };

    return (
      <div>
        <Switch checkedChildren="Rtl" unCheckedChildren="Ltr" onChange={this.toggleRtl} />
        <br />
        <div style={{}}>
          <Input isRtl={isRtl} placeholder="input with clear icon" allowClear />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```
