---
order: 6
title:
  zh-CN: 状态点
  en-US: Status
---

## zh-CN

用于表示状态的小圆点。

## en-US

Standalone badge with status.

```jsx
import { Badge, Switch } from '../../index';

class App extends React.Component {
  state = {
    isRtl: false,
  };

  toggleRtl = () => {
    this.setState({ isRtl: !this.state.isRtl });
  };

  render() {
    const isRtl = this.state.isRtl;
    return (
      <div>
        <Switch checkedChildren="Rtl" unCheckedChildren="Ltr" onChange={this.toggleRtl} />
        <br />
        <br />
        <div>
          <Badge isRtl={isRtl} status="success" />
          <Badge isRtl={isRtl} status="error" />
          <Badge isRtl={isRtl} status="default" />
          <Badge isRtl={isRtl} status="processing" />
          <Badge isRtl={isRtl} status="warning" />
          <br />
          <Badge isRtl={isRtl} status="success" text="Success" />
          <br />
          <Badge isRtl={isRtl} status="error" text="Error" />
          <br />
          <Badge isRtl={isRtl} status="default" text="Default" />
          <br />
          <Badge isRtl={isRtl} status="processing" text="Processing" />
          <br />
          <Badge isRtl={isRtl} status="warning" text="Warning" />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```
