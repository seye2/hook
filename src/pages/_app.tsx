import React from 'react';
import App, { Container } from 'next/app';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
console.log('publicRuntimeConfig', publicRuntimeConfig);
const { API_URL } = publicRuntimeConfig;

export default class MyApp extends App<any, any> {
  static defaultProps = {
    config: {
      baseURL: API_URL,
    },
  };

  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  componentDidCatch(error, errorInfo) {
    console.log('CUSTOM ERROR HANDLING', error);
    // This is needed to render errors correctly in development / production
    super.componentDidCatch(error, errorInfo);
  }

  render() {
    const { props } = this as any;
    const { Component, pageProps, config } = props;
    return (
      <Container>
        <Component {...pageProps} {...config} />
      </Container>
    );
  }
}

// interface Props {
//     Component: React.Component
//     pageProps: any
//     store: any
//     isMobile: boolean
// }
