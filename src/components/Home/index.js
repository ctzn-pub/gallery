import NextHead from 'next/head';
import { string } from 'prop-types';
import React from 'react';

const defaultDescription = '';
const defaultOGURL = '';
const defaultOGImage = '';

export const Home = props => (
  <NextHead>
    <title>{props.title || ''}</title>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/instantsearch.css@7.0.0/themes/algolia-min.css"
    />
    <link rel="stylesheet" href="instantsearch.css" />
  </NextHead>
);

Home.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string,
};

export default Home;