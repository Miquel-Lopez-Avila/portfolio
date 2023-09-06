import styled     from 'styled-components';
import { tablet }             from 'application/styles/breakpoints';
import { Form, SubmitButton } from 'common/components/forms';

export const Wrapper = styled.div`
  margin-bottom: 60px;

  ${tablet} {
    margin-bottom: 120px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;

  ${tablet} {
    flex-direction: row;
  }
`;

export const ContainerContact = styled.div`
  width: 100%;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0 30px 40px 0 rgb(212 217 232 / 20%);

  ${tablet} {
    width: 50%;
  }
`;

export const ContainerText = styled.div`
  width: 100%;
  text-align: left;

  ${tablet} {
    width: 50%;
  }
`;

export const FormWrapper = styled(Form)`
  display: flex;
  flex-direction: column;
  padding: 30px 20px 0 20px;
  width: 100%;

  .ant-form-item {
    margin-bottom: 15px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0 20px 30px 0;
`;

export const SubmitContactForm = styled(SubmitButton)`
  cursor: pointer;
  width: 50%;
  padding: 0.7rem 0;
  margin: 20px 0;
  border-radius: 9999px;

  ${tablet} {
    padding: 0.7rem 3.5rem;
    width: 200px;
    margin: unset;
  }
`;

export const ContactTitles = styled.div`
  line-height: 33px !important;
`;

