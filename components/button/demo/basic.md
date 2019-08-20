---
order: 0
title:
  zh-CN: 按钮类型
  en-US: Type
---

## zh-CN

按钮有五种类型：主按钮、次按钮、虚线按钮、危险按钮和链接按钮。主按钮在同一个操作区域最多出现一次。

## en-US

There are `primary` button, `default` button, `dashed` button, `danger` button and `link` button in antd.

```jsx
import { Button, Switch } from '../../index';

class App extends React.Component {
  state = {
    isRtl: false,
  };

  toggleRtl = () => {
    this.setState({ isRtl: !this.state.isRtl });
  };

  render() {
    const dirStyle = { direction: `${this.state.isRtl ? 'rtl' : 'ltr'}` };
    return (
      <div>
        <Switch checkedChildren="Rtl" unCheckedChildren="Ltr" onChange={this.toggleRtl} />
        <br />
        <div style={dirStyle}>
          <Button isRtl={this.state.isRtl} type="primary">
            Primary
          </Button>
          <Button isRtl={this.state.isRtl}>Default</Button>
          <Button isRtl={this.state.isRtl} type="dashed">
            Dashed
          </Button>
          <Button isRtl={this.state.isRtl} type="danger">
            Danger
          </Button>
          <Button isRtl={this.state.isRtl} type="link">
            Link
          </Button>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```
