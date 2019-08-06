---
order: 1
title:
  zh-CN: 半星
  en-US: Half star
---

## zh-CN

支持选中半星。

## en-US

Support select half star.

```jsx
import { Rate, Switch } from '../../index';

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
          <Rate isRtl={isRtl} allowHalf defaultValue={2.5} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```
