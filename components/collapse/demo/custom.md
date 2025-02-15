---
order: 3
title:
  zh-CN: 自定义面板
  en-US: Custom Panel
---

## zh-CN

自定义各个面板的背景色、圆角、边距和图标。

## en-US

Customize the background, border, margin styles and icon for each panel.

```jsx
import { Collapse, Icon, Switch } from '../../index';

const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const customPanelStyle = {
  background: '#f7f7f7',
  borderRadius: 4,
  marginBottom: 24,
  border: 0,
  overflow: 'hidden',
};

class App extends React.Component {
  state = {
    isRtl: false,
  };

  toggleRtl = () => {
    this.setState({ isRtl: !this.state.isRtl });
  };

  render() {
    const isRtl = this.state.isRtl;
    return (
      <div>
        <Switch checkedChildren="Rtl" unCheckedChildren="Ltr" onChange={this.toggleRtl} />
        <br />
        <Collapse
          isRtl={isRtl}
          bordered={false}
          defaultActiveKey={['1']}
          expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}
        >
          <Panel header="This is panel header 1" key="1" style={customPanelStyle}>
            <p>{text}</p>
          </Panel>
          <Panel header="This is panel header 2" key="2" style={customPanelStyle}>
            <p>{text}</p>
          </Panel>
          <Panel header="This is panel header 3" key="3" style={customPanelStyle}>
            <p>{text}</p>
          </Panel>
        </Collapse>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```
