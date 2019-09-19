---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

## zh-CN

最简单的用法。

## en-US

The simplest usage.

```jsx
import { Anchor } from '../../index';

const { Link } = Anchor;

ReactDOM.render(
  <div>
    <Anchor>
      <Link href="#components-anchor-demo-basic" title="Basic demo" />
      <Link href="#components-anchor-demo-static" title="Static demo" />
      <Link href="#API" title="API">
        <Link href="#Anchor-Props" title="Anchor Props" />
        <Link href="#Link-Props" title="Link Props" />
      </Link>
    </Anchor>
    <br />
    <br />
    <br />
    <div style={{ backgroundColor: 'black', color: 'white' }}>Rtl</div>
    <br />
    <Anchor isRtl={true}>
      <Link isRtl={true} href="#components-anchor-demo-basic" title="Basic demo" />
      <Link isRtl={true} href="#components-anchor-demo-static" title="Static demo" />
      <Link isRtl={true} href="#API" title="API">
        <Link isRtl={true} href="#Anchor-Props" title="Anchor Props" />
        <Link isRtl={true} href="#Link-Props" title="Link Props" />
      </Link>
    </Anchor>
  </div>,
  mountNode,
);
```

<style>
.code-box-demo .ant-affix {
  z-index: 11;
}
</style>
