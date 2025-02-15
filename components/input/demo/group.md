---
order: 3
title:
  zh-CN: 输入框组合
  en-US: Input Group
---

## zh-CN

输入框的组合展现。

注意：使用 `compact` 模式时，不需要通过 `Col` 来控制宽度。

## en-US

Input.Group example

Note: You don't need `Col` to control the width in the `compact` mode.

```jsx
import {
  Input,
  Col,
  Row,
  Select,
  InputNumber,
  DatePicker,
  AutoComplete,
  Cascader,
  Switch,
} from '../../index';

const InputGroup = Input.Group;
const { Option } = Select;

const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];

class CompactDemo extends React.Component {
  state = {
    dataSource: [],
    isRtl: false,
  };

  toggleRtl = () => {
    this.setState({ isRtl: !this.state.isRtl });
  };

  handleChange = value => {
    this.setState({
      dataSource:
        !value || value.indexOf('@') >= 0
          ? []
          : [`${value}@gmail.com`, `${value}@163.com`, `${value}@qq.com`],
    });
  };

  render() {
    const isRtl = this.state.isRtl;
    const dirStyle = { direction: `${isRtl ? 'rtl' : 'ltr'}` };

    return (
      <div>
        <Switch checkedChildren="Rtl" unCheckedChildren="Ltr" onChange={this.toggleRtl} />
        <br />
        <div style={{}}>
          <InputGroup isRtl={isRtl} size="large">
            <Row isRtl={isRtl} gutter={8}>
              <Col span={5}>
                <Input isRtl={isRtl} defaultValue="05710" />
              </Col>
              <Col span={8}>
                <Input isRtl={isRtl} defaultValue="268888880" />
              </Col>
            </Row>
          </InputGroup>
          <br />
          <InputGroup isRtl={isRtl} compact>
            <Input isRtl={isRtl} style={{ width: '20%' }} defaultValue="0571" />
            <Input isRtl={isRtl} style={{ width: '30%' }} defaultValue="26888888" />
          </InputGroup>
          <br />
          <InputGroup isRtl={isRtl} compact>
            <Select isRtl={isRtl} defaultValue="Zhejiang">
              <Option value="Zhejiang">Zhejiang</Option>
              <Option value="Jiangsu">Jiangsu</Option>
            </Select>
            <Input isRtl={isRtl} style={{ width: '50%' }} defaultValue="Xihu District, Hangzhou" />
          </InputGroup>
          <br />
          <InputGroup isRtl={isRtl} compact>
            <Select isRtl={isRtl} defaultValue="Option1">
              <Option value="Option1">Option1</Option>
              <Option value="Option2">Option2</Option>
            </Select>
            <Input isRtl={isRtl} style={{ width: '50%' }} defaultValue="input content" />
            <InputNumber isRtl={isRtl} />
          </InputGroup>
          <br />
          <InputGroup isRtl={isRtl} compact>
            <Input isRtl={isRtl} style={{ width: '50%' }} defaultValue="input content" />
            <DatePicker isRtl={isRtl} style={{ width: '50%' }} />
          </InputGroup>
          <br />
          <InputGroup isRtl={isRtl} compact>
            <Select isRtl={isRtl} defaultValue="Option1-1">
              <Option value="Option1-1">Option1-1</Option>
              <Option value="Option1-2">Option1-2</Option>
            </Select>
            <Select isRtl={isRtl} defaultValue="Option2-2">
              <Option value="Option2-1">Option2-1</Option>
              <Option value="Option2-2">Option2-2</Option>
            </Select>
          </InputGroup>
          <br />
          <InputGroup isRtl={isRtl} compact>
            <Select isRtl={isRtl} defaultValue="1">
              <Option value="1">Between</Option>
              <Option value="2">Except</Option>
            </Select>
            <Input
              isRtl={isRtl}
              style={{ width: 100, textAlign: 'center' }}
              placeholder="Minimum"
            />
            <Input
              isRtl={isRtl}
              style={{
                width: 30,
                borderLeft: 0,
                pointerEvents: 'none',
                backgroundColor: '#fff',
              }}
              placeholder="~"
              disabled
            />
            <Input
              isRtl={isRtl}
              style={{ width: 100, textAlign: 'center', borderLeft: 0 }}
              placeholder="Maximum"
            />
          </InputGroup>
          <br />
          <InputGroup isRtl={isRtl} compact>
            <Select isRtl={isRtl} defaultValue="Sign Up">
              <Option value="Sign Up">Sign Up</Option>
              <Option value="Sign In">Sign In</Option>
            </Select>
            <AutoComplete
              isRtl={isRtl}
              dataSource={this.state.dataSource}
              style={{ width: 200 }}
              onChange={this.handleChange}
              placeholder="Email"
            />
          </InputGroup>
          <br />
          <InputGroup isRtl={isRtl} compact>
            <Select isRtl={isRtl} style={{ width: '30%' }} defaultValue="Home">
              <Option value="Home">Home</Option>
              <Option value="Company">Company</Option>
            </Select>
            <Cascader
              isRtl={isRtl}
              style={{ width: '70%' }}
              options={options}
              placeholder="Select Address"
            />
          </InputGroup>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<CompactDemo />, mountNode);
```
