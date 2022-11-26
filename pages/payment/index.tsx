import { NextPage } from "next";
import PaymentDetail from "../../components/payments/PaymentDetail";
import Product from "../../components/Products/Product";
import { MainLayout } from "../../layouts/MainLayout";

const PaymentPage: NextPage = () => {
  return (
    <MainLayout pageName="Payment">
        <PaymentDetail/>
    </MainLayout>
  );
};

export default PaymentPage;
