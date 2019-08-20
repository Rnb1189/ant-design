---
order: 10
title:
  zh-CN: 密码框
  en-US: Password box
---

## zh-CN

密码框，版本 3.12.0 中新增。

## en-US

Input type of password and added in 3.12.0.

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
          <Input.Password isRtl={isRtl} placeholder="input password" />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```
