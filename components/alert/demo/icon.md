---
order: 4
title:
  zh-CN: 图标
  en-US: Icon
---

## zh-CN

可口的图标让信息类型更加醒目。

## en-US

A relevant icon will make information clearer and more friendly.

```jsx
import { Alert } from 'antd';

ReactDOM.render(
  <div>
    <div>
      <Alert message="Success Tips" type="success" showIcon />
      <Alert message="Informational Notes" type="info" showIcon />
      <Alert message="Warning" type="warning" showIcon />
      <Alert message="Error" type="error" showIcon />
      <Alert
        message="Success Tips"
        description="Detailed description and advice about successful copywriting."
        type="success"
        showIcon
      />
      <Alert
        message="Informational Notes"
        description="Additional description and information about copywriting."
        type="info"
        showIcon
      />
      <Alert
        message="Warning"
        description="This is a warning notice about copywriting."
        type="warning"
        showIcon
      />
      <Alert
        message="Error"
        description="This is an error message about copywriting."
        type="error"
        showIcon
      />
    </div>
    RTL
    <div>
      <Alert isRtl={true} message="Success Tips" type="success" showIcon />
      <Alert isRtl={true} message="Informational Notes" type="info" showIcon />
      <Alert isRtl={true} message="Warning" type="warning" showIcon />
      <Alert isRtl={true} message="Error" type="error" showIcon />
      <Alert
        isRtl={true}
        message="Success Tips"
        description="Detailed description and advice about successful copywriting."
        type="success"
        showIcon
      />
      <Alert
        isRtl={true}
        message="Informational Notes"
        description="Additional description and information about copywriting."
        type="info"
        showIcon
      />
      <Alert
        isRtl={true}
        message="Warning"
        description="This is a warning notice about copywriting."
        type="warning"
        showIcon
      />
      <Alert
        isRtl={true}
        message="Error"
        description="This is an error message about copywriting."
        type="error"
        showIcon
      />
    </div>
  </div>,
  mountNode,
);
```
