---
order: 3
title:
  zh-CN: 不可用状态
  en-US: Disabled
---

## zh-CN

添加 `disabled` 属性即可让按钮处于不可用状态，同时按钮样式也会改变。

## en-US

To mark a button as disabled, add the `disabled` property to the `Button`.

```jsx
import { Button, Icon, Switch } from '../../index';

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
        <div style={dirStyle}>
          <Button isRtl={isRtl} type="primary">
            Primary
          </Button>
          <Button isRtl={isRtl} type="primary" disabled>
            Primary(disabled )
          </Button>
          <br />
          <Button isRtl={isRtl}>Default</Button>
          <Button isRtl={isRtl} disabled>
            Default(disabled)
          </Button>
          <br />
          <Button isRtl={isRtl} type="dashed">
            Dashed
          </Button>
          <Button isRtl={isRtl} type="dashed" disabled>
            Dashed(disabled)
          </Button>
          <br />
          <Button isRtl={isRtl} type="link">
            Link
          </Button>
          <Button isRtl={isRtl} type="link" disabled>
            Link(disabled)
          </Button>
          <div style={{ padding: '8px 8px 0 8px', background: 'rgb(190, 200, 200)' }}>
            <Button isRtl={isRtl} ghost>
              Ghost
            </Button>
            <Button isRtl={isRtl} ghost disabled>
              Ghost(disabled)
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```
