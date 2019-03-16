import React from 'react';
import App, { Container } from 'next/app';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const { API_URL, NODE_ENV } = publicRuntimeConfig;

export default class MyApp extends App<any, any> {
  static defaultProps = {
    config: {
      baseURL: API_URL,
      NODE_ENV: NODE_ENV,
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
    const { Component, pageProps, config } = this.props;
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
