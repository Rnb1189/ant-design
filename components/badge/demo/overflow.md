---
order: 2
title:
  zh-CN: 封顶数字
  en-US: Overflow Count
---

## zh-CN

超过 `overflowCount` 的会显示为 `${overflowCount}+`，默认的 `overflowCount` 为 `99`。

## en-US

`${overflowCount}+` is displayed when count is larger than `overflowCount`. The default value of `overflowCount` is `99`.

```jsx
import { Badge, Switch } from '../../index';

class App extends React.Component {
  state = {
    isRtl: false,
  };

  toggleRtl = () => {
    this.setState({ isRtl: !this.state.isRtl });
  };

  render() {
    const isRtl = this.state.isRtl;
    return (
      <div>
        <Switch checkedChildren="Rtl" unCheckedChildren="Ltr" onChange={this.toggleRtl} />
        <br />
        <br />
        <div>
          <Badge isRtl={isRtl} count={99}>
            <a href="#" className="head-example" />
          </Badge>
          <Badge isRtl={isRtl} count={100}>
            <a href="#" className="head-example" />
          </Badge>
          <Badge isRtl={isRtl} count={99} overflowCount={10}>
            <a href="#" className="head-example" />
          </Badge>
          <Badge isRtl={isRtl} count={1000} overflowCount={999}>
            <a href="#" className="head-example" />
          </Badge>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```
