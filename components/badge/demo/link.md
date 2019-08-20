---
order: 3
title:
  zh-CN: 可点击
  en-US: Clickable
---

## zh-CN

用 a 标签进行包裹即可。

## en-US

The badge can be wrapped with `a` tag to make it linkable.

```jsx
import { Badge, Icon, Switch } from '../../index';

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
        <a href="#">
          <Badge isRtl={isRtl} count={5}>
            <span className="head-example" />
          </Badge>
        </a>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```
