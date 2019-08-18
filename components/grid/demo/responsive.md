---
order: 7
title:
  zh-CN: 响应式布局
  en-US: Responsive
---

## zh-CN

参照 Bootstrap 的 [响应式设计](http://getbootstrap.com/css/#grid-media-queries)，预设六个响应尺寸：`xs` `sm` `md` `lg` `xl`  `xxl`。

## en-US

Referring to the Bootstrap [responsive design](http://getbootstrap.com/css/#grid-media-queries), here preset six dimensions: `xs` `sm` `md` `lg` `xl`.

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
        <Row isRtl={isRtl}>
          <Col xs={2} sm={4} md={6} lg={8} xl={10}>
            1Col
          </Col>
          <Col xs={20} sm={16} md={12} lg={8} xl={4}>
            2Col
          </Col>
          <Col xs={2} sm={4} md={6} lg={8} xl={10}>
            3Col
          </Col>
        </Row>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```
