import { forwardRef } from 'react';
import { Input as AntdInput }            from 'antd';
import { AppstoreOutlined }              from "@ant-design/icons";
import Icon from 'common/components/icon';

const Input = forwardRef(({ type, iconType = AppstoreOutlined, htmlType, autoFocus, ...rest }, ref) => {
  if (type === 'password') {
    return (
      <AntdInput.Password
        size="large"
        prefix={<Icon style={{ color: 'rgba(0,0,0,.25)' }} />}
        {...rest}
      />
    );
  }

  return (
    <AntdInput
      size="large"
      type={htmlType}
      prefix={<Icon type={iconType} style={{ color: 'rgba(0,0,0,.25)' }} />}
      {...rest}
    />
  );
});

export default Input;
