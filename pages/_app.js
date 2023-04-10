import "tailwindcss/tailwind.css";
import Navigation from "../components/Navigation";
import "../styles.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main className=" h-screen">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
