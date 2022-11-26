import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Product from "../../components/Products/Product";
import { Ipackage } from "../../interface/booking";
import { MainLayout } from "../../layouts/MainLayout";
import { getPackageById } from "../api/booking";

const BookPage: NextPage = () => {
  const router = useRouter();
  const query = router.query;
  const packageId: string = query.id ? query.id[0] : "";
  const [packageRes, setPackageRes] = useState<Ipackage>();

  useEffect(() => {
    const loadData = async () => {
      if(packageId) {
        const res = await getPackageById(packageId);
        if(res) {
          setPackageRes(res);
        }
        
      }
    }
    loadData();
  },[packageId])
  return (
    <MainLayout pageName="Booking">
      { (packageRes) && 
        <Product bookingData={packageRes} />
      }
    </MainLayout>
  );
};

export default BookPage;
