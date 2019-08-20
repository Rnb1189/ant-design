---
order: 21
title:
  zh-CN: 扩展菜单
  en-US: Custom dropdown
---

## zh-CN

使用 `dropdownRender` 对下拉菜单进行自由扩展。

## en-US

Customize the dropdown menu via `dropdownRender`.

```jsx
import { Select, Icon, Divider, Switch } from '../../index';
const { Option } = Select;

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
        <Select
          isRtl={isRtl}
          defaultValue="lucy"
          style={{ width: 120 }}
          dropdownRender={menu => (
            <div>
              {menu}
              <Divider style={{ margin: '4px 0' }} />
              <div style={{ direction: 'rtl', padding: '8px', cursor: 'pointer' }}>
                <Icon type="plus" /> Add item
              </div>
            </div>
          )}
        >
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
        </Select>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```
