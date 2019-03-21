import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import api from '../api/createAxios';
import Index from '../components/index';

interface Props {
  NODE_ENV: string;
  baseURL: string;
}

export default class extends React.Component<Props, {}> {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    api.get('/posts/42');
    // console.log(this.props);
  }
  render() {
    return (
      <>
        <Index />
        <div>{this.props.baseURL}</div>
        <div>{this.props.NODE_ENV}</div>
      </>
    );
  }
}
