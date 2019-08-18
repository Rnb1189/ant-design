---
order: 5
title:
  zh-CN: 信息提示
  en-US: Information modal dialog
---

## zh-CN

各种类型的信息提示，只提供一个按钮用于关闭。

## en-US

In the various types of information modal dialog, only one button to close dialog is provided.

```jsx
import { Modal, Button, Switch } from '../../index';

class App extends React.Component {
  state = {
    isRtl: false,
  };

  toggleRtl = () => {
    this.setState({
      ...this.state,
      isRtl: !this.state.isRtl,
    });
  };

  info = () => {
    Modal.info({
      isRtl: this.state.isRtl,
      title: 'This is a notification message',
      content: (
        <div>
          <p>some messages...some messages...</p>
          <p>some messages...some messages...</p>
        </div>
      ),
      onOk() {},
    });
  };

  success = () => {
    Modal.success({
      isRtl: this.state.isRtl,
      title: 'This is a success message',
      content: 'some messages...some messages...',
    });
  };

  error = () => {
    Modal.error({
      isRtl: this.state.isRtl,
      title: 'This is an error message',
      content: 'some messages...some messages...',
    });
  };

  warning = () => {
    Modal.warning({
      isRtl: this.state.isRtl,
      title: 'This is a warning message',
      content: 'some messages...some messages...',
    });
  };

  render() {
    const isRtl = this.state.isRtl;
    return (
      <div>
        <Switch checkedChildren="Rtl" unCheckedChildren="Ltr" onChange={this.toggleRtl} />
        <br />
        <div>
          <Button onClick={this.info}>Info</Button>
          <Button onClick={this.success}>Success</Button>
          <Button onClick={this.error}>Error</Button>
          <Button onClick={this.warning}>Warning</Button>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```
