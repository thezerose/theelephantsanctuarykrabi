import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Result from "../../components/Conclusion/Result";
import { MainLayout } from "../../layouts/MainLayout";

const SummaryPage: NextPage = () => {
  const router = useRouter();
  useEffect(() => {
    console.log(router.query);
  }, [router.query]);

  return (
    <MainLayout pageName="summary">
      <Result />
    </MainLayout>
  );
};

export default SummaryPage;
