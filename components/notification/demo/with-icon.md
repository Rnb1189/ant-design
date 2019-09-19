---
order: 2
title:
  zh-CN: 带有图标的通知提醒框
  en-US: Notification with icon
---

## zh-CN

通知提醒框左侧有图标。

## en-US

A notification box with a icon at the left side.

```jsx
import { Button, notification } from '../../index';

const openNotificationWithIcon = type => {
  notification[type]({
    message: 'Notification Title',
    description:
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
  });
};

const openNotificationWithIconRtl = type => {
  notification[type]({
    isRtl: true,
    message: 'Notification Title',
    description:
      'This is the content of the notification 1 2 3 4 5 6 7 8 9 0. This is the content of the notification. This is the content of the notification.',
  });
};

ReactDOM.render(
  <div>
    <Button onClick={() => openNotificationWithIcon('success')}>Success</Button>
    <Button onClick={() => openNotificationWithIcon('info')}>Info</Button>
    <Button onClick={() => openNotificationWithIcon('warning')}>Warning</Button>
    <Button onClick={() => openNotificationWithIcon('error')}>Error</Button>
    <br />
    <br />
    <br />

    <Button onClick={() => openNotificationWithIconRtl('success')}>Success Rtl</Button>
    <Button onClick={() => openNotificationWithIconRtl('info')}>Info Rtl</Button>
    <Button onClick={() => openNotificationWithIconRtl('warning')}>Warning Rtl</Button>
    <Button onClick={() => openNotificationWithIconRtl('error')}>Error Rtl</Button>
  </div>,
  mountNode,
);
```

<style>
.code-box-demo .ant-btn {
  margin-right: 1em;
}
</style>
