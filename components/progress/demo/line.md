---
order: 0
title:
  zh-CN: 进度条
  en-US: Progress bar
---

## zh-CN

标准的进度条。

## en-US

A standard progress bar.

```jsx
import { Progress } from '../../index';

ReactDOM.render(
  <div>
    <Progress percent={30} />
    <Progress percent={50} status="active" />
    <Progress percent={70} status="exception" />
    <Progress percent={100} />
    <Progress percent={50} showInfo={false} />
    <br />
    <br />
    <br />
    <div style={{ backgroundColor: 'black', color: 'white' }}>Rtl</div>
    <br />
    <Progress isRtl={true} percent={30} />
    <Progress isRtl={true} percent={50} status="active" />
    <Progress isRtl={true} percent={70} status="exception" />
    <Progress isRtl={true} percent={100} />
    <Progress isRtl={true} percent={50} showInfo={false} />
  </div>,
  mountNode,
);
```
