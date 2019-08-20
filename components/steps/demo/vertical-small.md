---
order: 5
title:
  zh-CN: 竖直方向的小型步骤条
  en-US: Vertical mini version
---

## zh-CN

简单的竖直方向的小型步骤条。

## en-US

A simple mini version step bar in the vertical direction.

```jsx
import { Steps, Switch } from '../../index';
const { Step } = Steps;

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
        <div>
          <Steps isRtl={isRtl} direction="vertical" size="small" current={1}>
            <Step title="Finished" description="This is a description." />
            <Step title="In Progress" description="This is a description." />
            <Step title="Waiting" description="This is a description." />
          </Steps>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```
