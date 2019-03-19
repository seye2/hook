import Head from 'next/head';
import Link from 'next/link';
import React, { useEffect } from 'react';
import api from '../api/createAxios';
import Index from '../components/index';

type Props = {
  NODE_ENV: string;
  baseURL: string;
};

export default (props: Props) => {
  useEffect(() => {
    api.get('/posts/42');
  }, []);

  return (
    <>
      <Index />
      <div>{this.props.baseURL}</div>
      <div>{this.props.NODE_ENV}</div>
    </>
  );
};
