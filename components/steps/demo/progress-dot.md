---

order: 8 title: zh-CN: 点状步骤条 en-US: Dot Style

---

## zh-CN

包含步骤点的进度条。

## en-US

Steps with progress dot style.

```jsx
import { Steps, Divider, Switch } from '../../index';
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
          <Steps isRtl={isRtl} progressDot current={1}>
            <Step title="Finished" description="This is a description." />
            <Step title="In Progress" description="This is a description." />
            <Step title="Waiting" description="This is a description." />
          </Steps>
          <Divider />
          <Steps progressDot current={1} direction="vertical">
            <Step title="Finished" description="This is a description. This is a description." />
            <Step title="Finished" description="This is a description. This is a description." />
            <Step title="In Progress" description="This is a description. This is a description." />
            <Step title="Waiting" description="This is a description." />
            <Step title="Waiting" description="This is a description." />
          </Steps>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```
