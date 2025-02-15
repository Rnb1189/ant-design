---
order: 1
title:
  zh-CN: 区块间隔
  en-US: Grid Gutter
---

## zh-CN

栅格常常需要和间隔进行配合，你可以使用 `Row` 的 `gutter` 属性，我们推荐使用 `(16+8n)px` 作为栅格间隔。(n 是自然数)

如果要支持响应式，可以写成 `{ xs: 8, sm: 16, md: 24, lg: 32 }`。

## en-US

You can use the `gutter` property of `Row` as grid spacing, we recommend set it to `(16 + 8n) px`. (`n` stands for natural number.)

You can set it to a object like `{ xs: 8, sm: 16, md: 24, lg: 32 }` for responsive design.

```jsx
import { Row, Col, Switch } from '../../index';

class App extends React.Component {
  state = {
    isRtl: false,
  };

  toggleRtl = () => {
    this.setState({ isRtl: !this.state.isRtl });
  };

  render() {
    const isRtl = this.state.isRtl;
    const dirStyle = { direction: `${isRtl ? 'rtl' : 'ltr'}` };
    return (
      <div>
        <Switch checkedChildren="Rtl" unCheckedChildren="Ltr" onChange={this.toggleRtl} />
        <br />
        <div className="gutter-example">
          <Row isRtl={isRtl} gutter={16}>
            <Col className="gutter-row" span={6}>
              <div className="gutter-box">1col-6</div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div className="gutter-box">2col-6</div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div className="gutter-box">3col-6</div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div className="gutter-box">4col-6</div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```

```css
.gutter-example .ant-row > div {
  background: transparent;
  border: 0;
}
.gutter-box {
  background: #00a0e9;
  padding: 5px 0;
}
```
