---
order: 0
title:
  zh-CN: 基础栅格
  en-US: Basic Grid
---

## zh-CN

从堆叠到水平排列。

使用单一的一组 `Row` 和 `Col` 栅格组件，就可以创建一个基本的栅格系统，所有列（Col）必须放在 `Row` 内。

## en-US

From the stack to the horizontal arrangement.

You can create a basic grid system by using a single set of `Row` and `Col` grid assembly, all of the columns (Col) must be placed in `Row`.

```jsx
import { Row, Col, Switch } from '../../index';

class App extends React.Component {
  state = {
    isRtl: false,
  };

  toggleRtl = () => {
    this.setState({
      ...this.state,
      isRtl: !this.state.isRtl,
    });
  };

  render() {
    const isRtl = this.state.isRtl;
    const dirStyle = { direction: `${isRtl ? 'rtl' : 'ltr'}` };
    return (
      <div>
        <Switch checkedChildren="Rtl" unCheckedChildren="Ltr" onChange={this.toggleRtl} />
        <br />
        <div>
          <Row isRtl={isRtl}>
            <Col span={12}>1col-12</Col>
            <Col span={12}>2col-12</Col>
          </Row>
          <Row isRtl={isRtl}>
            <Col span={8}>1col-8</Col>
            <Col span={8}>2col-8</Col>
            <Col span={8}>3col-8</Col>
          </Row>
          <Row isRtl={isRtl}>
            <Col span={6}>1col-6</Col>
            <Col span={6}>2col-6</Col>
            <Col span={6}>3col-6</Col>
            <Col span={6}>4col-6</Col>
          </Row>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```
