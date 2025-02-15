---
order: 5
title:
  zh-CN: 确认对话框
  en-US: Confirmation modal dialog
---

## zh-CN

使用 `confirm()` 可以快捷地弹出确认框。onCancel/onOk 返回 promise 可以延迟关闭。

## en-US

Use `confirm()` to show a confirmation modal dialog. Let onCancel/onOk function return a promise object to delay closing the dialog.

```jsx
import { Modal, Button } from '../../index';
const { confirm } = Modal;

function showConfirm() {
  confirm({
    title: 'Do you want to delete these items?',
    content: 'When clicked the OK button, this dialog will be closed after 1 second',
    onOk() {
      return new Promise((resolve, reject) => {
        setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
      }).catch(() => console.log('Oops errors!'));
    },
    onCancel() {},
  });
}

function showConfirmRtl() {
  confirm({
    isRtl: true,
    title: 'Do you want to delete these items?',
    content: 'When clicked the OK button, this dialog will be closed after 1 second',
    onOk() {
      return new Promise((resolve, reject) => {
        setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
      }).catch(() => console.log('Oops errors!'));
    },
    onCancel() {},
  });
}

ReactDOM.render(
  <div>
    <Button onClick={showConfirm}>Confirm</Button>
    <Button onClick={showConfirmRtl}>Confirm Rtl</Button>
  </div>,
  mountNode,
);
```
