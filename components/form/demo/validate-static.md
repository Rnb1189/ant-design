---
order: 10
title:
  zh-CN: 自定义校验
  en-US: Customized Validation
---

## zh-CN

我们提供了 `validateStatus` `help` `hasFeedback` 等属性，你可以不需要使用 `Form.create` 和 `getFieldDecorator`，自己定义校验的时机和内容。

1. `validateStatus`: 校验状态，可选 'success', 'warning', 'error', 'validating'。
2. `hasFeedback`：用于给输入框添加反馈图标。
3. `help`：设置校验文案。

## en-US

We provide properties like `validateStatus` `help` `hasFeedback` to customize your own validate status and message, without using `Form.create` and `getFieldDecorator`.

1. `validateStatus`: validate status of form components which could be 'success', 'warning', 'error', 'validating'.
2. `hasFeedback`: display feed icon of input control
3. `help`: display validate message.

```jsx
import {
  Form,
  Input,
  DatePicker,
  TimePicker,
  Select,
  Cascader,
  InputNumber,
  Icon,
  Tooltip,
} from 'antd';

const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 5 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 18 },
  },
};

ReactDOM.render(
  <div>
    <Form {...formItemLayout}>
      <Form.Item
        label="Fail"
        validateStatus="error"
        help="Should be combination of numbers & alphabets"
      >
        <Input placeholder="unavailable choice" id="error" />
      </Form.Item>
      <Form.Item label="Fail2" validateStatus="error" help="addon test">
        <Input
          placeholder="unavailable choice"
          id="error2"
          addonBefore="Http://"
          addonAfter=".com"
          defaultValue="mysite"
        />
      </Form.Item>
      <Form.Item label="Fail3" validateStatus="error" help="addon test2">
        <Input
          placeholder="Enter your username"
          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
          suffix={
            <Tooltip title="Extra information">
              <Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
            </Tooltip>
          }
        />
      </Form.Item>

      <Form.Item label="Fail4" validateStatus="error" help="addon test2">
        <Input.Group compact id="dummy">
          <Select defaultValue="Option1">
            <Option value="Option1">Option1</Option>
            <Option value="Option2">Option2</Option>
          </Select>
          <Input style={{ width: '50%' }} defaultValue="input content" />
          <InputNumber />
        </Input.Group>
      </Form.Item>

      <Form.Item label="Warning" validateStatus="warning">
        <Input placeholder="Warning" id="warning" />
      </Form.Item>

      <Form.Item
        label="Validating"
        hasFeedback
        validateStatus="validating"
        help="The information is being validated..."
      >
        <Input placeholder="I'm the content is being validated" id="validating" />
      </Form.Item>

      <Form.Item label="Success" hasFeedback validateStatus="success">
        <Input placeholder="I'm the content" id="success" />
      </Form.Item>

      <Form.Item label="Warning" hasFeedback validateStatus="warning">
        <Input placeholder="Warning" id="warning2" />
      </Form.Item>

      <Form.Item
        label="Fail"
        hasFeedback
        validateStatus="error"
        help="Should be combination of numbers & alphabets"
      >
        <Input placeholder="unavailable choice" id="error2" />
      </Form.Item>

      <Form.Item label="Success" hasFeedback validateStatus="success">
        <DatePicker style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item label="Warning" hasFeedback validateStatus="warning">
        <TimePicker style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item label="Error" hasFeedback validateStatus="error">
        <Select defaultValue="1">
          <Option value="1">Option 1</Option>
          <Option value="2">Option 2</Option>
          <Option value="3">Option 3</Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="Validating"
        hasFeedback
        validateStatus="validating"
        help="The information is being validated..."
      >
        <Cascader defaultValue={['1']} options={[]} />
      </Form.Item>

      <Form.Item label="inline" style={{ marginBottom: 0 }}>
        <Form.Item
          validateStatus="error"
          help="Please select the correct date"
          style={{ display: 'inline-block', width: 'calc(50% - 12px)' }}
        >
          <DatePicker />
        </Form.Item>
        <span style={{ display: 'inline-block', width: '24px', textAlign: 'center' }}>-</span>
        <Form.Item style={{ display: 'inline-block', width: 'calc(50% - 12px)' }}>
          <DatePicker />
        </Form.Item>
      </Form.Item>

      <Form.Item label="Success" hasFeedback validateStatus="success">
        <InputNumber style={{ width: '100%' }} />
      </Form.Item>
    </Form>
    <div style={{ margin: 20, backgroundColor: '#fff0f6' }}>Rtl</div>
    <Form isRtl={true} {...formItemLayout}>
      <Form.Item
        isRtl={true}
        label="Fail"
        validateStatus="error"
        help="Should be combination of numbers & alphabets"
      >
        <Input isRtl={true} placeholder="unavailable choice" id="error" />
      </Form.Item>

      <Form.Item
        isRtl={true}
        label="Fail2"
        validateStatus="error"
        help="Should be combination of numbers & alphabets"
      >
        <Input
          isRtl={true}
          placeholder="unavailable choice"
          id="error2"
          addonBefore="Http://"
          addonAfter=".com"
          defaultValue="mysite"
        />
      </Form.Item>

      <Form.Item isRtl={true} label="Fail3" validateStatus="error" help="addon test2">
        <Input
          isRtl={true}
          placeholder="Enter your username"
          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
          suffix={
            <Tooltip title="Extra information">
              <Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
            </Tooltip>
          }
        />
      </Form.Item>

      <Form.Item isRtl={true} label="Fail4" validateStatus="error" help="addon test2">
        <Input.Group isRtl={true} compact id="dummy">
          <Select isRtl={true} defaultValue="Option1">
            <Option value="Option1">Option1</Option>
            <Option value="Option2">Option2</Option>
          </Select>
          <Input isRtl={true} style={{ width: '50%' }} defaultValue="input content" />
          <InputNumber isRtl={true} />
        </Input.Group>
      </Form.Item>

      <Form.Item isRtl={true} label="Warning" validateStatus="warning">
        <Input isRtl={true} placeholder="Warning" id="warning" />
      </Form.Item>

      <Form.Item
        isRtl={true}
        label="Validating"
        hasFeedback
        validateStatus="validating"
        help="The information is being validated..."
      >
        <Input isRtl={true} placeholder="I'm the content is being validated" id="validating" />
      </Form.Item>

      <Form.Item isRtl={true} label="Success" hasFeedback validateStatus="success">
        <Input isRtl={true} placeholder="I'm the content" id="success" />
      </Form.Item>

      <Form.Item isRtl={true} label="Warning" hasFeedback validateStatus="warning">
        <Input isRtl={true} placeholder="Warning" id="warning2" />
      </Form.Item>

      <Form.Item
        isRtl={true}
        label="Fail"
        hasFeedback
        validateStatus="error"
        help="Should be combination of numbers & alphabets"
      >
        <Input isRtl={true} placeholder="unavailable choice" id="error2" />
      </Form.Item>

      <Form.Item isRtl={true} label="Success" hasFeedback validateStatus="success">
        <DatePicker isRtl={true} style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item isRtl={true} label="Warning" hasFeedback validateStatus="warning">
        <TimePicker isRtl={true} style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item isRtl={true} label="Error" hasFeedback validateStatus="error">
        <Select isRtl={true} defaultValue="1">
          <Option value="1">Option 1</Option>
          <Option value="2">Option 2</Option>
          <Option value="3">Option 3</Option>
        </Select>
      </Form.Item>

      <Form.Item
        isRtl={true}
        label="Validating"
        hasFeedback
        validateStatus="validating"
        help="The information is being validated..."
      >
        <Cascader isRtl={true} defaultValue={['1']} options={[]} />
      </Form.Item>

      <Form.Item isRtl={true} label="inline" style={{ marginBottom: 0 }}>
        <Form.Item
          isRtl={true}
          validateStatus="error"
          help="Please select the correct date"
          style={{ display: 'inline-block', width: 'calc(50% - 12px)' }}
        >
          <DatePicker isRtl={true} />
        </Form.Item>
        <span style={{ display: 'inline-block', width: '24px', textAlign: 'center' }}>-</span>
        <Form.Item isRtl={true} style={{ display: 'inline-block', width: 'calc(50% - 12px)' }}>
          <DatePicker isRtl={true} />
        </Form.Item>
      </Form.Item>

      <Form.Item isRtl={true} label="Success" hasFeedback validateStatus="success">
        <InputNumber isRtl={true} style={{ width: '100%' }} />
      </Form.Item>
    </Form>
  </div>,

  mountNode,
);
```
