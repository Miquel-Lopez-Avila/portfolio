import Button from 'common/components/button';

const SubmitButton = ({ children, ...rest }) => (
  <Button htmltype="submit" {...rest}>
    {children}
  </Button>
);

export default SubmitButton;
