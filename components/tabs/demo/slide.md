---
order: 3
title:
  zh-CN: 滑动
  en-US: Slide
---

## zh-CN

可以左右、上下滑动，容纳更多标签。

## en-US

In order to fit in more tabs, they can slide left and right (or up and down).

```jsx
import { Tabs, Radio, Switch } from '../../index';

const { TabPane } = Tabs;

class SlidingTabsDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'top',
      isRtl: false,
    };
  }

  toggleRtl = () => {
    this.setState({
      ...this.state,
      isRtl: !this.state.isRtl,
    });
  };

  handleModeChange = e => {
    const mode = e.target.value;
    this.setState({ ...this.state, mode });
  };

  render() {
    const { mode, isRtl } = this.state;
    return (
      <div>
        <Switch checkedChildren="Rtl" unCheckedChildren="Ltr" onChange={this.toggleRtl} />
        <br />
        <div>
          <Radio.Group
            isRtl={isRtl}
            onChange={this.handleModeChange}
            value={mode}
            style={{ marginBottom: 8 }}
          >
            <Radio.Button value="top">Horizontal</Radio.Button>
            <Radio.Button value="left">Vertical</Radio.Button>
          </Radio.Group>
          <Tabs isRtl={isRtl} defaultActiveKey="1" tabPosition={mode} style={{ height: 220 }}>
            {[...Array(30).keys()].map(i => (
              <TabPane tab={`Tab-${i}`} key={i}>
                Content of tab {i}
              </TabPane>
            ))}
          </Tabs>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<SlidingTabsDemo />, mountNode);
```
