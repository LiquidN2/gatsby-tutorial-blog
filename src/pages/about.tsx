import React from 'react';
import { HeadFC, Link } from 'gatsby';

const AboutPage = () => {
  return (
    <main>
      <h1>About Me</h1>
      <Link to="/">Back to Homepage</Link>
      <p>
        Hello there, I am the proud creator of this page. I'm building it with
        Gatsby
      </p>
    </main>
  );
};

export const Head: HeadFC = () => <title>About Me</title>;

export default AboutPage;
