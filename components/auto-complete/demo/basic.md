---
order: 0
title:
  zh-CN: 基本使用
  en-US: Basic Usage
---

## zh-CN

基本使用。通过 dataSource 设置自动完成的数据源

## en-US

Basic Usage, set data source of autocomplete with `dataSource` property.

```jsx
import { AutoComplete, Switch } from '../../index';
function onSelect(value) {
  console.log('onSelect', value);
}

class Complete extends React.Component {
  state = { isRtl: false, value: '', dataSource: [] };

  toggleRtl = () => {
    this.setState({ isRtl: !this.state.isRtl });
  };

  onSearch = searchText => {
    this.setState({
      dataSource: !searchText ? [] : [searchText, searchText.repeat(2), searchText.repeat(3)],
    });
  };

  onChange = value => {
    this.setState({ value });
  };

  render() {
    const { dataSource, value } = this.state;
    return (
      <div>
        <AutoComplete
          isRtl={isRtl}
          dataSource={dataSource}
          style={{ width: 200 }}
          onSelect={onSelect}
          onSearch={this.onSearch}
          placeholder="input here"
        />
        <br />
        <br />
        <AutoComplete
          isRtl={isRtl}
          value={value}
          dataSource={dataSource}
          style={{ width: 200 }}
          onSelect={onSelect}
          onSearch={this.onSearch}
          onChange={this.onChange}
          placeholder="control mode"
        />
      </div>
    );
  }
}

ReactDOM.render(<Complete />, mountNode);
```
