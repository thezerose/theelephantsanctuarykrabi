import { GetServerSidePropsContext, NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import Book from '../components/Book';
import { Ipackages } from '../interface/booking';
import { MainLayout } from '../layouts/MainLayout';
import { getPackages } from './api/booking';

const Homepage: NextPage = () => {
  const [packageRes, setPackageRes] = useState<Ipackages>();
  useEffect(() => {
    const loadData = async () => {
      const res = await getPackages();
      console.log(res)
      if(res) {
        setPackageRes(res);
      }
    }
    loadData();
  },[])

  return (
    <MainLayout>
      { (packageRes) && 
        <Book bookingData={packageRes} />
      }
    </MainLayout>
  );
};
export default Homepage;

export async function getServerSideProps({
  req,
  res,
}: GetServerSidePropsContext) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=1800, stale-while-revalidate=59'
  );

  return {
    props: {},
  };
}