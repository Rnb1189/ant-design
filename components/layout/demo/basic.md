---
order: 0
title:
  zh-CN: 基本结构
  en-US: Basic Structure
---

## zh-CN

典型的页面布局。

## en-US

Classic page layouts.

```jsx
import { Layout, Switch } from '../../index';
const { Header, Footer, Sider, Content } = Layout;

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
          <Layout isRtl={isRtl}>
            <Header>Header</Header>
            <Content>Content</Content>
            <Footer>Footer</Footer>
          </Layout>
          <br />
          <Layout isRtl={isRtl}>
            <Header>Header</Header>
            <Layout isRtl={isRtl}>
              <Sider>Sider</Sider>
              <Content>Content</Content>
            </Layout>
            <Footer>Footer</Footer>
          </Layout>
          <br />

          <Layout isRtl={isRtl}>
            <Header>Header</Header>
            <Layout isRtl={isRtl}>
              <Content>Content</Content>
              <Sider>Sider</Sider>
            </Layout>
            <Footer>Footer</Footer>
          </Layout>
          <br />

          <Layout isRtl={isRtl}>
            <Sider>Sider</Sider>
            <Layout isRtl={isRtl}>
              <Header>Header</Header>
              <Content>Content</Content>
              <Footer>Footer</Footer>
            </Layout>
          </Layout>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```

<style>
#components-layout-demo-basic .code-box-demo {
  text-align: center;
}
#components-layout-demo-basic .ant-layout-header,
#components-layout-demo-basic .ant-layout-footer {
  background: #7dbcea;
  color: #fff;
}
#components-layout-demo-basic .ant-layout-footer {
  line-height: 1.5;
}
#components-layout-demo-basic .ant-layout-sider {
  background: #3ba0e9;
  color: #fff;
  line-height: 120px;
}
#components-layout-demo-basic .ant-layout-content {
  background: rgba(16, 142, 233, 1);
  color: #fff;
  min-height: 120px;
  line-height: 120px;
}
#components-layout-demo-basic > .code-box-demo > div > .ant-layout {
  margin-bottom: 48px;
}
#components-layout-demo-basic > .code-box-demo > div > .ant-layout:last-child {
  margin: 0;
}
</style>
