---
order: 3
title:
  zh-CN: Checkbox 组
  en-US: Checkbox Group
---

## zh-CN

方便的从数组生成 Checkbox 组。

## en-US

Generate a group of checkboxes from an array.

```jsx
import { Checkbox, Switch } from '../../index';

const plainOptions = ['Apple', 'Pear', 'Orange'];
const options = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange' },
];
const optionsWithDisabled = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange', disabled: false },
];

class App extends React.Component {
  state = {
    isRtl: false,
  };

  toggleRtl = () => {
    this.setState({ isRtl: !this.state.isRtl });
  };

  onChange = checkedValues => {
    console.log('checked = ', checkedValues);
  };

  render() {
    const isRtl = this.state.isRtl;
    const dirStyle = { direction: `${isRtl ? 'rtl' : 'ltr'}` };
    return (
      <div>
        <Switch checkedChildren="Rtl" unCheckedChildren="Ltr" onChange={this.toggleRtl} />
        <br />
        <div>
          <Checkbox.Group
            isRtl={isRtl}
            options={plainOptions}
            defaultValue={['Apple']}
            onChange={this.onChange}
          />
          <br />
          <br />
          <Checkbox.Group
            isRtl={isRtl}
            options={options}
            defaultValue={['Pear']}
            onChange={this.onChange}
          />
          <br />
          <br />
          <Checkbox.Group
            isRtl={isRtl}
            options={optionsWithDisabled}
            disabled
            defaultValue={['Apple']}
            onChange={this.onChange}
          />
        </div>
        ,
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```
