---
order: 4
title:
  zh-CN: 全选
  en-US: Check all
---

## zh-CN

在实现全选效果时，你可能会用到 `indeterminate` 属性。

## en-US

The `indeterminate` property can help you to achieve a 'check all' effect.

```jsx
import { Checkbox, Switch } from '../../index';

const CheckboxGroup = Checkbox.Group;

const plainOptions = ['Apple', 'Pear', 'Orange'];
const defaultCheckedList = ['Apple', 'Orange'];

class App extends React.Component {
  state = {
    checkedList: defaultCheckedList,
    indeterminate: true,
    checkAll: false,
    isRtl: false,
  };

  toggleRtl = () => {
    this.setState({ isRtl: !this.state.isRtl });
  };

  onChange = checkedList => {
    this.setState({
      checkedList,
      indeterminate: !!checkedList.length && checkedList.length < plainOptions.length,
      checkAll: checkedList.length === plainOptions.length,
    });
  };

  onCheckAllChange = e => {
    this.setState({
      checkedList: e.target.checked ? plainOptions : [],
      indeterminate: false,
      checkAll: e.target.checked,
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
          <div style={{ borderBottom: '1px solid #E9E9E9' }}>
            <Checkbox
              isRtl={isRtl}
              indeterminate={this.state.indeterminate}
              onChange={this.onCheckAllChange}
              checked={this.state.checkAll}
            >
              Check all
            </Checkbox>
          </div>
          <br />
          <CheckboxGroup
            isRtl={isRtl}
            options={plainOptions}
            value={this.state.checkedList}
            onChange={this.onChange}
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```
