---
order: 6
iframe: 250
title:
  zh-CN: 顶部公告
  en-US: Banner
---

## zh-CN

页面顶部通告形式，默认有图标且`type` 为 'warning'。

## en-US

Display Alert as a banner at top of page.

```jsx
import { Alert } from 'antd';

ReactDOM.render(
  <div>
    <div>
      <Alert message="Warning text" banner />
      <br />
      <Alert
        message="Very long warning text warning text text text text text text text"
        banner
        closable
      />
      <br />
      <Alert showIcon={false} message="Warning text without icon" banner />
      <br />
      <Alert type="error" message="Error text" banner />
    </div>
    <br /> RTL
    <div>
      <Alert isRtl={true} message="Warning text" banner />
      <br />
      <Alert
        isRtl={true}
        message="Very long warning text warning text text text text text text text"
        banner
        closable
      />
      <br />
      <Alert isRtl={true} showIcon={false} message="Warning text without icon" banner />
      <br />
      <Alert isRtl={true} type="error" message="Error text" banner />
    </div>
  </div>,
  mountNode,
);
```
