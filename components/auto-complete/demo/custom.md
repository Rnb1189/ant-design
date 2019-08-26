---
order: 3
title:
  zh-CN: 自定义输入组件
  en-US: Customize Input Component
---

## zh-CN

自定义输入组件。

## en-US

Customize Input Component

```jsx
import { AutoComplete, Input, Switch } from '../../index';

const { TextArea } = Input;

function onSelect(value) {
  console.log('onSelect', value);
}

class Complete extends React.Component {
  state = { isRtl: false, dataSource: [] };

  toggleRtl = () => {
    this.setState({ isRtl: !this.state.isRtl });
  };

  handleSearch = value => {
    this.setState({
      dataSource: !value ? [] : [value, value + value, value + value + value],
    });
  };

  handleKeyPress = ev => {
    console.log('handleKeyPress', ev);
  };

  render() {
    const { dataSource, isRtl } = this.state;
    return (
      <div>
        <Switch checkedChildren="Rtl" unCheckedChildren="Ltr" onChange={this.toggleRtl} />
        <br />
        <div>
          <AutoComplete
            isRtl={isRtl}
            dataSource={dataSource}
            style={{ width: 200 }}
            onSelect={onSelect}
            onSearch={this.handleSearch}
          >
            <TextArea
              isRtl={isRtl}
              placeholder="input here"
              className="custom"
              style={{ height: 50 }}
              onKeyPress={this.handleKeyPress}
            />
          </AutoComplete>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Complete />, mountNode);
```
