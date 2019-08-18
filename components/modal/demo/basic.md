---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

## zh-CN

第一个对话框。

## en-US

Basic modal.

```jsx
import { Modal, Button } from '../../index';

class App extends React.Component {
  state = { visible: false, visibleRtl: false };

  showModal = () => {
    this.setState({
      visible: true,
      visibleRtl: false,
    });
  };

  showModalRtl = () => {
    this.setState({
      visible: false,
      visibleRtl: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
      visibleRtl: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
      visibleRtl: false,
    });
  };

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          Open Modal
        </Button>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
        <Button type="primary" onClick={this.showModalRtl}>
          Open Modal (Rtl)
        </Button>
        <Modal
          isRtl={true}
          title="Basic Modal Rtl"
          visible={this.state.visibleRtl}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```

<style>
.ant-modal p {
  margin: 0;
}
</style>
