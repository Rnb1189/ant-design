---
order: 0
title:
  zh-CN: 普通提示
  en-US: Normal prompt
---

## zh-CN

信息提醒反馈。

## en-US

Normal message for information.

```jsx
import { message, Button } from 'antd';

const info = () => {
  message.config({
    getContainer: () => document.body,
  });
  message.info('This is a normal message');
};
const infoRtl = () => {
  message.config({
    getContainer: () => document.getElementById('dummycontainer'),
  });
  message.info('This is a normal message');
};

ReactDOM.render(
  <div>
    <Button type="primary" onClick={info}>
      Display normal message
    </Button>
    <br />
    <br />
    <Button type="primary" onClick={infoRtl}>
      Rtl
    </Button>
    <span id="dummycontainer" className="brs-rtl-dropdown" />
  </div>,
  mountNode,
);
```
