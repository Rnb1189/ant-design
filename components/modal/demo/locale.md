---
order: 6
title:
  zh-CN: 国际化
  en-US: Internationalization
---

## zh-CN

设置 `okText` 与 `cancelText` 以自定义按钮文字。

## en-US

To customize the text of the buttons, you need to set `okText` and `cancelText` props.

```jsx
import { Modal, Button, Switch } from '../../index';

class LocalizedModal extends React.Component {
  state = { isRtl: false, visible: false };

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

  hideModal = () => {
    this.setState({
      ...this.state,
      visible: false,
    });
  };

  render() {
    const isRtl = this.state.isRtl;
    return (
      <div>
        <Switch checkedChildren="Rtl" unCheckedChildren="Ltr" onChange={this.toggleRtl} />
        <br />
        <div>
          <Button type="primary" onClick={this.showModal}>
            Modal
          </Button>
          <Modal
            title="Modal"
            visible={this.state.visible}
            onOk={this.hideModal}
            onCancel={this.hideModal}
            okText="确认"
            cancelText="取消"
          >
            <p>Bla bla ...</p>
            <p>Bla bla ...</p>
            <p>Bla bla ...</p>
          </Modal>
        </div>
      </div>
    );
  }
}

function confirm() {
  Modal.confirm({
    title: 'Confirm',
    content: 'Bla bla ...',
    okText: '确认',
    cancelText: '取消',
  });
}

function confirmRtl() {
  Modal.confirm({
    isRtl: true,
    title: 'Confirm',
    content: 'Bla bla ...',
    okText: '确认',
    cancelText: '取消',
  });
}

ReactDOM.render(
  <div>
    <LocalizedModal />
    <br />
    <Button onClick={confirm}>Confirm</Button>
    <Button onClick={confirmRtl}>ConfirmRtl</Button>
  </div>,
  mountNode,
);
```
