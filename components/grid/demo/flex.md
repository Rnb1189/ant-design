---
order: 4
title:
  zh-CN: Flex 布局
  en-US: Flex Layout
---

## zh-CN

Flex 布局基础。

使用 `row-flex` 定义 `flex` 布局，其子元素根据不同的值 `start`,`center`,`end`,`space-between`,`space-around`，分别定义其在父节点里面的排版方式。

## en-US

Use `row-flex` define `flex` layout, its child elements depending on the value of the `start`,`center`, `end`,`space-between`, `space-around`, which are defined in its parent node layout mode.

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
        <div>
          <p>sub-element align left</p>
          <Row isRtl={isRtl} type="flex" justify="start">
            <Col span={4}>1col-4</Col>
            <Col span={4}>2col-4</Col>
            <Col span={4}>3col-4</Col>
            <Col span={4}>4col-4</Col>
          </Row>

          <p>sub-element align center</p>
          <Row isRtl={isRtl} type="flex" justify="center">
            <Col span={4}>1col-4</Col>
            <Col span={4}>2col-4</Col>
            <Col span={4}>3col-4</Col>
            <Col span={4}>4col-4</Col>
          </Row>

          <p>sub-element align right</p>
          <Row isRtl={isRtl} type="flex" justify="end">
            <Col span={4}>1col-4</Col>
            <Col span={4}>2col-4</Col>
            <Col span={4}>3col-4</Col>
            <Col span={4}>4col-4</Col>
          </Row>

          <p>sub-element monospaced arrangement</p>
          <Row isRtl={isRtl} type="flex" justify="space-between">
            <Col span={4}>1col-4</Col>
            <Col span={4}>2col-4</Col>
            <Col span={4}>3col-4</Col>
            <Col span={4}>4col-4</Col>
          </Row>

          <p>sub-element align full</p>
          <Row isRtl={isRtl} type="flex" justify="space-around">
            <Col span={4}>1col-4</Col>
            <Col span={4}>2col-4</Col>
            <Col span={4}>3col-4</Col>
            <Col span={4}>4col-4</Col>
          </Row>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```
