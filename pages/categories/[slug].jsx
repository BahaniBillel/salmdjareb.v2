import React from "react";
import { useRouter } from "next/router";
import data from "../../components/data";

function PageDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const page = data.find((x) => x.slug === slug);

  console.log(page);
  return (
    <div className="p-10 md:px-10 xl:px-40">
      <div>{page.label}</div>
    </div>
  );
}

export default PageDetail;
