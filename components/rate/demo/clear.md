---
order: 4
title:
  zh-CN: 清除
  en-US: Clear star
---

## zh-CN

支持允许或者禁用清除。

## en-US

Support set allow to clear star when click again.

```jsx
import { Rate, Switch } from '../../index';

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
        <div>
          <Rate isRtl={isRtl} defaultValue={3} />
          <span className="ant-rate-text">allowClear: true</span>
          <br />
          <Rate isRtl={isRtl} allowClear={false} defaultValue={3} />
          <span className="ant-rate-text">allowClear: false</span>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```
