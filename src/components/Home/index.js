import NextHead from 'next/head';
import { string } from 'prop-types';
import React from 'react';

export const Home = props => (
  <NextHead>
    <title>{props.title || ''}</title>
  </NextHead>
);

Home.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string,
};

export default Home;