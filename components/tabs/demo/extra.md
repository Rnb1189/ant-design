---
order: 4
title:
  zh-CN: 附加内容
  en-US: Extra content
---

## zh-CN

可以在页签右边添加附加操作。

## en-US

You can add extra actions to the right of Tabs.

```jsx
import { Tabs, Button, Switch } from '../../index';
const { TabPane } = Tabs;
const operations = <Button>Extra Action</Button>;

class App extends React.Component {
  state = {
    isRtl: false,
  };

  toggleRtl = () => {
    this.setState({ isRtl: !this.state.isRtl });
  };

  callback = key => {
    console.log(key);
  };

  render() {
    const isRtl = this.state.isRtl;
    const dirStyle = { direction: `${isRtl ? 'rtl' : 'ltr'}` };
    return (
      <div>
        <Switch checkedChildren="Rtl" unCheckedChildren="Ltr" onChange={this.toggleRtl} />
        <br />
        <div style={{}}>
          <Tabs isRtl={isRtl} tabBarExtraContent={operations}>
            <TabPane tab="Tab 1" key="1">
              Content of tab 1
            </TabPane>
            <TabPane tab="Tab 2" key="2">
              Content of tab 2
            </TabPane>
            <TabPane tab="Tab 3" key="3">
              Content of tab 3
            </TabPane>
          </Tabs>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```
