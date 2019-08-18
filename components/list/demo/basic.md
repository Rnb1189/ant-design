---
order: 1
title:
  zh-CN: 基础列表
  en-US: Basic list
---

## zh-CN

基础列表。

## en-US

Basic list.

```jsx
import { List, Avatar, Switch } from '../../index';

class App extends React.Component {
  state = {
    isRtl: false,
  };

  data = [
    {
      title: 'Ant Design Title 1',
    },
    {
      title: 'Ant Design Title 2',
    },
    {
      title: 'Ant Design Title 3',
    },
    {
      title: 'Ant Design Title 4',
    },
  ];

  toggleRtl = () => {
    this.setState({
      ...this.state,
      isRtl: !this.state.isRtl,
    });
  };

  render() {
    const isRtl = this.state.isRtl;
    return (
      <div>
        <Switch checkedChildren="Rtl" unCheckedChildren="Ltr" onChange={this.toggleRtl} />
        <br />
        <List
          isRtl={isRtl}
          itemLayout="horizontal"
          dataSource={this.data}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                title={<a href="https://ant.design">{item.title}</a>}
                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
              />
            </List.Item>
          )}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```
