import { useEffect }               from 'react';
import { ThemeProvider }           from 'styled-components';
import AOS                         from 'aos';
import GlobalStyle                 from 'application/styles/global-styles';
import Layout                      from 'application/components/layout';
import { globalStylesPalette }     from 'application/styles/global-styles';

const MyApp = ({ Component, ...pageProps }) => {
  useEffect(() => {
    AOS.init({ duration: 750 });
  }, []);

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={globalStylesPalette}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
};

export default MyApp;
