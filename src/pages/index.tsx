import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
export interface Props {
  title: string;
}

export default class extends React.Component<Props, {}> {
  constructor(props) {
    super(props);
  }
  render() {
    return <div>t est </div>;
  }
}
