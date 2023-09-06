import { FormItemStyled } from './FormItem.styled';

const FormItem = ({ children, ...rest }) => (
  <FormItemStyled {...rest} required={false}>{children}</FormItemStyled>
)

export default FormItem;
