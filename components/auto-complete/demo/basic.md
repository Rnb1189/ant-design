---
order: 0
title:
  zh-CN: 基本使用
  en-US: Basic Usage
---

## zh-CN

基本使用。通过 dataSource 设置自动完成的数据源

## en-US

Basic Usage, set datasource of autocomplete with `dataSource` property.

```jsx
import { AutoComplete, Switch } from '../../index';
function onSelect(value) {
  console.log('onSelect', value);
}

class Complete extends React.Component {
  state = { isRtl: false, dataSource: [] };

  toggleRtl = () => {
    this.setState({
      ...this.state,
      isRtl: !this.state.isRtl,
    });
  };

  handleSearch = value => {
    this.setState({
      ...this.state,
      dataSource: !value ? [] : [value, value + value, value + value + value],
    });
  };

  render() {
    const { dataSource, isRtl } = this.state;
    return (
      <div>
        <Switch checkedChildren="Rtl" unCheckedChildren="Ltr" onChange={this.toggleRtl} />
        <br />
        <br />
        <AutoComplete
          isRtl={isRtl}
          dataSource={dataSource}
          style={{ width: 200 }}
          onSelect={onSelect}
          onSearch={this.handleSearch}
          placeholder="input here"
        />
      </div>
    );
  }
}

ReactDOM.render(<Complete />, mountNode);
```
