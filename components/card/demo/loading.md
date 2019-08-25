---
order: 5
title:
  zh-CN: 预加载的卡片
  en-US: Loading card
---

## zh-CN

数据读入前会有文本块样式。

## en-US

Shows a loading indicator while the contents of the card is being fetched.

```jsx
import { Skeleton, Switch, Card, Icon, Avatar } from '../../index';

const { Meta } = Card;

class App extends React.Component {
  state = { isRtl: false, loading: true };

  toggleRtl = () => {
    this.setState({ isRtl: !this.state.isRtl });
  };

  onChange = checked => {
    this.setState({ loading: !checked });
  };

  render() {
    const { loading, isRtl } = this.state;

    return (
      <div>
        <Switch checkedChildren="Rtl" unCheckedChildren="Ltr" onChange={this.toggleRtl} />
        <br />
        <br />
        <Switch checked={!loading} onChange={this.onChange} />

        <Card isRtl={isRtl} style={{ width: 300, marginTop: 16 }} loading={loading}>
          <Meta
            avatar={
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            }
            title="Card title"
            description="This is the description"
          />
        </Card>

        <Card
          isRtl={isRtl}
          style={{ width: 300, marginTop: 16 }}
          actions={[
            <Icon type="setting" key="setting" />,
            <Icon type="edit" key="edit" />,
            <Icon type="ellipsis" key="ellipsis" />,
          ]}
        >
          <Skeleton isRtl={isRtl} loading={loading} avatar active>
            <Meta
              isRtl={isRtl}
              avatar={
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              }
              title="Card title"
              description="This is the description"
            />
          </Skeleton>
        </Card>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```
