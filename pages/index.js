import Head from "next/head";
import Banner from "../components/Home/Banner";
import ExploreCartegories from "../components/Home/ExploreCategories";
import UploadData from "../components/UploadData";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sal Mdjareb</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="relative h-screen ">
        <Banner />
        <ExploreCartegories />
        <UploadData />
      </main>
    </div>
  );
}
