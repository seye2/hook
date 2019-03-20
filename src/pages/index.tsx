import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import api from '../api/createAxios';
import Index from '../components/index'

interface Props {
  NODE_ENV: string,
  baseURL: string;
}

export default class extends React.Component<Props, {}> {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    api.get('/posts/42');
  }
  render() {
    return (
      <>
        <Index></Index>
        <div>{this.props.baseURL}</div>
        <div>{this.props.NODE_ENV}</div>
      </>
    );
  }
}
