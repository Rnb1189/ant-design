---
order: 2
title:
  zh-CN: 受控的 Checkbox
  en-US: Controlled Checkbox
---

## zh-CN

联动 checkbox。

## en-US

Communicated with other components.

```jsx
import { Checkbox, Switch, Button } from '../../index';

class App extends React.Component {
  state = {
    checked: true,
    disabled: false,
    isRtl: false,
  };

  toggleRtl = () => {
    this.setState({ isRtl: !this.state.isRtl });
  };

  toggleChecked = () => {
    this.setState({ checked: !this.state.checked });
  };

  toggleDisable = () => {
    this.setState({ disabled: !this.state.disabled });
  };

  onChange = e => {
    console.log('checked = ', e.target.checked);
    this.setState({
      checked: e.target.checked,
    });
  };

  render() {
    const label = `${this.state.checked ? 'Checked' : 'Unchecked'}-${
      this.state.disabled ? 'Disabled' : 'Enabled'
    }`;
    const isRtl = this.state.isRtl;
    const dirStyle = { direction: `${isRtl ? 'rtl' : 'ltr'}` };
    return (
      <div>
        <Switch checkedChildren="Rtl" unCheckedChildren="Ltr" onChange={this.toggleRtl} />
        <br />
        <div>
          <p style={{ marginBottom: '20px' }}>
            <Checkbox
              isRtl={isRtl}
              checked={this.state.checked}
              disabled={this.state.disabled}
              onChange={this.onChange}
            >
              {label}
            </Checkbox>
          </p>
          <p>
            <Button type="primary" size="small" onClick={this.toggleChecked}>
              {!this.state.checked ? 'Check' : 'Uncheck'}
            </Button>
            <Button
              style={{ marginLeft: '10px' }}
              type="primary"
              size="small"
              onClick={this.toggleDisable}
            >
              {!this.state.disabled ? 'Disable' : 'Enable'}
            </Button>
          </p>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```
