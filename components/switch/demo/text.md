---
order: 2
title:
  zh-CN: 文字和图标
  en-US: Text & icon
---

## zh-CN

带有文字和图标。

## en-US

With text and icon.

```jsx
import { Switch, Icon } from '../../index';

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
    return (
      <div>
        <Switch checkedChildren="Rtl" unCheckedChildren="Ltr" onChange={this.toggleRtl} />
        <br />
        <div>
          <Switch isRtl={isRtl} checkedChildren="开" unCheckedChildren="关" defaultChecked />
          <br />
          <Switch isRtl={isRtl} checkedChildren="1" unCheckedChildren="0" />
          <br />
          <Switch
            isRtl={isRtl}
            checkedChildren={<Icon type="check" />}
            unCheckedChildren={<Icon type="close" />}
            defaultChecked
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```
