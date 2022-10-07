import React from 'react';
import { HeadFC, Link } from 'gatsby';

const IndexPage = () => {
  return (
    <main>
      <h1>Welcome to my first GatsbyJS site</h1>
      <Link to="/about">About</Link>
      <p>I'm building this by following the Gatsby tutorial</p>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
