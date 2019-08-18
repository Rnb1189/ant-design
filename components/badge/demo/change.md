---
order: 4
title:
  zh-CN: 动态
  en-US: Dynamic
---

## zh-CN

展示动态变化的效果。

## en-US

The count will be animated as it changes.

```jsx
import { Badge, Button, Icon, Switch } from '../../index';

const ButtonGroup = Button.Group;

class Demo extends React.Component {
  state = { isRtl: false, count: 5, show: true };

  toggleRtl = () => {
    this.setState({
      ...this.state,
      isRtl: !this.state.isRtl,
    });
  };

  increase = () => {
    const count = this.state.count + 1;
    this.setState({ ...this.state, count });
  };

  decline = () => {
    let count = this.state.count - 1;
    if (count < 0) {
      count = 0;
    }
    this.setState({ ...this.state, count });
  };

  onChange = show => {
    this.setState({ ...this.state, show });
  };

  render() {
    const isRtl = this.state.isRtl;
    return (
      <div>
        <Switch checkedChildren="Rtl" unCheckedChildren="Ltr" onChange={this.toggleRtl} />
        <br />
        <br />
        <br />
        <div>
          <div>
            <Badge isRtl={isRtl} count={this.state.count}>
              <a href="#" className="head-example" />
            </Badge>
            <ButtonGroup isRtl={isRtl}>
              <Button onClick={this.decline}>
                <Icon type="minus" />
              </Button>
              <Button onClick={this.increase}>
                <Icon type="plus" />
              </Button>
            </ButtonGroup>
          </div>
          <div style={{ marginTop: 10 }}>
            <Badge isRtl={isRtl} dot={this.state.show}>
              <a href="#" className="head-example" />
            </Badge>
            <Switch isRtl={isRtl} onChange={this.onChange} checked={this.state.show} />
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
