---
order: 1
title:
  zh-CN: 带有图标的
  en-US: With an Icon
---

## zh-CN

图标放在文字前面。

## en-US

The icon should be placed in front of the text.

```jsx
import { Breadcrumb, Switch, Icon } from '../../index';

class App extends React.Component {
  state = {
    isRtl: false,
  };

  toggleRtl = () => {
    this.setState({ isRtl: !this.state.isRtl });
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
        <div>
          <Breadcrumb isRtl={isRtl}>
            <Breadcrumb.Item href="">
              <Icon type="home" />
            </Breadcrumb.Item>
            <Breadcrumb.Item href="">
              <Icon type="user" />
              <span>Application List</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item>Application</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```
