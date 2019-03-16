import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

interface Props {
  baseURL: string;
}

export default class extends React.Component<Props, {}> {
  constructor(props) {
    super(props);
  }
  render() {
    return <div>{this.props.baseURL}</div>;
  }
}
