---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

## zh-CN

基础分页。

## en-US

Basic pagination.

```jsx
import { Pagination, Switch } from '../../index';

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
        <div style={{}}>
          <Pagination isRtl={isRtl} defaultCurrent={1} total={50} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```
