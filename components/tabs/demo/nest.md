---
order: 99
debug: true
title:
  zh-CN: 嵌套
  en-US: Nest
---

## zh-CN

默认选中第一项。

## en-US

Default activate first tab.

```jsx
import { Tabs, Select, Switch } from '../../index';

const { TabPane } = Tabs;
const { Option } = Select;

const positionList = ['left', 'right', 'top', 'bottom'];

const list = new Array(20).fill().map((_, index) => index);

class Demo extends React.Component {
  state = {
    parentPos: undefined,
    childPos: undefined,
    parentType: undefined,
    childType: undefined,
    isRtl: false,
  };

  toggleRtl = () => {
    this.setState({ isRtl: !this.state.isRtl });
  };

  render() {
    const { parentPos, childPos, parentType, childType, isRtl } = this.state;

    return (
      <div>
        <Switch checkedChildren="Rtl" unCheckedChildren="Ltr" onChange={this.toggleRtl} />
        <br />
        <div>
          <Select
            isRtl={isRtl}
            style={{ width: 200 }}
            onChange={val => {
              this.setState({ parentPos: val });
            }}
          >
            {positionList.map(pos => (
              <Option key={pos} value={pos}>
                Parent - {pos}
              </Option>
            ))}
          </Select>

          <Select
            isRtl={isRtl}
            style={{ width: 200 }}
            onChange={val => {
              this.setState({ childPos: val });
            }}
          >
            {positionList.map(pos => (
              <Option key={pos} value={pos}>
                Child - {pos}
              </Option>
            ))}
          </Select>

          <Select
            isRtl={isRtl}
            style={{ width: 200 }}
            onChange={val => {
              this.setState({ parentType: val });
            }}
          >
            <Option value="line">Parent - line</Option>
            <Option value="card">Parent - card</Option>
          </Select>

          <Select
            isRtl={isRtl}
            style={{ width: 200 }}
            onChange={val => {
              this.setState({ childType: val });
            }}
          >
            <Option value="line">Child - line</Option>
            <Option value="card">Child - card</Option>
          </Select>

          <Tabs isRtl={isRtl} defaultActiveKey="1" tabPosition={parentPos} type={parentType}>
            <TabPane tab="Tab 1" key="1">
              <Tabs
                isRtl={isRtl}
                defaultActiveKey="1"
                tabPosition={childPos}
                type={childType}
                style={{ height: 300 }}
              >
                {list.map(key => (
                  <TabPane tab={`Tab ${key}`} key={key}>
                    TTTT {key}
                  </TabPane>
                ))}
              </Tabs>
            </TabPane>
            <TabPane tab="Tab 2" key="2">
              Content of Tab Pane 2
            </TabPane>
          </Tabs>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
