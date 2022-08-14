import React from 'react';
import type { NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { LandingSection } from '../src/components/landingSection/LandingSection';

const Home: NextPage = () => {
  return <LandingSection />;
};

export const getStaticProps = async ({ locale }: any) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'landingSection'])),
    },
  };
};

export default Home;
