---
order: 8
title:
  zh-CN: 其他属性的响应式
  en-US: More responsive
---

## zh-CN

`span` `pull` `push` `offset` `order` 属性可以通过内嵌到 `xs` `sm` `md` `lg` `xl` `xxl` 属性中来使用。

其中 `xs={6}` 相当于 `xs={{ span: 6 }}`。

## en-US

`span` `pull` `push` `offset` `order` property can be embedded into `xs` `sm` `md` `lg` `xl` properties to use, where `xs = {6}` is equivalent to `xs = {{span: 6}}`.

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
        <Row isRtl={isRtl}>
          <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
            1Col
          </Col>
          <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
            2Col
          </Col>
          <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
            3Col
          </Col>
        </Row>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```
