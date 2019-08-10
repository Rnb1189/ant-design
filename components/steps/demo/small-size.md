---
order: 1
title:
  zh-CN: 迷你版
  en-US: Mini version
---

## zh-CN

迷你版的步骤条，通过设置 `<Steps size="small">` 启用.

## en-US

By setting like this: `<Steps size="small">`, you can get a mini version.

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
          <Steps isRtl={isRtl} size="small" current={1}>
            <Step title="Finished" />
            <Step title="In Progress" />
            <Step title="Waiting" />
          </Steps>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```
