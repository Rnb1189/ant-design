---
order: 2
title:
  zh-CN: 按钮尺寸
  en-US: Size
---

## zh-CN

按钮有大、中、小三种尺寸。

通过设置 `size` 为 `large` `small` 分别把按钮设为大、小尺寸。若不设置 `size`，则尺寸为中。

## en-US

Ant Design supports a default button size as well as a large and small size.

If a large or small button is desired, set the `size` property to either `large` or `small` respectively. Omit the `size` property for a button with the default size.

```jsx
import { Button, Radio, Icon, Switch } from '../../index';

class ButtonSize extends React.Component {
  state = {
    size: 'large',
    isRtl: false,
  };
  toggleRtl = () => {
    this.setState({
      isRtl: !this.state.isRtl,
    });
  };
  handleSizeChange = e => {
    this.setState({ size: e.target.value });
  };

  render() {
    const dirStyle = { direction: `${this.state.isRtl ? 'rtl' : 'ltr'}` };
    const { size, isRtl } = this.state;

    return (
      <div>
        <Switch checkedChildren="Rtl" unCheckedChildren="Ltr" onChange={this.toggleRtl} />
        <br />
        <div style={dirStyle}>
          <Radio.Group isRtl={isRtl} value={size} onChange={this.handleSizeChange}>
            <Radio.Button value="large">Large</Radio.Button>
            <Radio.Button value="default">Default</Radio.Button>
            <Radio.Button value="small">Small</Radio.Button>
          </Radio.Group>
          <br />
          <br />
          <Button isRtl={isRtl} type="primary" size={size}>
            Primary
          </Button>
          <Button isRtl={isRtl} size={size}>
            Normal
          </Button>
          <Button isRtl={isRtl} type="dashed" size={size}>
            Dashed
          </Button>
          <Button isRtl={isRtl} type="danger" size={size}>
            Danger
          </Button>
          <Button isRtl={isRtl} type="link" size={size}>
            Link
          </Button>
          <br />
          <Button isRtl={isRtl} type="primary" shape="circle" icon="download" size={size} />
          <Button isRtl={isRtl} type="primary" shape="round" icon="download" size={size}>
            Download
          </Button>
          <Button isRtl={isRtl} type="primary" icon="download" size={size}>
            Download
          </Button>
          <br />
          <Button.Group isRtl={isRtl} size={size}>
            <Button type="primary">
              <Icon type="left" />
              Backward
            </Button>
            <Button type="primary">
              Forward
              <Icon type="right" />
            </Button>
          </Button.Group>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<ButtonSize />, mountNode);
```
