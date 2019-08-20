---
order: 2
title:
  zh-CN: 改变
  en-US: Changer
---

## zh-CN

改变每页显示条目数。

## en-US

Change `pageSize`.

```jsx
import { Pagination, Switch } from '../../index';

class App extends React.Component {
  state = {
    isRtl: false,
  };

  toggleRtl = () => {
    this.setState({ isRtl: !this.state.isRtl });
  };

  onShowSizeChange = (current, pageSize) => {
    console.log(current, pageSize);
  };

  render() {
    const isRtl = this.state.isRtl;
    const dirStyle = { direction: `${isRtl ? 'rtl' : 'ltr'}` };
    return (
      <div>
        <Switch checkedChildren="Rtl" unCheckedChildren="Ltr" onChange={this.toggleRtl} />
        <br />
        <div>
          <Pagination
            isRtl={isRtl}
            showSizeChanger
            onShowSizeChange={this.onShowSizeChange}
            defaultCurrent={3}
            total={500}
          />
          <br />
          <Pagination
            isRtl={isRtl}
            showSizeChanger
            onShowSizeChange={this.onShowSizeChange}
            defaultCurrent={3}
            total={500}
            disabled
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```
