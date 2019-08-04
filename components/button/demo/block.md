---
order: 9
title:
  zh-CN: block 按钮
  en-US: block Button
---

## zh-CN

`block`属性将使按钮适合其父宽度。

## en-US

`block` property will make the button fit to its parent width.

```jsx
import { Button, Switch } from '../../index';

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
    const dirStyle = { direction: `${this.state.isRtl ? 'rtl' : 'ltr'}` };
    return (
      <div>
        <Switch checkedChildren="Rtl" unCheckedChildren="Ltr" onChange={this.toggleRtl} />
        <br />
        <div style={dirStyle}>
          <Button type="primary" block>
            Primary
          </Button>
          <Button block>Default</Button>
          <Button type="dashed" block>
            Dashed
          </Button>
          <Button type="danger" block>
            Danger
          </Button>
          <Button type="link" block>
            Link
          </Button>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```
