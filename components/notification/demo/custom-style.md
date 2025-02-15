---
order: 6
title:
  zh-CN: 自定义样式
  en-US: Customized style
---

## zh-CN

使用 style 和 className 来定义样式。

## en-US

The style and className are available to customize Notification.

```jsx
import { Button, notification } from '../../index';

const openNotification = () => {
  notification.open({
    message: 'Notification Title',
    description:
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    style: {
      width: 600,
      marginLeft: 335 - 600,
    },
  });
};

const openNotificationRtl = () => {
  notification.open({
    isRtl: true,
    message: 'Notification Title',
    description:
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    style: {
      width: 600,
      marginLeft: 335 - 600,
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
