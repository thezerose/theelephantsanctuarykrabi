import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import PaymentDetail from "../../components/payments/PaymentDetail";
import Product from "../../components/Products/Product";
import { MainLayout } from "../../layouts/MainLayout";

const PaymentPage: NextPage = () => {
  //http://localhost:3002/payment?adult=1&child=0&infant&package=1&bookdate=2022-11-28
  const router = useRouter();
  useEffect(() => {
    console.log(router.query);
  }, [router.query]);
  
  return (
    <MainLayout pageName="Payment">
        <PaymentDetail/>
    </MainLayout>
  );
};

export default PaymentPage;
