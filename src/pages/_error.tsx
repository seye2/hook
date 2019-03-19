import React from 'react';

type Props = {
  statusCode: string;
};

const Error = (props: Props) => {
  return (
    <p>
      {this.props.statusCode
        ? `An error ${this.props.statusCode} occurred on server`
        : 'An error occurred on client'}
    </p>
  );
};

Error.getInitialProps = async ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : null;
  return { statusCode };
};

export default Error;
