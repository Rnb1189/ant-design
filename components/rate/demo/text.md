---
order: 2
title:
  zh-CN: 文案展现
  en-US: Show copywriting
---

## zh-CN

给评分组件加上文案展示。

## en-US

Add copywriting in rate components.

```jsx
import { Rate, Switch } from '../../index';

class App extends React.Component {
  state = {
    isRtl: false,
    value: 3,
  };

  toggleRtl = () => {
    this.setState({
      ...this.state,
      isRtl: !this.state.isRtl,
    });
  };

  handleChange = value => {
    this.setState({ ...this.state, value });
  };

  render() {
    const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
    const { value } = this.state;

    const isRtl = this.state.isRtl;
    const dirStyle = { direction: `${isRtl ? 'rtl' : 'ltr'}` };

    return (
      <div>
        <Switch checkedChildren="Rtl" unCheckedChildren="Ltr" onChange={this.toggleRtl} />
        <br />
        <span>
          <Rate isRtl={isRtl} tooltips={desc} onChange={this.handleChange} value={value} />
          {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
        </span>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```
