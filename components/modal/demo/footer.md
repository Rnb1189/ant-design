---
order: 2
title:
  zh-CN: 自定义页脚
  en-US: Customized Footer
---

## zh-CN

更复杂的例子，自定义了页脚的按钮，点击提交后进入 loading 状态，完成后关闭。

不需要默认确定取消按钮时，你可以把 `footer` 设为 `null`。

## en-US

A more complex example which define a customized footer button bar. The dialog will change to loading state after clicking the submit button, and when the loading is done, the modal dialog will be closed.

You could set `footer` to `null` if you don't need default footer buttons.

```jsx
import { Modal, Button, Switch } from '../../index';

class App extends React.Component {
  state = {
    isRtl: false,
    loading: false,
    visible: false,
  };

  toggleRtl = () => {
    this.setState({
      ...this.state,
      isRtl: !this.state.isRtl,
    });
  };

  showModal = () => {
    this.setState({
      ...this.state,
      visible: true,
    });
  };

  handleOk = () => {
    this.setState({ ...this.state, loading: true });
    setTimeout(() => {
      this.setState({ ...this.state, loading: false, visible: false });
    }, 3000);
  };

  handleCancel = () => {
    this.setState({ ...this.state, visible: false });
  };

  render() {
    const { visible, loading, isRtl } = this.state;
    return (
      <div>
        <Switch checkedChildren="Rtl" unCheckedChildren="Ltr" onChange={this.toggleRtl} />
        <br />
        <div>
          <Button type="primary" onClick={this.showModal}>
            Open Modal with customized footer
          </Button>
          <Modal
            isRtl={isRtl}
            visible={visible}
            title="Title"
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            footer={[
              <Button isRtl={isRtl} key="back" onClick={this.handleCancel}>
                Return
              </Button>,
              <Button
                isRtl={isRtl}
                key="submit"
                type="primary"
                loading={loading}
                onClick={this.handleOk}
              >
                Submit
              </Button>,
            ]}
          >
            <p>Some contents...</p>
            <p>Some contents...</p>
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
