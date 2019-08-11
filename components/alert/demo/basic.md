---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

## zh-CN

最简单的用法，适用于简短的警告提示。

## en-US

The simplest usage for short messages.

```jsx
import { Alert } from 'antd';

ReactDOM.render(
  <div>
    <div>
      <Alert message="Success Text" type="success" />
    </div>
    <br />
    <div>
      <Alert isRtl={true} message="Success Text" type="success" />
    </div>
  </div>,
  mountNode,
);
```

<style>
.ant-alert {
  margin-bottom: 16px;
}
</style>
