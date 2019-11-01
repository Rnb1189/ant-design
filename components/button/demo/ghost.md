---
order: 8
title:
  zh-CN: 幽灵按钮
  en-US: Ghost Button
---

## zh-CN

幽灵按钮将按钮的内容反色，背景变为透明，常用在有色背景上。

## en-US

`ghost` property will make button's background transparent, it is commonly used in colored background.

```jsx
import { Button, Icon, Switch } from '../../index';

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
        <div style={dirStyle}>
          <div style={{ background: 'rgb(190, 200, 200)', padding: '26px 16px 16px' }}>
            <Button isRtl={isRtl} type="primary" ghost>
              Primary
            </Button>
            <Button isRtl={isRtl} ghost>
              Default
            </Button>
            <Button isRtl={isRtl} type="dashed" ghost>
              Dashed
            </Button>
            <Button isRtl={isRtl} type="danger" ghost>
              danger
            </Button>
            <Button isRtl={isRtl} type="success" ghost>
              success(new)
            </Button>
            <Button isRtl={isRtl} type="warning" ghost>
              warning(new)
            </Button>

            <Button isRtl={isRtl} type="link" ghost>
              link
            </Button>
          </div>
          ,
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```
