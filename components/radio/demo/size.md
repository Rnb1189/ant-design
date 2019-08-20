---
order: 5
title:
  zh-CN: 大小
  en-US: Size
---

## zh-CN

大中小三种组合，可以和表单输入框进行对应配合。

## en-US

There are three sizes available: large, medium, and small. It can coordinate with input box.

```jsx
import { Radio, Button, Icon, Switch } from '../../index';

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
          <div>
            <Radio.Group isRtl={isRtl} defaultValue="a" size="large">
              <Radio.Button isRtl={isRtl} value="a">
                H
              </Radio.Button>
              <Radio.Button isRtl={isRtl} value="b">
                S
              </Radio.Button>
              <Radio.Button isRtl={isRtl} value="c">
                B
              </Radio.Button>
              <Radio.Button isRtl={isRtl} value="d">
                C
              </Radio.Button>
            </Radio.Group>
          </div>
          <div style={{ direction: 'ltr', marginTop: 16 }}>
            <Radio.Group isRtl={false} defaultValue="a">
              <Radio.Button isRtl={false} value="a">
                H
              </Radio.Button>
              <Radio.Button isRtl={false} value="b">
                S
              </Radio.Button>
              <Radio.Button isRtl={false} value="c">
                B
              </Radio.Button>
              <Radio.Button isRtl={false} value="d">
                C
              </Radio.Button>
            </Radio.Group>
          </div>
          <div style={{ marginTop: 16 }}>
            <Radio.Group isRtl={isRtl} defaultValue="a" size="small">
              <Radio.Button isRtl={isRtl} value="a">
                H
              </Radio.Button>
              <Radio.Button isRtl={isRtl} value="b">
                S
              </Radio.Button>
              <Radio.Button isRtl={isRtl} value="c">
                B
              </Radio.Button>
              <Radio.Button isRtl={isRtl} value="d">
                C
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
