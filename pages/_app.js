import Layout from "../component/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  //Unlike ReactJS, In NextJS, we install each component individually. This Makes It Relatively Light-Weight.
  return (
    <>
      {/* Here, all components will be wrapped in layout.js format */}
      <Layout>
        <Component {...pageProps} />
        {/* This pageProps will be sent on children on layout.js. Thus the Format in Layout.js is carried out */}
      </Layout>
    </>
  );
}

export default MyApp;
