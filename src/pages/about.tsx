import * as React from 'react';
import { HeadFC } from 'gatsby';
import Layout from '../components/layout';

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>
        Hello there, I am the proud creator of this page. I'm building it with
        Gatsby
      </p>
    </Layout>
  );
};

export const Head: HeadFC = () => <title>About Me</title>;

export default AboutPage;
