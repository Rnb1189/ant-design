---
order: 5
title:
  zh-CN: Flex 对齐
  en-US: Flex Alignment
---

## zh-CN

Flex 子元素垂直对齐。

## en-US

Flex child elements vertically aligned.

```jsx
import { Row, Col, Switch } from '../../index';
const DemoBox = props => <p className={`height-${props.value}`}>{props.children}</p>;
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
          <p>Align Top</p>
          <Row isRtl={isRtl} type="flex" justify="center" align="top">
            <Col span={4}>
              <DemoBox value={100}>1col-4</DemoBox>
            </Col>
            <Col span={4}>
              <DemoBox value={50}>2col-4</DemoBox>
            </Col>
            <Col span={4}>
              <DemoBox value={120}>3col-4</DemoBox>
            </Col>
            <Col span={4}>
              <DemoBox value={80}>4col-4</DemoBox>
            </Col>
          </Row>

          <p>Align Center</p>
          <Row isRtl={isRtl} type="flex" justify="space-around" align="middle">
            <Col span={4}>
              <DemoBox value={100}>1col-4</DemoBox>
            </Col>
            <Col span={4}>
              <DemoBox value={50}>2col-4</DemoBox>
            </Col>
            <Col span={4}>
              <DemoBox value={120}>3col-4</DemoBox>
            </Col>
            <Col span={4}>
              <DemoBox value={80}>4col-4</DemoBox>
            </Col>
          </Row>

          <p>Align Bottom</p>
          <Row isRtl={isRtl} type="flex" justify="space-between" align="bottom">
            <Col span={4}>
              <DemoBox value={100}>1col-4</DemoBox>
            </Col>
            <Col span={4}>
              <DemoBox value={50}>2col-4</DemoBox>
            </Col>
            <Col span={4}>
              <DemoBox value={120}>3col-4</DemoBox>
            </Col>
            <Col span={4}>
              <DemoBox value={80}>4col-4</DemoBox>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```
