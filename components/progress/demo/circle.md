---
order: 1
title:
  zh-CN: 进度圈
  en-US: Circular progress bar
---

## zh-CN

圈形的进度。

## en-US

A circular progress bar.

```jsx
import { Progress } from '../../index';

ReactDOM.render(
  <div>
    <Progress type="circle" percent={75} />
    <Progress type="circle" percent={70} status="exception" />
    <Progress type="circle" percent={100} />
    <br />
    <br />
    <br />
    <div style={{ backgroundColor: 'black', color: 'white' }}>Rtl</div>
    <br />
    <Progress isRtl={true} type="circle" percent={75} />
    <Progress isRtl={true} type="circle" percent={70} status="exception" />
    <Progress isRtl={true} type="circle" percent={100} />
  </div>,
  mountNode,
);
```

<style>
.ant-progress-circle-wrap,
.ant-progress-line-wrap {
  margin-right: 8px;
  margin-bottom: 5px;
}
</style>
