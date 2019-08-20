---
order: 1
title:
  zh-CN: 标准样式
  en-US: Basic Page Header
---

## zh-CN

标准页头，适合使用在需要简单描述的场景。

## en-US

Standard header, suitable for use in scenarios that require a brief description.

```jsx
import { PageHeader, Switch } from '../../index';

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
          <PageHeader
            isRtl={isRtl}
            onBack={() => null}
            title="Title"
            subTitle="This is a subtitle"
          />
          <PageHeader isRtl={isRtl} backIcon={null} title="Title" subTitle="This is a subtitle" />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```

<style>
.code-box-demo .ant-page-header {
  border: 1px solid rgb(235, 237, 240);
}
<style>
