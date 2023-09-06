import React, { useState }            from 'react';
import { MailOutlined, UserOutlined } from "@ant-design/icons";
import SecondaryBanner                            from 'common/components/secondary-banner/SecondaryBanner';
import SectionWrapper                             from 'common/components/section-wrapper';
import FormItem                                   from 'common/components/forms/components/form-item';
import { useForm }                                from 'common/components/forms';
import TextArea                                   from 'common/components/forms/items/text-area';
import SubTitle                                   from 'common/components/headings-and-text/variants/sub-title';
import Text                                       from 'common/components/headings-and-text/variants/text';
import Title                                      from 'common/components/headings-and-text/variants/title';
import WrapperTitleWithUnderline                  from 'common/components/wrapper-tiltles-with-underline';
import Input                            from 'common/components/forms/items/input';
import { errorMessage, successMessage } from 'common/utils/feedback';
import Loader                           from 'common/components/loader';
import { sendContactForm }              from "../../../lib/api";
import {
  ButtonsContainer,
  ContactTitles,
  ContainerContact,
  ContainerText,
  Content,
  FormWrapper,
  SubmitContactForm, Wrapper
} from './Contact.styled';

const Contact = () => {
  const [form] = useForm();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (values) => {
    await form.validateFields(['email', 'subject', 'comment']);
    setIsLoading(true);

    try {
      await sendContactForm({ ...values, ['name']: 'client' });
      successMessage('Mensaje enviado correctamente');
      form.resetFields();
    } catch (error) {
      setIsLoading(false);
      errorMessage(error.message)
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Wrapper>
      {isLoading && <Loader/>}
      <SecondaryBanner title={'Ponte en contacto'} subTitle={'¿Tienes alguna duda? Ponte en contacto'}/>
      <SectionWrapper>
        <Content>
          <ContainerContact>
            <FormWrapper
              form={form}
              name="contact"
              onFinish={onSubmit}
            >
              <FormItem
                name="email"
                type={'email'}
                rules={[
                  {
                    type: 'email',
                    message: 'El email no es valido',
                  },
                  {required: true, message: 'El campo no puede estar vacío'}
                ]}
              >
                <Input
                  placeholder="Tu mail"
                  type={'email'}
                  iconType={MailOutlined}
                />
              </FormItem>
              <FormItem
                name="subject"
                rules={[{required: true, message: 'El apellido es obligatorio'}]}
              >
                <Input
                  placeholder="Asunto"
                  type={'text'}
                  iconType={UserOutlined}
                />
              </FormItem>
              <FormItem
                name="message"
                rules={[{required: true, message: 'El mensaje es obligatorio'}]}
                style={{ width: '100%' }}
              >
                <TextArea
                  placeholder="Mensaje"
                  type={'text'}
                  rows={8}
                />
              </FormItem>
              <ButtonsContainer>
                <SubmitContactForm>Enviar mail</SubmitContactForm>
              </ButtonsContainer>
            </FormWrapper>
          </ContainerContact>
          <ContainerText>
            <WrapperTitleWithUnderline underlineLeft paddingBottom={'10px'}>
              <ContactTitles>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <Title disableMarginBottom>Let's talk about</Title>
                <SubTitle disableMarginBottom>Everything!</SubTitle>
              </ContactTitles>
            </WrapperTitleWithUnderline>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, autem debitis delectus
              distinctio fuga fugiat labore maiores molestiae, nemo neque nesciunt nobis officia optio quae
              quibusdam ratione repellendus sit veniam.
            </Text>
          </ContainerText>
        </Content>
      </SectionWrapper>
    </Wrapper>
  );
};

export default Contact;
