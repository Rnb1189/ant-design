---
order: 2
title:
  zh-CN: 图标
  en-US: Icon
---

## zh-CN

有图标的标签。

## en-US

The Tab with Icon.

```jsx
import { Tabs, Icon, Switch } from '../../index';
const { TabPane } = Tabs;

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
        <div style={{}}>
          <Tabs isRtl={isRtl} defaultActiveKey="2">
            <TabPane
              tab={
                <span>
                  <Icon type="apple" />
                  Tab 1
                </span>
              }
              key="1"
            >
              Tab 1
            </TabPane>
            <TabPane
              tab={
                <span>
                  <Icon type="android" />
                  Tab 2
                </span>
              }
              key="2"
            >
              Tab 2
            </TabPane>
          </Tabs>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```
