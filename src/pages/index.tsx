import * as React from 'react';
import { HeadFC } from 'gatsby';
import Layout from '../components/layout';

const IndexPage = () => {
  return (
    <Layout pageTitle="Welcome to my Gatsby site">
      <p>I am building this by following the Gatsby tutorial</p>
    </Layout>
  );
};

export const Head: HeadFC = () => <title>Home Page</title>;

export default IndexPage;
