---
order: 11
title:
  zh-CN: 自定义页脚按钮属性
  en-US: Customize footer buttons props
---

## zh-CN

传入 `okButtonProps` 和 `cancelButtonProps` 可分别自定义确定按钮和取消按钮的 props。

## en-US

Passing `okButtonProps` and `cancelButtonProps` will customize the OK button and cancel button props.

```jsx
import { Modal, Button, Switch } from '../../index';

class App extends React.Component {
  state = { visible: false, isRtl: false };

  showModal = () => {
    this.setState({
      ...this.state,
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      ...this.state,
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      ...this.state,
      visible: false,
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
          <Button type="primary" onClick={this.showModal}>
            Open Modal with customized button props
          </Button>
          <Modal
            title="Basic Modal"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            okButtonProps={{ disabled: true }}
            cancelButtonProps={{ disabled: true }}
          >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Modal>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```
