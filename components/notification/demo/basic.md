---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

## zh-CN

最简单的用法，4.5 秒后自动关闭。

## en-US

The simplest usage that close the notification box after 4.5s.

```jsx
import { Button, notification } from '../../index';

const openNotification = () => {
  notification.open({
    message: 'Notification Title',
    description:
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    onClick: () => {
      console.log('Notification Clicked!');
    },
  });
};

const openNotificationRtl = () => {
  notification.open({
    isRtl: true,
    message: 'Notification Title',
    description:
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    onClick: () => {
      console.log('Notification Clicked!');
    },
  });
};

ReactDOM.render(
  <div>
    <Button type="primary" onClick={openNotification}>
      Open the notification box
    </Button>
    <br />
    <br />
    <Button type="primary" onClick={openNotificationRtl}>
      Rtl
    </Button>
  </div>,
  mountNode,
);
```
