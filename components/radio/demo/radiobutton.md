---
order: 3
title:
  zh-CN: 按钮样式
  en-US: radio style
---

## zh-CN

按钮样式的单选组合。

## en-US

The combination of radio button style.

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
  onChange = e => {
    console.log(`radio checked:${e.target.value}`);
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
            <Radio.Group isRtl={isRtl} onChange={this.onChange} defaultValue="a">
              <Radio.Button value="a">HH</Radio.Button>
              <Radio.Button value="b">SS</Radio.Button>
              <Radio.Button value="c">BB</Radio.Button>
              <Radio.Button value="d">CC</Radio.Button>
            </Radio.Group>
          </div>
          <div style={{ marginTop: 16 }}>
            <Radio.Group isRtl={false} onChange={this.onChange} defaultValue="a">
              <Radio.Button value="a">H</Radio.Button>
              <Radio.Button value="b" disabled>
                S
              </Radio.Button>
              <Radio.Button value="c">B</Radio.Button>
              <Radio.Button value="d">C</Radio.Button>
            </Radio.Group>
          </div>
          <div style={{ marginTop: 16 }}>
            <Radio.Group disabled onChange={this.onChange} defaultValue="a">
              <Radio.Button value="a">H</Radio.Button>
              <Radio.Button value="b">S</Radio.Button>
              <Radio.Button value="c">B</Radio.Button>
              <Radio.Button value="d">C</Radio.Button>
            </Radio.Group>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```
