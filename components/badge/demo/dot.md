---
order: 3
title:
  zh-CN: 讨嫌的小红点
  en-US: Red badge
---

## zh-CN

没有具体的数字。

## en-US

This will simply display a red badge, without a specific count. If count equals 0, it won't display the dot.

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
        <div>
          <Badge isRtl={isRtl} dot>
            <Icon type="notification" />
          </Badge>
          <Badge isRtl={isRtl} count={0} dot>
            <Icon type="notification" />
          </Badge>
          <Badge isRtl={isRtl} dot>
            <a href="#">Link something</a>
          </Badge>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```

<style>
.anticon-notification {
  width: 16px;
  height: 16px;
  line-height: 16px;
  font-size: 16px;
}
</style>
