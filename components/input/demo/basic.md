---
order: 0
title:
  zh-CN: 基本使用
  en-US: Basic usage
---

## zh-CN

基本使用。

## en-US

Basic usage example.

```jsx
import { Input, Switch } from '../../index';

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
        <div style={{}}>
          <Input isRtl={isRtl} placeholder="Basic usage" />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```
