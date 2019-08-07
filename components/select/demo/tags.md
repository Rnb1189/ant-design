---
order: 4
title:
  zh-CN: 标签
  en-US: Tags
---

## zh-CN

tags select，随意输入的内容（scroll the menu）

## en-US

Select with tags, transform input to tag (scroll the menu)

```jsx
import { Select, Switch } from '../../index';
const { Option } = Select;

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

  handleChange = value => {
    console.log(`selected ${value}`);
  };

  render() {
    const children = [];
    for (let i = 10; i < 36; i++) {
      children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
    }
    const isRtl = this.state.isRtl;
    const dirStyle = { direction: `${isRtl ? 'rtl' : 'ltr'}` };
    return (
      <div>
        <Switch checkedChildren="Rtl" unCheckedChildren="Ltr" onChange={this.toggleRtl} />
        <br />
        <div style={{}}>
          <Select
            isRtl={isRtl}
            mode="tags"
            style={{ width: '100%' }}
            placeholder="Tags Mode"
            onChange={this.handleChange}
          >
            {children}
          </Select>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```
