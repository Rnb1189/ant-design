---
order: 11
title:
  zh-CN: 导航步骤
  en-US: Navigation Steps
---

## zh-CN

导航类型的步骤条。

## en-US

Navigation steps.

```jsx
import { Steps, Switch } from '../../index';

const { Step } = Steps;

const stepStyle = {
  marginBottom: 60,
  boxShadow: '0px -1px 0 0 #e8e8e8 inset',
};

class Demo extends React.Component {
  state = { isRtl: false, current: 0 };

  toggleRtl = () => {
    this.setState({ isRtl: !this.state.isRtl });
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
          <Steps
            isRtl={isRtl}
            type="navigation"
            size="small"
            current={current}
            onChange={this.onChange}
            style={stepStyle}
          >
            <Step
              title="Step 1"
              subTitle="00:00:05"
              status="finish"
              description="This is a description."
            />
            <Step
              title="Step 2"
              subTitle="00:01:02"
              status="process"
              description="This is a description."
            />
            <Step
              title="Step 3"
              subTitle="waiting for longlong time"
              status="wait"
              description="This is a description."
            />
          </Steps>
          <Steps
            isRtl={isRtl}
            type="navigation"
            current={current}
            onChange={this.onChange}
            style={stepStyle}
          >
            <Step status="finish" title="Step 1" />
            <Step status="process" title="Step 2" />
            <Step status="wait" title="Step 3" />
            <Step status="wait" title="Step 4" />
          </Steps>
          <Steps
            isRtl={isRtl}
            type="navigation"
            size="small"
            current={current}
            onChange={this.onChange}
            style={stepStyle}
          >
            <Step status="finish" title="finish 1" />
            <Step status="finish" title="finish 2" />
            <Step status="process" title="current process" />
            <Step status="wait" title="wait" disabled />
          </Steps>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
