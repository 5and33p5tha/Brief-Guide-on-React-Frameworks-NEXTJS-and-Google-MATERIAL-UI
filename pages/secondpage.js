import Head from "next/head";
import Footer from "../component/Footer";
// Removed as now components wrap pages as in layout.js defined in _app.js
import Header from "../component/Header";

const secondpage = () => {
  return (
    <>
      <Head></Head>

      <h1>This is my second page.</h1>
    </>
  );
};

export default secondpage;
