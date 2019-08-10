---
order: 6
title:
  zh-CN: 步骤运行错误
  en-US: Error status
---

## zh-CN

使用 Steps 的 `status` 属性来指定当前步骤的状态。

## en-US

By using `status` of `Steps`, you can specify the state for current step.

```jsx
import { Steps, Switch } from '../../index';
const { Step } = Steps;

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
        <div>
          <Steps isRtl={isRtl} current={1} status="error">
            <Step title="Finished" description="This is a description" />
            <Step title="In Process" description="This is a description" />
            <Step title="Waiting" description="This is a description" />
          </Steps>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```
