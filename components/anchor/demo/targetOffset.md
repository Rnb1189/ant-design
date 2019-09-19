---
order: 4
title:
  zh-CN: 设置锚点滚动偏移量
  en-US: Set Anchor scroll offset
---

## zh-CN

锚点目标滚动到屏幕正中间。

## en-US

Anchor target scroll to screen center.

```jsx
import { Anchor } from '../../index';

const { Link } = Anchor;

class AnchorExample extends React.Component {
  state = {
    targetOffset: undefined,
  };

  componentDidMount() {
    this.setState({
      targetOffset: window.innerHeight / 2,
    });
  }

  render() {
    return (
      <div>
        <Anchor targetOffset={this.state.targetOffset}>
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
        <Anchor isRtl={true} targetOffset={this.state.targetOffset}>
          <Link isRtl={true} href="#components-anchor-demo-basic" title="Basic demo" />
          <Link isRtl={true} href="#components-anchor-demo-static" title="Static demo" />
          <Link isRtl={true} href="#API" title="API">
            <Link isRtl={true} href="#Anchor-Props" title="Anchor Props" />
            <Link isRtl={true} href="#Link-Props" title="Link Props" />
          </Link>
        </Anchor>
      </div>
    );
  }
}

ReactDOM.render(<AnchorExample />, mountNode);
```
