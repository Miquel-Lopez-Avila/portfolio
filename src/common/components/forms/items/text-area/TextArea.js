import { Input } from 'antd';

const TextArea = ({ autoSize, ...rest }) => (
  <Input.TextArea autoSize={autoSize} {...rest} />
);

export default TextArea;
