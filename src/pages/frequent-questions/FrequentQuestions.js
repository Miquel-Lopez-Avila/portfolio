import React                                                                                        from 'react';
import PageLayout                                                                                   from 'common/components/page-layout';
import WrapperTitleWithUnderline          from 'common/components/wrapper-tiltles-with-underline';
import { Wrapper, Primary, SubTitle, Title, Item, TitleItem, TitleDescription, Content, PageImage, FlexContainer } from './FrequentQuestions.styled';

const FrequentQuestions = () => {
  return (
    <PageLayout>
      <Wrapper>
        <div>
          <FlexContainer>
            <Content>
              <div>
                <WrapperTitleWithUnderline underlineLeft paddingBottom={'15px'} marginBottom={'50px'}>
                  <Title>Consulta las <Primary>Preguntas Frecuentes</Primary></Title>
                  <SubTitle>¿Tienes alguna duda? Ponte en contacto y te ayudamos.</SubTitle>
                </WrapperTitleWithUnderline>
              </div>
              <Item>
                <TitleItem>¿El servicio de WeParking está disponible las 24 horas?</TitleItem>
                <TitleDescription>Actualmente nuestro horario es de lunes a domingo de 5:30 a 0:30</TitleDescription>
              </Item>
              <Item>
                <TitleItem>¿Puedo modificar mi reserva?</TitleItem>
                <TitleDescription>¡Por supuesto! Para cualquier cambio con la reserva puede ponerse en contacto al siguiente correo electrónico: info@weparking.es</TitleDescription>
              </Item>
              <Item>
                <TitleItem>¿Cómo puedo cancelar mi reserva?</TitleItem>
                <TitleDescription>Puedes cancelar tu reserva desde nuestra página web o poniéndose en contacto con nosotros vía email: info@weparking.es</TitleDescription>
              </Item>
              <Item>
                <TitleItem>¿Existe algún recargo por cancelar mi reserva?</TitleItem>
                <TitleDescription>Es totalmente gratuito, siempre y cuando se haga 24 horas antes de la hora establecida para la entrega.</TitleDescription>
              </Item>
              <Item>
                <TitleItem>¿Cómo sé que mi reserva se ha confirmado?</TitleItem>
                <TitleDescription>Una vez finalizado el proceso de reserva recibirás un correo de confirmación en el mail que nos hayas proporcionado. En caso que no recibas ningún correo, póngase en contacto con nosotros vía email: info@weparking.es</TitleDescription>
              </Item>
              <Item>
                <TitleItem>¿Puedo hacer una reserva el mismo día?</TitleItem>
                <TitleDescription>Sí, podrás hacer una reserva el mismo día siempre que la realices 8 horas antes de su llegada al aeropuerto.</TitleDescription>
              </Item>
              <Item>
                <TitleItem>¿Por qué es necesario mi número de vuelo?</TitleItem>
                <TitleDescription>Sí, podrás hacer una reserva el mismo día siempre que la realices 8 horas antes de su llegada al aeropuerto.</TitleDescription>
              </Item>
            </Content>
            <PageImage />
          </FlexContainer>
        </div>
      </Wrapper>
    </PageLayout>
  );
};

export default FrequentQuestions;
