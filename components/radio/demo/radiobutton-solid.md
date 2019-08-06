---
order: 6
title:
  zh-CN: 填底的按钮样式
  en-US: Solid radio button
---

## zh-CN

实色填底的单选按钮样式。

## en-US

Solid radio button style.

```jsx
import { Radio, Button, Icon, Switch } from '../../index';

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
          <div>
            <Radio.Group isRtl={isRtl} defaultValue="a" buttonStyle="solid">
              <Radio.Button isRtl={isRtl} value="a">
                Hangzhou
              </Radio.Button>
              <Radio.Button isRtl={isRtl} value="b">
                Shanghai
              </Radio.Button>
              <Radio.Button isRtl={isRtl} value="c">
                Beijing
              </Radio.Button>
              <Radio.Button isRtl={isRtl} value="d">
                Chengdu
              </Radio.Button>
            </Radio.Group>
          </div>
          <div style={{ marginTop: 16 }}>
            <Radio.Group isRtl={isRtl} defaultValue="c" buttonStyle="solid">
              <Radio.Button isRtl={isRtl} value="a">
                Hangzhou
              </Radio.Button>
              <Radio.Button isRtl={isRtl} value="b" disabled>
                Shanghai
              </Radio.Button>
              <Radio.Button isRtl={isRtl} value="c">
                Beijing
              </Radio.Button>
              <Radio.Button isRtl={isRtl} value="d">
                Chengdu
              </Radio.Button>
            </Radio.Group>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```
