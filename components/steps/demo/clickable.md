---
order: 10
title:
  zh-CN: 可点击
  en-US: Clickable
---

## zh-CN

设置 `onChange` 后，Steps 变为可点击状态。

## en-US

Setting `onChange` makes Steps clickable.

```jsx
import { Steps, Divider, Switch } from '../../index';
const { Step } = Steps;

class App extends React.Component {
  state = {
    isRtl: false,
    current: 0,
  };

  toggleRtl = () => {
    this.setState({
      ...this.state,
      isRtl: !this.state.isRtl,
    });
  };

  onChange = current => {
    console.log('onChange:', current);
    this.setState({ current });
  };

  render() {
    const { current, isRtl } = this.state;
    return (
      <div>
        <Switch checkedChildren="Rtl" unCheckedChildren="Ltr" onChange={this.toggleRtl} />
        <br />
        <div>
          <Steps isRtl={isRtl} current={current} onChange={this.onChange}>
            <Step title="Step 1" description="This is a description." />
            <Step title="Step 2" description="This is a description." />
            <Step title="Step 3" description="This is a description." />
          </Steps>

          <Divider />

          <Steps isRtl={isRtl} current={current} onChange={this.onChange} direction="vertical">
            <Step title="Step 1" description="This is a description." />
            <Step title="Step 2" description="This is a description." />
            <Step title="Step 3" description="This is a description." />
          </Steps>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```
