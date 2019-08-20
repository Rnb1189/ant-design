---
order: 5
title:
  zh-CN: 其他字符
  en-US: Other Character
---

## zh-CN

可以将星星替换为其他字符，比如字母，数字，字体图标甚至中文。

## en-US

Replace the default star to other character like alphabet, digit, iconfont or even Chinese word.

```jsx
import { Rate, Icon, Switch } from '../../index';

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
        <div>
          <Rate isRtl={isRtl} character={<Icon type="heart" />} allowHalf />
          <br />
          <Rate isRtl={isRtl} character="A" allowHalf style={{ fontSize: 36 }} />
          <br />
          <Rate isRtl={isRtl} character="好" allowHalf />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```
