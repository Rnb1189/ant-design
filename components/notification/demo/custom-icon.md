---
order: 4
title:
  zh-CN: 自定义图标
  en-US: Customized Icon
---

## zh-CN

图标可以被自定义。

## en-US

The icon can be customized to any react node.

```jsx
import { Button, notification, Icon } from '../../index';

const openNotification = () => {
  notification.open({
    message: 'Notification Title',
    description:
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    icon: <Icon type="smile" style={{ color: '#108ee9' }} />,
  });
};

const openNotificationRtl = () => {
  notification.open({
    isRtl: true,
    message: 'Notification Title',
    description:
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    icon: <Icon type="smile" style={{ color: '#108ee9' }} />,
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
