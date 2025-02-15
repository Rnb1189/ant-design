---
order: 7
title:
  zh-CN: 更新消息内容
  en-US: Update Message Content
---

## zh-CN

可以通过唯一的 key 来更新内容。

## en-US

Update content with unique key.

```jsx
import { Button, notification } from '../../index';

const key = 'updatable';

const openNotification = () => {
  notification.open({
    key,
    message: 'Notification Title',
    description: 'description.',
  });
  setTimeout(() => {
    notification.open({
      key,
      message: 'New Title',
      description: 'New description.',
    });
  }, 1000);
};
const openNotificationRtl = () => {
  notification.open({
    isRtl: true,
    key,
    message: 'Notification Title',
    description: 'description.',
  });
  setTimeout(() => {
    notification.open({
      isRtl: true,
      key,
      message: 'New Title',
      description: 'New description.',
    });
  }, 1000);
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
