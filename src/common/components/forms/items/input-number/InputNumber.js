import { InputNumberWrapper } from './InputNumber.styled';

const InputNumber = ({ size, step, ...rest }) => <InputNumberWrapper size={size} step={step} {...rest} />;

export default InputNumber;
