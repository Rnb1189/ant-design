---
order: 9
title:
  zh-CN: 自定义点状步骤条
  en-US: Customized Dot Style
---

## zh-CN

为点状步骤条增加自定义展示。

## en-US

You can customize the display for Steps with progress dot style.

```jsx
import { Steps, Popover, Switch } from '../../index';
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

  customDot = (dot, { status, index }) => (
    <Popover
      content={
        <span>
          step {index} status: {status}
        </span>
      }
    >
      {dot}
    </Popover>
  );

  render() {
    const isRtl = this.state.isRtl;
    const dirStyle = { direction: `${isRtl ? 'rtl' : 'ltr'}` };
    return (
      <div>
        <Switch checkedChildren="Rtl" unCheckedChildren="Ltr" onChange={this.toggleRtl} />
        <br />
        <div>
          <Steps isRtl={isRtl} current={1} progressDot={this.customDot}>
            <Step title="Finished" description="You can hover on the dot." />
            <Step title="In Progress" description="You can hover on the dot." />
            <Step title="Waiting" description="You can hover on the dot." />
            <Step title="Waiting" description="You can hover on the dot." />
          </Steps>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```
