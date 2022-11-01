import "tailwindcss/tailwind.css";
import Navigation from "../components/Navigation";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main className="bg-lightOrange h-screen">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
